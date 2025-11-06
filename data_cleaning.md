🎯 Mục tiêu nhiệm vụ
Tạo ra một bộ dữ liệu chỗ ở (Accommodation Dataset) sạch, thống nhất và có cấu trúc, sẵn sàng cho nhóm huấn luyện mô hình gợi ý và giao diện demo sử dụng.
Dữ liệu phải phản ánh thông tin thật hoặc mô phỏng hợp lý về khách sạn, homestay, hostel,… tại các địa phương du lịch.

🧩 Các bước thực hiện
Bước 1. Xác định dữ liệu cần thu thập
Trước khi làm sạch, cần rõ bộ dữ liệu cần có gồm những gì.
Với đề tài “Accommodation Recommendation”, dữ liệu nên có:
•	Thông tin cơ bản: tên, loại hình (hotel/homestay), địa chỉ, thành phố, quốc gia.
•	Đặc điểm: giá trung bình/đêm, số sao, điểm đánh giá, số lượng đánh giá.
•	Tiện nghi (amenities): wifi, hồ bơi, bữa sáng, chỗ đậu xe, điều hòa, v.v.
•	Vị trí địa lý: tọa độ GPS (latitude, longitude).
•	Mô tả hoặc đánh giá văn bản: review, nhận xét (nếu có).
🎯 Kết quả đầu ra của bước này: danh sách các thuộc tính cần có trong tập dữ liệu.

Bước 2. Thu thập dữ liệu thô
Chọn nguồn dữ liệu phù hợp:
•	Dữ liệu công khai từ Kaggle hoặc GitHub (hotel/homestay datasets).
•	API công khai như Google Places API, OpenStreetMap, hoặc VNAT (nếu khả thi).
•	Dữ liệu giả lập (tạo thủ công) nếu không có API — cần đảm bảo tính hợp lý.
🎯 Kết quả đầu ra: một hoặc vài file dữ liệu thô (CSV/JSON) chứa thông tin chỗ ở.

Bước 3. Khảo sát & đánh giá dữ liệu
Đọc qua dữ liệu để xem:
•	Có bị thiếu nhiều giá trị không (ví dụ: thiếu rating, giá, tiện nghi)?
•	Có lỗi định dạng (ví dụ: “1,000 VND” thay vì số)?
•	Có bị trùng dòng (hai khách sạn trùng tên, địa chỉ)?
•	Các cột có nhất quán không (ví dụ: tên thành phố “Hà Nội” và “Ha Noi”)?
🎯 Mục tiêu: hiểu tình trạng ban đầu của dữ liệu để xác định chiến lược làm sạch.

Bước 4. Làm sạch dữ liệu (Data Cleaning)
Các công việc chính:
1.	Xóa dữ liệu trùng lặp (trùng tên + địa chỉ hoặc ID).
2.	Xử lý dữ liệu thiếu:
o	Điền giá trị trung bình, trung vị, hoặc “Unknown” tùy loại cột.
3.	Phát hiện và loại bỏ giá trị bất thường (outlier):
o	Ví dụ: giá phòng âm hoặc quá cao bất hợp lý.
4.	Chuẩn hóa định dạng dữ liệu:
o	Giá → số thực (VND hoặc USD đồng nhất).
o	Địa chỉ → thống nhất viết hoa/thường, bỏ ký tự thừa.
5.	Chuẩn hóa tên địa điểm:
o	Ví dụ: “Da Nang”, “Đà Nẵng”, “Danang” → thống nhất “Đà Nẵng”.
6.	Xử lý cột tiện nghi (amenities):
o	Biến chuỗi “wifi, AC, parking” thành danh sách hoặc từ khóa.
🎯 Kết quả: dữ liệu nhất quán, sạch, không lỗi định dạng.

Bước 5. Tiền xử lý cho mô hình (Preprocessing)
Đây là bước giúp dữ liệu sẵn sàng cho việc gợi ý.
1.	Chuẩn hóa dữ liệu số:
o	Đưa giá, rating, khoảng cách… về cùng thang đo (ví dụ: 0–1).
2.	Mã hóa dữ liệu phân loại:
o	Loại chỗ ở (hotel, homestay, resort), tiện nghi, thành phố,… → dạng số.
3.	Xây dựng vector đặc trưng (feature vector):
o	Mỗi chỗ ở được biểu diễn bằng các đặc trưng:
[price_norm, rating_norm, wifi, pool, city_Hanoi, city_Danang, ...]
4.	Tách tập dữ liệu:
o	Chia thành phần dùng cho huấn luyện và phần dùng cho kiểm thử.
🎯 Kết quả: tập dữ liệu “machine learning-ready”.

Bước 6. Kiểm tra và đánh giá chất lượng dữ liệu
Sau khi làm sạch và tiền xử lý:
•	Kiểm tra lại xem còn giá trị thiếu không.
•	Kiểm tra số lượng bản ghi còn lại.
•	So sánh thống kê trước và sau khi làm sạch (trung bình giá, số sao,…).
•	Đảm bảo dữ liệu phản ánh hợp lý tình hình thực tế (không bị sai lệch).
🎯 Kết quả: dữ liệu cuối cùng (accommodation_clean.csv) đạt chất lượng sử dụng.

Bước 7. Ghi lại quy trình (Documentation)
•	Mô tả rõ các bước đã làm và lý do lựa chọn cách xử lý.
•	Lưu lại file “Data Cleaning Report”: liệt kê tỉ lệ giá trị thiếu, số dòng trùng, số dòng bị loại bỏ.
•	Đây là phần nhóm trưởng hoặc người huấn luyện mô hình sẽ cần để tái hiện dữ liệu sau này.
🎯 Kết quả: tài liệu mô tả quy trình xử lý dữ liệu rõ ràng, dễ hiểu.

