export interface MonthlyRevenue {
  month: string;
  revenue: number;
  expenses: number;
}

export interface UserGrowth {
  month: string;
  users: number;
}

export interface TrafficSource {
  name: string;
  value: number;
  color: string;
}

export interface WeeklySales {
  day: string;
  sales: number;
}

export interface Transaction {
  id: number;
  name: string;
  email: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  date: string;
}

export interface Stat {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}