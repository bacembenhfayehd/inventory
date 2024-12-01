import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";

//RTK Redux toolkit query
export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath:'api',
    tagTypes:[],
    endpoints:(build) => ({}),   //get post delete to interact with external api
})

export const {} = api;