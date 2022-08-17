import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllGadgets = createAsyncThunk(
  "gadgets/get-all-gadgets",
  async ({ token }) => {
    let message = "";
    let code = 0;
    let user = [];
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    };
    const url = 'https://api-staging-fairshop.herokuapp.com/api/v1/gadgets'
    try {
      const res = await axios.get(url, config);
      console.log(res.data);
      message = res.data.message;
      code = res.data.statusCode;
      user = res.data.data;

      return { message, code, user };
    } catch (error) {
      console.log(error);
      message = error.response.data.message;
      code = error.response.status;

      return { message, code };
    }
  }
);

export const searchGadget = createAsyncThunk(
  "gadgets/search-gadget",
  async ({ token ,search}) => {
    let message = "";
    let code = 0;
    let user = [];
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    };
    const url =
      `https://api-staging-fairshop.herokuapp.com/api/v1/gadgets/search?search=${search}`;
    try {
      const res = await axios.get(url, config);
      console.log(res.data);
      message = res.data.message;
      code = res.data.statusCode;
      user = res.data.data;

      return { message, code, user };
    } catch (error) {
      console.log(error);
      message = error.response.data.message;
      code = error.response.status;

      return { message, code };
    }
  }
);


export const appointmentSlice = createSlice({
  name: "gadgets",
  initialState: {
    pending: false,
    error: false,
    done: false,
    message: "",
  },
  reducers: {
    loginStart: (state, action) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    deleteUser: (state) => {
      localStorage.removeItem("user");
      // state.user =[]
    },
  },
  extraReducers: {
    [getAllGadgets.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.done = false;
      state.message = "";
    },
    [getAllGadgets.fulfilled]: (state, action) => {
      const { message, code } = action.payload;
      console.log(message, code);
      state.pending = false;
      state.done = code === 200 ? true : false;
      state.message = message;
      state.error = code !== 200 ? true : false;
    },
    [getAllGadgets.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },

    [searchGadget.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.done = false;
      state.message = "";
    },
    [searchGadget.fulfilled]: (state, action) => {
      const { message, code } = action.payload;
      console.log(message, code);
      state.pending = false;
      state.done = code === 200 ? true : false;
      state.message = message;
      state.error = code !== 200 ? true : false;
    },
    [searchGadget.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteUser } = appointmentSlice.actions;

export default appointmentSlice.reducer;
