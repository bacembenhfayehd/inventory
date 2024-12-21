import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface User{
  userId: string;
  name: string;
  email: string;
}

export interface Product {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

export interface newProduct{
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
    baseUrl: "http://localhost:8000", 
  }),
  reducerPath: "dashboardApi",
  tagTypes: ["DashboardMetrics","Products","Users"], 
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetrics, void>({
      query: () => "/dashboard", 
      providesTags: ["DashboardMetrics"], 
    }),

    getProducts:build.query<Product[], string | undefined>({ // search rslt migh be string | undefined (not void)
      query:(search) => ({
        url:"/products",
        params: search ? {search} : undefined
      }),
      providesTags:["Products"]
    }),

    createProduct: build.mutation<Product, newProduct>({
      query:(newProduct) => ({
        body:newProduct,
        method:"POST",
        url:"/products"
      }),
      invalidatesTags:["Products"]
    }),

    getUsers: build.query<User[], void>({
      query: () => "/users",
      providesTags: ["Users"],
    }),
  }),
});


export const { useGetDashboardMetricsQuery ,useGetProductsQuery,useCreateProductMutation,useGetUsersQuery } = dashboardApi;