import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath : 'productsapi',
    baseQuery :fetchBaseQuery({
        baseUrl : "https://dummyjson.com"
    }),
    endpoints :(builder)=>({
        getAllProducts : builder.query({
            query :()=>({
             url:`/products`,
             method :'GET',
            //  params :{ 
            //     userId,
            //     status,
            //     priority,
            //     sortBy, },
            })
        }),
  
    })
})

export const {
useGetAllProductsQuery} = productsApi;