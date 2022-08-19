import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// User information
export const bookAppointment = createAsyncThunk(
  "appointment/book-appointment",
  async ({phoneData,token}) => {
    console.log(token);
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
      "https://api-staging-fairshop.herokuapp.com/api/v1/appointments";

    try {
      const res = await axios.post(url, phoneData, config);
      console.log(res.data);
      message = res.data.message;
      code = res.data.statusCode;
      user = res.data.data;

      return { message, code, user };
    } catch (error) {
      console.log(error);
      message = error.response.data.message;
      code = error.response.status;

      return { message, code ,user};
    }
  }
);

export const getAppointmentTime = createAsyncThunk(
  "appointment/get-appointment-time",
  async ({token}) => {
    let message = "";
    let code = 0;
    let user = [];
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `https://api-staging-fairshop.herokuapp.com/api/v1/appointments/time-slots?location=62c6d7eb8844561b85c84234&date=2022-05-21`;

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

      return { message, code,user };
    }
  }
);

export const getUserAppointment = createAsyncThunk(
  "appointment/get-appointment",
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
    const url = `https://api-staging-fairshop.herokuapp.com/api/v1/appointments/user`;

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
  name: "appointment",
  initialState: {
    pending: false,
    error: false,
    done: false,
    message: "",
    appointmentTime: [],
    userAppointment: [],
  },
  reducers: {
    clearAppointment: (state) => {
      state.done = false;
      state.error = false;
    },
    getAppointment: (state, action) => {
      const { message, code, user } = action.payload;
      console.log(message, code, user.length);
      state.pending = false;
      state.done = code === 200 ? true : false;
      console.log(state.appointmentTime);
      state.message = message;
      state.error = code !== 200 ? true : false;
      state.appointmentTime = user;
    },
    getUserAppointments: (state, action) => {
      const { message, code, user } = action.payload;
      console.log(message, code, user.length);
      state.pending = false;
      state.done = code === 200 ? true : false;
      console.log(state.appointmentTime);
      state.message = message;
      state.error = code !== 200 ? true : false;
      state.userAppointment = user;
    },
  },
  extraReducers: {
    [bookAppointment.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.done = false;
      state.message = "";
    },
    [bookAppointment.fulfilled]: (state, action) => {
      const { message, code } = action.payload;
      console.log(message, code);
      state.pending = false;
      state.done = code === 200 ? true : false;
      state.message = message;
      state.error = code !== 200 ? true : false;
    },
    [bookAppointment.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },

    [getAppointmentTime.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.done = false;
      state.message = "";
    },
    [getAppointmentTime.fulfilled]: (state, action) => {
      const { message, code, user } = action.payload;
      console.log(message, code, user.length);
      state.pending = false;
      state.done = code === 200 ? true : false;
      console.log(state.appointmentTime);
      state.message = message;
      state.error = code !== 200 ? true : false;
      state.appointmentTime = user;
    },
    [getAppointmentTime.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },

    [getUserAppointment.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.done = false;
      state.message = "";
    },
    [getUserAppointment.fulfilled]: (state, action) => {
      const { message, code, user } = action.payload;
      console.log(message, code);
      state.pending = false;
      state.done = code === 200 ? true : false;
      state.message = message;
      state.error = code !== 200 ? true : false;
      state.userAppointment = user.doc;
    },
    [getUserAppointment.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearAppointment, getAppointment, getUserAppointments } =
  appointmentSlice.actions;

export default appointmentSlice.reducer;
