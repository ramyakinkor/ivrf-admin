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
  async ({data, reset, progress}, { rejectWithValue }) => {
    try {
      await Product.createProduct(data, progress)
      reset();
      const response  = data.get('type') === 'image' ? await Product.getImages() : await Product.getVideos();
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
      await Product.updateProduct(id, data);
      const response  = data['type'] === 'image' ? await Product.getImages() : await Product.getVideos()
      return {[data.type]: response.data};
    } catch(error) {
      console.log(error);
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
    
  }
)

export const getProductCategories = createAsyncThunk(
  'product/get/Category',
  async (id, { rejectWithValue }) => {
    try {
      const response = await Product.getCategory();
      return response.data
    } catch(error) {
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
    
  }
)

export const createProductCategory = createAsyncThunk(
  'product/add/category',
  async ({data, reset}, { rejectWithValue }) => {
    try {
      await Product.addCategory(data)
      reset();
      const response = await Product.getCategory();
      return response.data;
      
    } catch(error) {
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const deleteProductCategory = createAsyncThunk(
  'product/delete/category',
  async (id, { rejectWithValue }) => {
    try {
      await Product.deleteProductCategory(id)
      const response = await Product.getCategory();
      return response.data;
      
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
      categories: [],
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
        if (action.payload.image) {
          state.images = action.payload.image
        }

        if (action.payload.video) {
          state.videos = action.payload.video
        }
        return state;
      })
      builder.addCase(createProduct.pending, (state, action) => {
        state.isCreating = true;
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
      builder.addCase(getProductCategories.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.errorMessage
        } else {
          state.error = action.error.message
        }
        return state;
      })
      builder.addCase(getProductCategories.fulfilled, (state, action) => {
        state.categories = action.payload
        return state;
      })
      builder.addCase(createProductCategory.fulfilled, (state, action) => {
        state.categories = action.payload
        return state;
      })
      builder.addCase(deleteProductCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
        return state;
      })
      builder.addCase(updateProduct.fulfilled, (state, action) => {
        if (action.payload.image) {
          state.images = action.payload.image
        }

        if (action.payload.video) {
          state.videos = action.payload.video
        }
        return state;
      })
    },
  })
  
  export default AdminSlice.reducer;