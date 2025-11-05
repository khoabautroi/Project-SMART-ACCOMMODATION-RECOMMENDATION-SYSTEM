
import { TeamMember, Property, Metric, RevenueData, ModelPerformanceData } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 'TV1', name: 'Member 1', role: 'Documentation Lead', tasks: 'Tổng hợp, tài liệu hóa hệ thống', integrationPoint: 'Component documentation, API specs' },
  { id: 'TV2', name: 'Member 2', role: 'Data Analyst', tasks: 'Thu thập, phân tích dữ liệu chỗ ở', integrationPoint: 'Data structure, display requirements' },
  { id: 'TV3', name: 'Member 3', role: 'Data Engineer', tasks: 'Tiền xử lý, làm sạch dữ liệu', integrationPoint: 'Data validation, formatting rules' },
  { id: 'TV4', name: 'Member 4', role: 'ML Engineer', tasks: 'Huấn luyện, đánh giá mô hình', integrationPoint: 'Model metrics display, performance dashboards' },
  { id: 'TV5', name: 'Member 5', role: 'ML Specialist', tasks: 'Xây dựng mô hình gợi ý', integrationPoint: 'Recommendation interfaces, personalization' },
  { id: 'TV6', name: 'You', role: 'Frontend Developer', tasks: 'Thiết kế & phát triển UI/UX', integrationPoint: 'Tích hợp tất cả components và APIs' },
];

export const PROPERTIES: Property[] = [
  { id: 1, name: 'Modern Loft in City Center', location: 'Hanoi', price: 120, rating: 4.8, imageUrl: 'https://picsum.photos/seed/prop1/400/300' },
  { id: 2, name: 'Cozy Beachfront Bungalow', location: 'Da Nang', price: 150, rating: 4.9, imageUrl: 'https://picsum.photos/seed/prop2/400/300' },
  { id: 3, name: 'Riverside Villa with Pool', location: 'Hoi An', price: 250, rating: 4.7, imageUrl: 'https://picsum.photos/seed/prop3/400/300' },
  { id: 4, name: 'Downtown Penthouse Suite', location: 'Ho Chi Minh City', price: 300, rating: 5.0, imageUrl: 'https://picsum.photos/seed/prop4/400/300' },
  { id: 5, name: 'Chic Apartment with View', location: 'Hanoi', price: 110, rating: 4.6, imageUrl: 'https://picsum.photos/seed/prop5/400/300' },
  { id: 6, name: ' tranquil Garden House', location: 'Da Lat', price: 90, rating: 4.8, imageUrl: 'https://picsum.photos/seed/prop6/400/300' },
];

export const ANALYTICS_METRICS: Metric[] = [
    { name: 'Model Accuracy', value: '94.7%', change: '+2.1%', changeType: 'increase' },
    { name: 'Revenue (MTD)', value: '$125,430', change: '+12.5%', changeType: 'increase' },
    { name: 'Active Bookings', value: '1,284', change: '-1.8%', changeType: 'decrease' },
    { name: 'User Satisfaction', value: '4.8/5', change: '+0.1', changeType: 'increase' },
];

export const REVENUE_DATA: RevenueData[] = [
    { month: 'Jan', revenue: 65000 },
    { month: 'Feb', revenue: 59000 },
    { month: 'Mar', revenue: 80000 },
    { month: 'Apr', revenue: 81000 },
    { month: 'May', revenue: 95000 },
    { month: 'Jun', revenue: 110000 },
    { month: 'Jul', revenue: 125000 },
];

export const MODEL_PERFORMANCE_DATA: ModelPerformanceData[] = [
    { metric: 'Precision', score: 0.92 },
    { metric: 'Recall', score: 0.88 },
    { metric: 'F1-Score', score: 0.90 },
    { metric: 'AUC', score: 0.95 },
];

export const ICONS = {
    star: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>,
    check: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
    code: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    users: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    target: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
    search: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
};
