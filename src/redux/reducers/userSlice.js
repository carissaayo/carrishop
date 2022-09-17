import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Login User
export const userLogin = createAsyncThunk(
  "users/user-login",
  async ({ email, password, saveSession }) => {
    let message = "";
    let code = 0;
    let user = {};
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const url =
      "https://api-staging-fairshop.herokuapp.com/api/v1/auth/users/login";

    const data = {
      password,
      email,
    };

    try {
      const res = await axios.post(url, data, config);
      console.log(res.data);
      message = res.data.message;
      code = res.data.statusCode;

      if (code === 200) {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        
      }
      return { message, code, user };
    } catch (error) {
      console.log(error);
      message = error.response.data.message;
      code = error.response.status;

      return { message, code };
    }
  }
);

// Register User
export const registerUser = createAsyncThunk(
  "users/register-user",
  async ({ email, password, fullname, phone }) => {
    let message = "";
    let code = 0;
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const url =
      "https://api-staging-fairshop.herokuapp.com/api/v1/users/register";

    const data = {
      password,
      email,
      fullname,
      phone,
    };
    try {
      const res = await axios.post(url, data, config);
      console.log(res.data);
      message = res.data.message;
      code = res.data.statusCode;
      return { message, code };
    } catch (error) {
      console.log(error);
      message = error.response.data.message;
      code = error.response.status;
      return { message, code };
    }
  }
);

// Reset Password 1
export const resetPassword = createAsyncThunk(
  "users/reset-password",
  async (email) => {
    let message = "";
    let code = 0;
    let user = {};
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const url =
      "https://api-staging-fairshop.herokuapp.com/api/v1/users/reset-password";

    const data = {
      email,
    };

    try {
      const res = await axios.post(url, data, config);
      console.log(res.data);
      message = res.data.message;
      code = res.data.statusCode;

      return { message, code, user };
    } catch (error) {
      console.log(error);
      message = error.response.data.message;
      code = error.response.status;

      return { message, code };
    }
  }
);

// Reset Password 2
// After A mail has been sent to the user's email
export const changePassword = createAsyncThunk(
  "users/change-password",
  async (password) => {
    let message = "";
    let code = 0;
    let user = {};
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "session-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmEwNWZkZGY5ZGYxYjg4NzMxNzliYyIsImV4cCI6MTY2MjcyODQxMy4zMTgsImlhdCI6MTY2MjcyNzIxM30.sxIc4r3sCDOKc4c2rXcFy4zRWgUXdd_FkU_6lDhatCk",
      },
    };
    const url =
      "https://api-staging-fairshop.herokuapp.com/api/v1/users/verify-reset";

    const data = {
      password,
    };

    try {
      const res = await axios.post(url, data, config);
      console.log(res.data);
      message = res.data.message;
      code = res.data.statusCode;

      return { message, code, user };
    } catch (error) {
      console.log(error);
      message = error.response.data.message;
      code = error.response.status;

      return { message, code };
    }
  }
);

// User Account Verification
export const accountVerification = createAsyncThunk(
  "users/account-verification",
  async ({ newdata, token }) => {
    let message = "";
    let code = 0;
    let user = {};
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
        },
    };
    const url = `https://api-staging-fairshop.herokuapp.com/api/v1/users/verify-reset`

    try {
      const res = await axios.post(url, newdata, config);
      console.log(res.data);
      message = res.data.message;
      code = res.data.statusCode;

      return { message, code, user };
    } catch (error) {
      console.log(error);
      message = error.response.data.message;
      code = error.response.status;

      return { message, code };
    }
  }
);


export const userSlice = createSlice({
  name: "user",
  initialState: {
    pending: false,
    error: false,
    user: undefined,
    done: false,
    loginDone:false,
    message: "",
    userInfo: {},
    openSnap:false,
  },
  reducers: {
    loading: (state) => {
      state.pending = true;
    },
    getUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },updateUserInfo: (state, action) => {
      const { message, code, info } = action.payload;
state.message = message;
state.error = code !== 200 ? true : false;
      state.userInfo = info;
      state.pending = false;
       state.done = code === 200 ? true : false;
       console.log(state.userInfo);
    },
    clearAccounDetails: (state) => {
      state.done = false;
      state.error = false
    },

    deleteUser: (state) => {
      localStorage.removeItem("user");
      state.user = {};
      state.done = false;
    },
    closeSnap :(state)=>{
        state.error = false;
      state.openSnap = false;
    },
    blankDetails:(state,action)=>{
      
        state.openSnap = true;
        state.error=true;
        if(action.payload[1] === "register"
        ){
state.message = `${action.payload[0]} `;
        }
        else if (action.payload[1] === "login") {
          state.message = `${action.payload[0]} can't be blanked`;
          console.log(action.payload[0]);
        }
    },
    resetDone: (state) => {
      state.done= false;
      state.openSnap= false
    }
  },
  extraReducers: {
    // Login Reducer
    [userLogin.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.done = false;
      state.message = "";
    },
    [userLogin.fulfilled]: (state, action) => {
      const { message, code,user } = action.payload;
      console.log(message, code);
      state.pending = false;
      state.loginDone = code === 200 ? true : false;
      state.user= user
      state.message = message;
      state.error = code !== 200 ? true : false;
      state.openSnap = state.error === true ? true : false;
    },
    [userLogin.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },

    // Register User Reducer

    [registerUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [registerUser.fulfilled]: (state, action) => {
      const { message, code } = action.payload;
      console.log(message, code);
      state.pending = false;
      state.done = code === 200 ? true : false;
      state.message = message;
      state.error = code !== 200 ? true : false;
      state.openSnap= true
    },
    [registerUser.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },

    // Regset User Password Reducer
    [resetPassword.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.done = false;
      state.message = "";
    },
    [resetPassword.fulfilled]: (state, action) => {
      const { message, code } = action.payload;
      console.log(message, code);
      state.pending = false;
      state.done = code === 200 ? true : false;
      state.message = message;
      state.error = code !== 200 ? true : false;
      state.openSnap=true
    },
    [resetPassword.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },

    // Change User password Reducer
    [changePassword.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.done = false;
      state.message = "";
    },
    [changePassword.fulfilled]: (state, action) => {
      const { message, code } = action.payload;
      console.log(message, code);
      state.pending = false;
      state.done = code === 200 ? true : false;
      state.message = message;
      state.error = code !== 200 ? true : false;
      state.openSnap=true
    },
    [changePassword.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },


    // Account verification Reducer
    [accountVerification.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.done = false;
      state.message = "";
    },
    [accountVerification.fulfilled]: (state, action) => {
      const { message, code } = action.payload;
      console.log(message, code);
      state.pending = false;
      state.done = code === 200 ? true : false;
      state.message = message;
      state.error = code !== 200 ? true : false;
    },
    [accountVerification.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  deleteUser,
  getUser,
  loading,
  updateUserInfo,
  clearAccounDetails,
  closeSnap,
  blankDetails,
  resetDone
} = userSlice.actions;

export default userSlice.reducer;
