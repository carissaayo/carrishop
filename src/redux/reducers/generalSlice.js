import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// User information
export const meansOfIdentity = createAsyncThunk(
  "users/means-of-identity",
  async (data) => {
    let message = "";
    let code = 0;
    let user = [];
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const url =
      "https://api-staging-fairshop.herokuapp.com/api/v1/users/means-of-identification";

    try {
      const res = await axios.get(url, data, config);
      console.log(res.data);
      message = res.data.message;
      code = res.data.statusCode;
      user=res.data.data

      return { message, code, user };
    } catch (error) {
      console.log(error);
      message = error.response.data.message;
      code = error.response.status;

      return { message, code };
    }
  }
);
export const verifyInviteCode = createAsyncThunk(
  "users/verify-invite-code",
  async (inviteCode) => {
    let message = "";
    let code = 0;
    let user = [];
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const url =
      `https://api-staging-fairshop.herokuapp.com/api/v1/users/invite-code/:${inviteCode}`;

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


export const generalSlice = createSlice({
  name: "general",
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
    [meansOfIdentity.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.done = false;
      state.message = "";
    },
    [meansOfIdentity.fulfilled]: (state, action) => {
      const { message, code } = action.payload;
      console.log(message, code);
      state.pending = false;
      state.done = code === 200 ? true : false;
      state.message = message;
      state.error = code !== 200 ? true : false;
    },
    [meansOfIdentity.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },

    [verifyInviteCode.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.done = false;
      state.message = "";
    },
    [verifyInviteCode.fulfilled]: (state, action) => {
      const { message, code } = action.payload;
      console.log(message, code);
      state.pending = false;
      state.done = code === 200 ? true : false;
      state.message = message;
      state.error = code !== 200 ? true : false;
    },
    [verifyInviteCode.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteUser } = generalSlice.actions;

export default generalSlice.reducer;
