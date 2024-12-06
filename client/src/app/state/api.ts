import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

export interface SalesSummary {
  salesSummaryId: string;
  totalValue: number;
  changePercentage?: number;
  date: string;
}

export interface PurchaseSummary {
  purchaseSummaryId: string;
  totalPurchased: number;
  changePercentage?: number;
  date: string;
}

export interface ExpenseSummary {
  expenseSummaryId: string;
  totalExpenses: number;
  date: string;
}

export interface ExpenseByCategorySummary {
  expenseByCategorySummaryId: string;
  category: string;
  amount: string;
  date: string;
}

export interface DashboardMetrics {
  popularProducts: Product[];
  salesSummary: SalesSummary[];
  purchaseSummary: PurchaseSummary[];
  expenseSummary: ExpenseSummary[];
  expenseByCategorySummary: ExpenseByCategorySummary[];
}

// Configuration RTK Query
export const dashboardApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000", // Utiliser l'URL d'environnement
  }),
  reducerPath: "dashboardApi",
  tagTypes: ["DashboardMetrics"], // Identifier les balises pour l'invalidation
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetrics, void>({
      query: () => "/dashboard", // Endpoint backend
      providesTags: ["DashboardMetrics"], // Fournir les balises pour le cache
    }),
  }),
});

// Exporter le hook généré
export const { useGetDashboardMetricsQuery } = dashboardApi;
