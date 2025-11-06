## Vấn đề
Thiết kế giao diện tìm kiếm chỗ ở với bộ lọc thông minh

## Chúng ta biết:

- Người dùng cần tìm kiếm theo: location, dates, số lượng khách, giá

- Có 4 loại chỗ ở chính: apartment, house, villa, condo

- Cần hỗ trỵ tìm kiếm bằng giọng nói và hình ảnh (future feature)

- Dữ liệu location phải nhất quán (thành phố, quận, phường)

- Cần hiển thị kết quả theo cả list view và map view
## Chúng ta cần:

- Search bar với real-time autocomplete

- Advanced filters: giá, diện tích, tiện nghi, đánh giá, khoảng cách

- Quick filters: "phổ biến", "giá tốt", "đánh giá cao"

- Lưu search history và favorite searches

- Responsive design cho mobile và desktop

- Integration với map service

## Ràng buộc:

- Performance: Search results phải load trong < 2 giây

- Data: Phải xử lý 10,000+ properties một cách hiệu quả

- Technical: Phải hỗ trợ pagination (phân trang)

- UX: Không quá 7 filters hiển thị cùng lúc

- Browser: Phải chạy trên Chrome, Firefox, Safari, Edge

- Mobile: Touch-friendly cho filter interactions

## Đang thiếu:

- Search Algorithm: Logic ranking của search results

- API Rate Limiting: Giới hạn số request tìm kiếm

- Geolocation Data: Độ chính xác và coverage của location data

- Filter Combinations: Các filter nào có thể kết hợp được

- Default Sort Order: Tiêu chí sắp xếp mặc định

- Spell Check: Hỗ trợ sửa lỗi chính tả