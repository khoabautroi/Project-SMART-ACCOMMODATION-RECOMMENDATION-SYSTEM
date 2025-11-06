## Vấn đề

Thiết kế flow đặt phòng và thanh toán trực tuyến

## Chúng ta biết:

- Quy trình: chọn dates → xác nhận details → thanh toán → confirmation

- Cần hỗ trợ multiple payment methods: credit card, e-wallet, bank transfer

- Cần cancellation policy rõ ràng

- Cần instant booking và request-based booking

## Chúng ta cần:

- Date picker với blocked dates và minimum stay validation

- Guest counter với rules (trẻ em, pets)

- Price breakdown chi tiết

- Secure payment form

- Booking confirmation với mã đặt phòng

- Email/SMS notifications

## Ràng buộc:

- Security: PCI DSS compliance cho xử lý thẻ tín dụng

- Legal: Tuân thủ regulations về refund và cancellation

- UX: Quy trình đặt phòng không quá 5 bước

- Performance: Payment processing < 30 giây

- Error Handling: Xử lý payment failure gracefully

- Mobile: Payment form phải mobile-optimized

## Đang thiếu:

- Payment Gateway: Integration details với Stripe/PayPal

- Tax Calculation: Logic tính thuế theo từng khu vực

- Currency Support: Hỗ trợ multi-currency

- Fraud Detection: Hệ thống phòng chống gian lận

- Refund Policy: Quy trình refund chi tiết

- Insurance: Integration với travel insurance providers