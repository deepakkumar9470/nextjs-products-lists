import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



  export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ category, search, skip }) => {
      let url = `https://dummyjson.com/products?limit=10&skip=${skip}`;
      if (category) url += `&category=${category}`;
      if (search) url += `&search=${search}`;
      const response = await axios.get(url);
      console.log(response)
      return response.data.products;
    }
  );  


export const productsSlice = createSlice({
    name :"products",
    initialState: {
        categories: [],
        products: [],
        status: 'idle',
        error: null,
        selectedCategory: '',
        search: '',
      },
      reducers: {
        setSelectedCategory: (state, action) => {
          state.selectedCategory = action.payload;
        },
        setSearchTerm: (state, action) => {
          state.search = action.payload;
        },
      },

    extraReducers : (builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
              state.products = [...state.products, ...action.payload];

              const categories = action.payload.reduce((acc, product) => {
                if (!acc.includes(product.category)) {
                  acc.push(product.category);
                }
                return acc;
              }, []);
              
              state.categories = Array.from(new Set([...state.categories, ...categories]));
            });
        
      
    }
})  

const {setSelectedCategory, setSearchTerm} = productsSlice.actions;
export default productsSlice.reducer;