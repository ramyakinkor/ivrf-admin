import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import User from "../Api/Admin";
import Product from "../Api/product";

export const getAllImages = createAsyncThunk(
  'product/all/images',
  async (id, { rejectWithValue }) => {
    try {
      const response = await Product.getImages();
      return response.data;
    } catch(error) {
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const getAllVideos = createAsyncThunk(
  'product/all/videos',
  async (id, { rejectWithValue }) => {
    try {
      const response = await Product.getVideos();
      return response.data;
    } catch(error) {
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const createProduct = createAsyncThunk(
  'product/add',
  async (data, { rejectWithValue }) => {
    try {
      await Product.createProduct(data)
      const response = await Product.getImages();
      return {[data.type]: response.data};
      
    } catch(error) {
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  'product/delete',
  async (id, { rejectWithValue }) => {
    try {
      await Product.deleteProduct(id)
      const images = (await Product.getImages())?.data;
      const videos = (await Product.getVideos())?.data;
      return {images, videos};
    } catch(error) {
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
    
  }
)

export const updateProduct = createAsyncThunk(
  'product/update',
  async ({id, data}, { rejectWithValue }) => {
    try {
      const response = await Product.updateProduct(id, data);
      return response.data
    } catch(error) {
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
    
  }
)


export const AdminSlice = createSlice({
    name: 'product',
    initialState:{
      images: [], 
      videos: [],
      error: undefined,
      isCreating: false,
      isDeleting: false
    },
    reducers: {
      clearErrorMessage(state) {
        state.error = undefined;
      }
    },
    extraReducers: (builder) => {
      builder.addCase(getAllImages.fulfilled, (state, action) => {
        state.images = action.payload;
        return state;
      })
      builder.addCase(getAllImages.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorMessage
        } else {
          state.error = action.error.message
        }
        state.images = [];
        return state;
      })

      builder.addCase(getAllVideos.fulfilled, (state, action) => {
        state.videos = action.payload;
        return state;
      })
      builder.addCase(getAllVideos.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorMessage
        } else {
          state.error = action.error.message
        }
        state.videos = [];
        return state;
      })
      builder.addCase(createProduct.fulfilled, (state, action) => {
        state.isCreating = false
        return state;
      })
      builder.addCase(createProduct.pending, (state, action) => {
        state.isCreating = true;

        if (action.payload.image) {
          state.images = action.payload.image
        }

        if (action.payload.video) {
          state.videos = action.payload.video
        }
        return state;
      })
      builder.addCase(createProduct.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorMessage
        } else {
          state.error = action.error.message
        }
        state.isCreating = false;
        return state;
      })
      builder.addCase(deleteProduct.fulfilled, (state, action) => {
        state.isDeleting = false;
        state.images = action.payload.images;
        state.videos = action.payload.videos;
        return state;
      })
      builder.addCase(deleteProduct.pending, (state, action) => {
        state.isDeleting = true;
        return state;
      })
      builder.addCase(deleteProduct.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorMessage
        } else {
          state.error = action.error.message
        }
        state.isDeleting = false;
        return state;
      })
    },
  })
  
  export default AdminSlice.reducer;