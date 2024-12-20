"use client"

import Header from "../(components)/Header";
import { useGetProductsQuery } from "../state/api"
import {DataGrid, GridColDef} from '@mui/x-data-grid'

const columns:GridColDef[] = [
  { field: "name", headerName: "Product Name", width: 200 },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    type: "number",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
  },
]



const inventory = () => {

 
  const {data:products , isError ,isLoading} = useGetProductsQuery();
  console.log(products)

  if(isLoading){
    return <div className="py-4">Loading...</div>
  }

  if(isError || !products){
    return (<div className="py-4 text-center text-red-50">Failed to get products</div>)
  }
  return <div>
    <Header name="Inventory"/>
    <DataGrid rows={products} columns={columns}
    getRowId={(row) => row.productId}
    checkboxSelection
    className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"/>
    
   
  </div>
}

export default inventory