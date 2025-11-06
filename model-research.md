**MÔ HÌNH GỢI Ý (RECOMMENDATION MODELS)**

Mô hình gợi ý cho SMART ACCOMMODATION RECOMMENDATION SYSTEM đề xuất áp
dụng **Hybrid Recommender System** được xây dựng từ ba nhóm chính:

-   **Content-Based Filtering (CBF)**

-   **Collaborative Filtering (CF)**

-   **Context-Aware & Hybrid Model**

**✅ 3.1 Content-Based Filtering (CBF) -- Gợi ý dựa trên thuộc tính chỗ
ở**

-   **Mục tiêu:** Gợi ý các chỗ ở có đặc điểm tương tự với **nhu cầu và
    sở thích** của người dùng.

-   **Dữ liệu đầu vào**

  -----------------------------------------------------------------------
  **Nhóm dữ liệu** **Ví dụ**                           **Dạng dữ liệu**
  ---------------- ----------------------------------- ------------------
  Tiêu chí người   Giá, vị trí, loại phòng, tiện ích   Structured
  dùng                                                 

  Mô tả phòng      "Phòng full nội thất gần ĐH Công    Text (NLP)
                   nghiệp..."                          

  Ảnh phòng        Hình ảnh phòng                      Image features
                                                       (CNN)
  -----------------------------------------------------------------------

-   **Xử lý thuộc tính (Feature Engineering)**

1.  **Biến số hóa dữ liệu:**

    -   Giá → MinMax Normalization

    -   Khoảng cách → Haversine distance

    -   Tiện ích → One-hot vector (wifi, máy lạnh, wc riêng...)

2.  **Trích xuất đặc trưng từ mô tả phòng (Text NLP):**

    -   TF-IDF + Cosine Similarity

    -   Hoặc **Sentence Embedding** bằng:

        -   Word2Vec

        -   BERT / PhoBERT (tiếng Việt)

        -   FastText

3.  **Trích xuất đặc trưng hình ảnh (tuỳ nâng cao):**

    -   CNN: ResNet/MobileNet để phân loại chất lượng phòng

    -   Tính năng: sáng, sạch, nội thất, hiện đại

-   **Thuật toán gợi ý**

```{=html}
<!-- -->
```
-   **Cosine Similarity** giữa vector user profile và vector phòng

-   **K-Nearest Neighbors (KNN)** để chọn K phòng giống nhất

```{=html}
<!-- -->
```
-   **Ưu & Nhược điểm**

  -----------------------------------------------------------------------
  **Ưu điểm**                 **Nhược điểm**
  --------------------------- -------------------------------------------
  Cá nhân hoá tốt, không cần  Không học được sở thích mới nếu người dùng
  nhiều user khác             chưa từng trải nghiệm

  Gợi ý dựa trên tiêu chí rõ  Dễ gây "vòng lặp gợi ý giống nhau"
  ràng                        
  -----------------------------------------------------------------------

**🤝 3.2 Collaborative Filtering (CF) -- Gợi ý dựa trên hành vi cộng
đồng**

-   **Mục tiêu:** Sử dụng hành vi người dùng khác có sở thích tương tự
    để gợi ý.

-   **Dữ liệu đầu vào**

  -----------------------------------------------------------------------
  **Dữ liệu**                 **Ví dụ**
  --------------------------- -------------------------------------------
  User Rating                 Đánh giá 1--5 sao

  Implicit Feedback           Click, lưu yêu thích, thời gian xem

  Interactions                Lịch sử tìm kiếm, booking, share
  -----------------------------------------------------------------------

-   **2 loại CF cần dùng**

  ------------------------------------------------------------------------
  **Loại**    **Mô tả**                      **Khi dùng**
  ----------- ------------------------------ -----------------------------
  User-User   Tìm người giống bạn và gợi ý   Số user lớn
  CF          họ thích gì                    

  Item-Item   Gợi ý dựa trên phòng giống     Nhiều phòng được đánh
  CF          nhau về hành vi                giá/interaction
  ------------------------------------------------------------------------

-   **Phương pháp mô hình hóa**

1.  **Traditional CF**

    -   Matrix Factorization (MF): giảm chiều từ ma trận User × Room

    -   SVD, NMF

2.  **Implicit Feedback Model**

> (*quan trọng vì người dùng ít khi đánh giá sao*)

-   Bayesian Personalized Ranking (BPR)

-   Alternating Least Squares (ALS)

3.  **Neural Collaborative Filtering (NCF) -- Deep Learning**

    -   Dùng MLP để học latent vector của user & item

    -   Output: predicted preference score

-   **Ưu & Nhược điểm**

  -----------------------------------------------------------------------
  **Ưu điểm**                    **Nhược điểm**
  ------------------------------ ----------------------------------------
  Khả năng khám phá gợi ý mới    Cold-start problem với user mới hoặc
  rất tốt                        phòng mới

  Không cần hiểu nội dung phòng  Cần nhiều data interaction
  -----------------------------------------------------------------------

**🌍 3.3 Context-Aware & Hybrid Model -- Gợi ý theo ngữ cảnh và mô hình
lai**

Kết hợp CBF + CF + dữ liệu ngữ cảnh để nâng độ chính xác và trải nghiệm
người dùng.

-   **Dữ liệu ngữ cảnh (Context Data)**

  -----------------------------------------------------------------------
  **Yếu tố ngữ cảnh**  **Ví dụ ứng dụng**
  -------------------- --------------------------------------------------
  Thời gian            Thời điểm có nhiều sự kiện → gợi ý gần nơi diễn ra
                       sk

  Vị trí GPS           Ưu tiên phòng gần các địa điểm tham quan/ view đẹp

  Nhu cầu động         User từng click phòng có nhà để xe → ưu tiên lọc

  Ranking Score        Điểm an toàn, chất lượng, review

  Sự kiện cá nhân      Lịch sự kiện
  -----------------------------------------------------------------------

-   **Mô hình kết hợp đề xuất**

1.  **Hybrid Score Model (Simple Weighted Hybrid)**

> Điểm gợi ý = w1 \* CBF + w2 \* CF + w3 \* Context Score
>
> (weights có thể học tự động bằng ML)

2.  **Meta-Learning Model (Advanced Hybrid)**

> Dùng 1 ML Model (XGBoost, LightGBM hoặc Neural Net) để học KẾT QUẢ
> cuối cùng từ nhiều mô hình con.

**Input**: Feature từ CBF, CF, Context

**Output**: Final Ranking Score

3.  **Reinforcement Learning-based Recommender (nâng cao)**

> Hệ thống học từ phản hồi liên tục để tối ưu gợi ý theo thời gian.

**⭐ KẾT QUẢ KỲ VỌNG KHI ÁP DỤNG HYBRID SYSTEM**

  -----------------------------------------------------------------------
  **Chỉ số**            **Trước**       **Sau Hybrid**
  --------------------- --------------- ---------------------------------
  Precision@10          45--55%         70--85%

  User Satisfaction     Trung bình      Tăng mạnh vì phù hợp hơn

  Cold-start            Khó xử lý       Giảm đáng kể
  -----------------------------------------------------------------------

-   **Sơ đồ hệ thống:**
[User App] <---> [API Gateway] <---> [Recommendation Service]
                                        |
                                        +--> [CBF Service]  -> [CBF Feature Store]
                                        |
                                        +--> [CF Service]   -> [Interaction Store / MF Models]
                                        |
                                        +--> [Hybrid Ranker] -> [Meta-Model / Ranker]
                                        |
                                        +--> [Context Enricher] -> [Geo/Safety/Events API]
                                        |
                                        +--> [Personalization Store] (user profiles)
                                        |
                                        +--> [Feedback Collector] -> [Event Stream (Kafka)]
                                        |
                                        +--> [Monitoring/AB Testing]
