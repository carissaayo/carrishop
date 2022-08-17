import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const { done, message, error, user, userInfo } = useSelector(
    (state) => state.user
  );
  const loadUserInfo = () => {
    dispatch(getUserInfo({ token: user?.access_token }));
  };

  useEffect(() => {
    // loadUserInfo();
  }, []);

  return (
    <main className="w-full h-screen pt-6">
      <div className="flex w-full h-[100px] justify-end pr-[100px] ">
        <Link
          to="/"
          className="flex w-[max-content]  p-3 h-[40px] rounded-3xl items-center justify-center bg-black text-whiteBg  text-sm lg:text-base font-bold"
        >
          Update Information
        </Link>
      </div>
      <div className="flex w-full  items-center justify-center flex-col">
        {error ? (
          <h1>Error</h1>
        ) : (
          <>
            {userInfo && (
              <>
                <img
                  src={userInfo.profile_picture}
                  className="w-[400px]"
                  alt=""
                />
                <h1>{userInfo.fullname}</h1>
                <h3>{userInfo.email}</h3>
                <div className="flex  w-[600px]        justify-between items-center">
                  <p>{userInfo.date_of_birth.substring(0, 10)}</p>
                  <p>{userInfo.gender}</p>
                  <p>{userInfo.city}</p>
                  <p>{userInfo.state}</p>
                </div>

                <div className="w-full text-center mt-[20px]">
                  <h1>Next Of Kin</h1>
                  {userInfo.next_of_kin && (
                    <div className="flex text-center justify-center gap-[40px] items-center mt-[20px]">
                      <p>{userInfo.next_of_kin.name}</p>
                      <p>{userInfo.next_of_kin.phone}</p>
                      <p>{userInfo.next_of_kin.address}</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default User;
