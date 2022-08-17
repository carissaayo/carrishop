import {  useNavigate } from "react-router-dom";
import { deleteUser } from "../../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Logout = () => {
      const { done, message, error, code, user } = useSelector(
        (state) => state.user
        
      );
  const navigate = useNavigate();
        let dispatch = useDispatch();

        const confirmSignOut = () => {
          dispatch(deleteUser());
          // navigate("/")
        window.open("/","_self");
        };
  return (
    <div className="w-3/5 m-auto h-screen  flex flex-col gap-[50px] justify-center items-center ">
      <p>Are you sure you want to logout?</p>
      <div className="flex justify-around items-center  gap-[20px] ">
        <p
          className="flex w-[100px] h-[40px] rounded-3xl items-center justify-center bg-black text-whiteBg  text-sm lg:text-base font-bold cursor-pointer "
          onClick={ confirmSignOut}
        >
          Yes
        </p>
        <p
          className="border-secondaryColor border-2 flex w-[100px] h-[40px] rounded-3xl items-center justify-center text-sm lg:text-base font-bold cursor-pointer"
          onClick={() =>  navigate("/")}
        >
          No
        </p>
      </div>
    </div>
  );
};

export default Logout;
