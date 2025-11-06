**SmartStay – Thu thập & chuẩn hóa dữ liệu chỗ ở**
Người phụ trách: 24127099 – Phan Tuấn Phong
Mục tiêu: Xây dựng dòng dữ liệu (data pipeline) đủ rộng (coverage), mới (freshness), đúng (quality) để phục vụ mô hình gợi ý chỗ ở tại Việt Nam (ưu tiên TP.HCM, Đà Nẵng, Hà Nội).

1) Nhu cầu dữ liệu
| **Nhóm** | **Trường dữ liệu cốt lõi** | **Ghi chú chuẩn hóa** |
|-----------|-----------------------------|------------------------|
| **Định danh** | `hotel_id`, `source`, `url` | Sinh `global_id = hash(normalize(name) + geohash(lat, lon))` để chống trùng |
| **Mô tả** | `name`, `brand`, `description`, `tags` | Tách `tags` thành danh sách chuẩn (“near-metro”, “family”, “budget”, …) |
| **Vị trí** | `lat`, `lon`, `address`, `district`, `city`, `country` | Chuẩn hóa địa chỉ (VNAddress, OSM/Geocoding) |
| **Giá & phòng** | `min_price`, `currency`, `room_type`, `beds`, `capacity`, `breakfast_included`, `refundable` | Giá theo đêm; lưu cả `price_source_time` |
| **Chất lượng** | `rating`, `review_count` | Tách rating theo `source` |
| **Tiện ích** | `amenities` (wifi, pool, parking, …) | Chuẩn hóa thành enum/boolean |
| **Hình ảnh** | `image_url_list` | Lưu tối thiểu 1 ảnh/khách sạn |
| **Chính sách** | `checkin`, `checkout`, `cancellation_policy` | — |
| **Khoảng cách** | `distance_to_POI` (chợ, sân bay, bãi biển, điểm du lịch, …) | Tính qua Google/OSM khi cần |

Ví dụ:
    {
    "poi_id": "HCM_HOTEL_00123",
    "name": "La Vela Saigon Hotel",
    "type": "accommodation",
    "lat": 10.788694,
    "lon": 106.68536,
    "address": "280 Nam Kỳ Khởi Nghĩa, Quận 3, TP. Hồ Chí Minh",
    "rating": 4.8,
    "review_count": 2026,
    "min_price": 133,
    "currency": "USD",
    "amenities": ["wifi", "pool", "parking", "restaurant"],
    "distance_to_POI": {
        "Tan Son Nhat Airport": 6.5,
        "Ben Thanh Market": 1.8
    },
    "source": "Amadeus API",
    "retrieved_at": "2025-11-06"
    }

2) Các kênh thu thập khả thi

A. Open data / Dataset công khai
    Nguồn: OpenStreetMap (OSM), Kaggle, dữ liệu đô thị.
    Ưu: Miễn phí, pháp lý rõ, tốt cho coverage & tọa độ.
    Nhược: Thiếu giá và thông tin phòng; cập nhật không đều.
    Dùng làm gì: Là “seed list” để đối soát và enrich từ API khác.

B. Đối tác/khách sạn gửi dữ liệu (B2B)
    Ưu: Dữ liệu sâu (giá, tồn phòng, chính sách).
    Nhược: Khó tiếp cận, cần thỏa thuận & bảo mật.
    Dùng làm gì: POC nhỏ với 1–2 khách sạn địa phương (Google Form / Sheet + webhook).

C. Public API từ hệ sinh thái du lịch
Lý tưởng cho tính hợp pháp, độ mới & ổn định.
    Google Places API – lấy tên, địa chỉ, tọa độ, rating, ảnh (không có giá).
    MAKCorps Hotel Price API – có giá từ nhiều OTA; có gói student.
    Amadeus for Developers – có giá & offers theo tọa độ/ngày.
    RapidAPI – tổng hợp nhiều API du lịch khác nhau.
    Phụ trợ: Open-Meteo (thời tiết), OSRM/Google Distance (khoảng cách).
    Chiến lược: Dùng Google Places lấy danh sách + review → Amadeus/MAKCorps gắn giá.

D. Web Scraping (OTA/Trang khách sạn)
    Ưu: Có thể lấy giá, ảnh, tiện ích khi API không cung cấp.
    Nhược: Rủi ro pháp lý, dễ gãy, tốn công duy trì.
    Chỉ dùng cho mục đích học thuật/POC nhỏ.
    Nguyên tắc tối thiểu
    Kiểm tra robots.txt và ToS.
    Rate limit 1–3 req/s, ghi rõ User-Agent “SmartStay Student Research”.
    Không thu thập dữ liệu cá nhân.
    Lưu raw HTML + parsed JSON để tái lập.

3) Đánh giá tính khả thi

| Kênh          |  Độ phủ | Có giá | Pháp lý | Độ mới | Độ khó | Chi phí |
| ------------- | ------: | :----: | :-----: | :----: | :----: | :-----: |
| OpenStreetMap | **Cao** |    ❌   |    ✅    |   TB   |  Thấp  |    0    |
| Google Places |     Cao |    ❌   |    ✅    |   Cao  |  Thấp  |    $    |
| Amadeus       |  TB–Cao |    ✅   |    ✅    |   Cao  |   TB   |    $    |
| MAKCorps      |      TB |    ✅   |    ✅    |   Cao  |  Thấp  |    $    |
| Scraping OTA  |     Cao |    ✅   |    ⚠️   |   TB   |   Cao  |    $    |

Kết luận: API vượt trội; Scraping chỉ là fallback có kiểm soát.

4) Các bước thực thi

Bước 1: Thu thập seed data (OSM, Google Places)
Bước 2: Gắn giá (Amadeus/MAKCorps), enrich tiện ích
Bước 3: Làm sạch, chuẩn hóa, xuất parquet cho mô hình

5) Tiêu chí hoàn thành (DOD)
≥ 5.000 POI lưu trú hợp lệ (name + geo)
≥ 70% có giá tối thiểu trong 7 ngày tới
Dedup chính xác ≥ 95%
Tỷ lệ lỗi < 2%
.