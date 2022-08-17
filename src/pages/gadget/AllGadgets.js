import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  
  getAllGadgets
} from "../../redux/reducers/gadgetSlice";
import { useDispatch, useSelector } from "react-redux";

const AllGadgets = () => {
    const navigate = useNavigate();
  let dispatch = useDispatch();
  const { done, message, error, user } = useSelector((state) => state.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getAllGadgets({ token: user?.access_token }));
 
  };
  return (
    <main className="w-full h-screen">
      <div className="flex w-full h-full items-center justify-center">
        {done ? (
          <div>
            <span class="material-symbols-outlined">task_alt</span>
            <p>{message} </p>
            <p className="">
              <Link to="/">Go Back Home</Link>
            </p>
          </div>
        ) : (
          <form action="" className="" onSubmit={(e) => handleSubmit(e)}>
            <h2 className="">Get All Gadgets</h2>

            {error && (
              <div className="w-[300px]">
                <p className="text-[red]">{message}</p>
              </div>
            )}
            <div className="submit-btn-con flex">
              <button>Submit</button>
            </div>
          </form>
        )}
      </div>
    </main>)
}

export default AllGadgets