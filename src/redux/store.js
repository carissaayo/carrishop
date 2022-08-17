import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice"
import generalReducer from "./reducers/generalSlice";
import appointmentReducer from "./reducers/appointmentSlice";
import gadgetsReducer from "./reducers/gadgetSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    general: generalReducer,
    appointment: appointmentReducer,
    gadget: gadgetsReducer,

  },
});
