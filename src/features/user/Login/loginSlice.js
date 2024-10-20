import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../../services/apiCaller";





export const createLogin = createAsyncThunk(
  "/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/login", data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
     
    }
  }
);
export const createDoctorLogin = createAsyncThunk(
  "/login/doctor",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/login/doctor", data);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    success: false,
    error: '',
    errorMessage: "",
    loggeduser:[],
    // loggeddoctor:[]
  },
  reducers: {
    logout: (state) => {
      state.token = null
      state.loggeduser=[]
    }
  },

  extraReducers: (builder) => {
    builder.addCase(createLogin.pending, (state) => {
      state.isLoading = true;
     state.isAuthenticated= false;
    });
    builder.addCase(createLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.loggeduser=action.payload;
      state.error = '';
    });
    builder.addCase(createLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.errorMessage = action.payload.message;
      // state.errorMessage =response.message
    });
    builder.addCase(createDoctorLogin.pending, (state) => {
      state.isLoading = true;
     state.isAuthenticated= false;
    });
    builder.addCase(createDoctorLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.loggeduser=action.payload;
      state.errorMessage = "";
    });
    builder.addCase(createDoctorLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;