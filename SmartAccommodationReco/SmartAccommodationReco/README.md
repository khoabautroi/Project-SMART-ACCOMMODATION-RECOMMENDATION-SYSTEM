# SMART ACCOMMODATION RECOMMENDATION SYSTEM (Mini Project)
MSSV: **24127114** — Vai trò: **Huấn luyện & Đánh giá mô hình**

Dự án mẫu tối giản, **chạy được ngay** bằng Python chuẩn (không cần thư viện ngoài).
Bao gồm 2 mô hình baseline:
- **Popularity**: gợi ý chỗ ở phổ biến nhất
- **Item-based CF**: gợi ý dựa trên độ tương đồng giữa các item (cosine theo tập user)

## Cách chạy nhanh
```bash
cd SmartAccommodationReco
python main.py
```

Kết quả sẽ hiển thị Precision/Recall/NDCG@K trên dữ liệu ví dụ và được lưu vào `experiments/results.txt`.
