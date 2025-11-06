# 🏠 SMART ACCOMMODATION RECOMMENDATION SYSTEM

## 📑 Table of Contents
1. [Project Overview](#-1-project-overview)
2. [Computational Thinking Application](#-2-computational-thinking-application)
3. [Algorithm Design (Preview)](#-3-algorithm-design-preview)
4. [Git Workflow & Team Collaboration](#-4-git-workflow--team-collaboration)
5. [Tools Intended to Be Used](#-5-tools-intended-to-be-used)
6. [Expected Outcome](#-6-expected-outcome)
7. [Notes from Team Leader](#-7-notes-from-team-leader)

## 📘 1. Project Overview
### 1.1 Background
Du lịch là một ngành quan trọng ở Việt Nam, nhưng du khách thường gặp khó khăn trong việc lựa chọn chỗ nghỉ phù hợp vì:
+ Quá nhiều lựa chọn.
+ Khó khăn trong việc so sánh giá cả, vị trí và sự thoải mái.
+ Thiếu các đề xuất được bản địa hóa dựa trên sở thích cá nhân.
Hệ thống SmartStay của chúng tôi hướng đến mục tiêu giải quyết những vấn đề này bằng cách cung cấp các đề xuất khách sạn được cá nhân hóa bằng cách sử dụng bộ lọc dữ liệu, nhận dạng mẫu và logic AI đơn giản.

### 1.2 Objectives
Mục tiêu chính của dự án SmartStay là thiết kế và mô phỏng một hệ thống chatbot thông minh giúp du khách tìm được chỗ ở phù hợp nhanh hơn, chính xác hơn và cá nhân hóa hơn theo sở thích của họ.
Cụ thể, dự án hướng tới mục tiêu:
+ Giảm thời gian ra quyết định từ trung bình 25 phút xuống dưới 5 phút cho mỗi lần tương tác của người dùng.
+ Đạt tỷ lệ chính xác của khuyến nghị ít nhất là 85%, dựa trên phản hồi của người dùng và kết quả thử nghiệm.
+ Đảm bảo thời gian phản hồi của hệ thống dưới 5 giây cho mỗi truy vấn để nâng cao trải nghiệm của người dùng.
+ Đạt tỷ lệ hài lòng của người dùng là 90% trở lên thông qua các cuộc khảo sát được tiến hành với nhóm thí điểm gồm 50 người dùng.
+ Áp dụng các nguyên tắc Tư duy tính toán (CT)—bao gồm phân tích, nhận dạng mẫu, trừu tượng hóa và thiết kế thuật toán—trong quá trình phát triển và mô phỏng logic đề xuất.

### 1.3 Stakeholders
- Traveler (người dùng du lịch)
- Accommodation provider (chủ khách sạn/homestay)
- System admin (Sinh viên quản lý dữ liệu & chatbot)
- Travel Agencies / Tourism Companies (Các công ty du lịch / đại lý du lịch)
- Technical Tool Providers (Nhà cung cấp công cụ kỹ thuật (ví dụ: Google Maps API, Kaggle))
- Local Community / Tourism Sector (Cộng đồng địa phương / Ngành du lịch)

--- 

## 🧠 2. Computational Thinking Application
### 2.1 Problem Analysis
**Input:**  
- Vị trí người dùng (Thành phố hiện tại nơi người dùng đang tìm kiếm chỗ nghỉ (ví dụ: “Đà Nẵng”, “Hà Nội”).
- Khoảng ngân sách (Mức giá tối thiểu và tối đa mà người dùng sẵn sàng trả cho mỗi đêm (ví dụ: 500.000 – 1.000.000 VND).
- Sở thích (Sở thích cá nhân của người dùng về chỗ nghỉ, chẳng hạn như “gần biển”, “yên tĩnh”, “thân thiện với gia đình”, “hướng núi”, v.v.).
- Mức độ ưu tiên (Chỉ ra những gì quan trọng nhất đối với người dùng: giá cả, khoảng cách hoặc xếp hạng. Được sử dụng để xếp hạng các đề xuất).
- Thời gian lưu trú (Số đêm người dùng dự định lưu trú (được sử dụng để tính tổng chi phí hoặc đề xuất giảm giá).

**Output:**  
- Danh sách 3–5 khách sạn phù hợp trong phạm vi ngân sách, có tên, giá và đánh giá.
+ Tên khách sạn hoặc nhà nghỉ được giới thiệu.
+ Chi phí ước tính cho một đêm, nằm trong ngân sách của người dùng.
+ Đánh giá trung bình (0–5) dựa trên đánh giá của người dùng.

### 2.2 Constraint
- Kỹ thuật: Hệ thống quản lý một tập dữ liệu lớn gồm 5–10 khách sạn trên mỗi tỉnh (khoảng 320–640 mục) . Chạy cục bộ bằng Python với dữ liệu được lưu trữ trong các tệp tùy chỉnh . Logic đề xuất là lọc và xếp hạng dựa trên quy tắc để tăng hiệu suất.
- Chức năng: Chỉ tập trung vào các đề xuất khách sạn . Chấp nhận các thông tin đầu vào như vị trí (tỉnh/thành phố), ngân sách và sở thích. Hiển thị 3–5 khách sạn được đề xuất hàng đầu cho mỗi tìm kiếm . Hỗ trợ truy vấn đa tỉnh nhưng không hỗ trợ đặt phòng hoặc thanh toán theo thời gian thực.

### 2.3 Decomposition
- 24127061 - Ngô Trần Anh Khoa - Tổng hợp, tài liệu hóa toàn bộ hệ thống
- 24127099 - Phan Tuấn Phong - Thu thập & phân tích dữ liệu chỗ ở
- 24127107 - Lê Đức Phúc - Tiền xử lý & làm sạch dữ liệu
- 24127114 - Thiều Quang - Huấn luyện & đánh giá mô hình
- 24127327 - Hà Văn Nguyên Bảo - Xây dựng mô hình gợi ý
- 24127416 - Nguyễn Vũ Thiên Khanh - Xây dựng giao diện demo (UI)

## 🔍 3. Algorithm Design (Preview)

Phần này trình bày tổng quan pipeline thuật toán mà nhóm sử dụng để xây dựng hệ thống gợi ý chỗ ở.

### 🧩 3.1 Tổng quan quy trình xử lý
1. **Data Collection & Cleaning:**  
   - Thu thập dữ liệu từ các nguồn công khai (API, web du lịch).  
   - Chuẩn hoá, loại bỏ dữ liệu thiếu, trùng, và lỗi.

2. **Feature Extraction & Preprocessing:**  
   - Chuẩn hóa giá, vị trí, tiện nghi, đánh giá.  
   - Mã hoá dữ liệu thành vector đặc trưng để đưa vào mô hình.

3. **Recommendation Model (Main Logic):**  
   - Hệ thống sử dụng kết hợp **Content-based Filtering** và **Collaborative Filtering**.  
   - Các thành viên phụ trách sẽ chi tiết hoá từng mô hình trong file riêng của họ.

4. **Integration Layer (Chatbot):**  
   - Chatbot nhận yêu cầu người dùng → chuyển thành truy vấn → gọi mô hình gợi ý → trả kết quả.

### ⚙️ 3.2 Pipeline tổng quát
| Giai đoạn | Module phụ trách | Mô tả ngắn |
|------------|------------------|-------------|
| Data Collection | 24127099 | Thu thập và lưu dữ liệu |
| Data Cleaning | 24127107 | Làm sạch và chuẩn hoá dữ liệu |
| Model Research | 24127327 | Nghiên cứu mô hình gợi ý |
| Train & Evaluate | 24127114 | Huấn luyện và đánh giá mô hình |
| Frontend UI | 24127416 | Hiển thị kết quả gợi ý qua chatbot |
| Documentation | 24127061 | Tổng hợp và quản lý quy trình Git |

> 🔸 *Chi tiết thuật toán từng module (data, model, UI, ...) sẽ được trình bày trong các file `.md` riêng của từng thành viên.*

---

## ⚙️ 4. Git Workflow & Team Collaboration
- Mỗi thành viên tạo nhánh riêng từ `develop`.
- Không commit trực tiếp lên `main` hoặc `develop`.
- Nhóm trưởng review và merge qua Pull Request.
- Các branch:
   + 24127061-pipeline-doc
   + 24127099-data-collection
   + 24127107-data-cleaning
   + 24127114-train-eval
   + 24127327-model-research 
   + 24127416-frontend-ui

---

## 🧩 5. Tools Intended to Be Used
- **Programming:** Python 3.x  
- **Libraries:** Pandas, NumPy, scikit-learn, Flask  
- **IDE:** VS Code  
- **Version control:** Git, GitHub  
- **Visualization:** Matplotlib / Seaborn  
- **Documentation:** Markdown (.md), README.md  

---

## 📚 6. Expected Outcome
- Hệ thống chatbot gợi ý chỗ ở theo nhu cầu người dùng.  
- Repository GitHub có đầy đủ nhánh, commit và Pull Request.  
- File tài liệu `.md` mô tả pipeline rõ ràng.

---

## 🧠 7. Notes from Team Leader
> Toàn bộ thay đổi được thực hiện qua nhánh cá nhân.  
> Mục tiêu bài này là mô phỏng quy trình teamwork với GitHub, không phải sản phẩm hoàn chỉnh.
