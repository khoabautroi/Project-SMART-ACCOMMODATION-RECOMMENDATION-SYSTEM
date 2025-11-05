
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tasks: string;
  integrationPoint: string;
}

export interface Property {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export interface Metric {
    name: string;
    value: string;
    change: string;
    changeType: 'increase' | 'decrease';
}

export interface RevenueData {
    month: string;
    revenue: number;
}

export interface ModelPerformanceData {
    metric: string;
    score: number;
}
