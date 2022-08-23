import { useNavigate, Link ,useParams} from "react-router-dom";
import { useEffect } from "react";
import { getUserInfo,loading,getUser, updateUserInfo } from "../../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import GoBack from "../../components/HomeComponents/GoBack";
import axios from "axios";

const User = () => {
  const navigate = useNavigate();
  const {userId} = useParams()

  let dispatch = useDispatch();
  const { pending, error, user, userInfo } = useSelector(
    (state) => state.user
  );
  const loadUserInfo =async () => {
let message = "";
let code = 0;
let info = [];

     const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${ user?.access_token}`,
    },
  };
  const url = `https://api-staging-fairshop.herokuapp.com/api/v1/users/info`;

  try {
    const res = await axios.get(url, config);
    console.log(res.data);
    message = res.data.message;
    code = res.data.statusCode;
   info = res.data.data;
   dispatch(loading())
   dispatch(updateUserInfo({ message, code, info }));
    return { message, code, info };
  } catch (error) {
    console.log(error);
    message = error.response.data.message;
    code = error.response.status;
    return { message, code };
  }
  };

  useEffect(() => {
     if(user){
console.log("lo");

         loadUserInfo()
     }
  }, [userId]);

if(error) return (
  <div className="flex h-screen w-full items-center justify-center">
    <h1 >Error</h1>
  </div>
);

  return (
    <main className="w-full h-screen pt-6">
      <div className="flex w-full h-[100px] justify-between px-[100px] ">
        <GoBack />
        <Link
          to="/account-verification"
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
            {userInfo ? (
              <>
                <img
                  src={userInfo?.profile_picture}
                  className="w-[400px]"
                  alt=""
                />
                <h1>{userInfo?.fullname}</h1>
                <h3>{userInfo?.email}</h3>
                <div className="flex  w-[600px]        justify-between items-center">
                  <p>{userInfo?.date_of_birth?.substring(0, 10)}</p>
                  <p>{userInfo?.gender}</p>
                  <p>{userInfo?.city}</p>
                  <p>{userInfo?.state}</p>
                </div>

                <div className="w-full text-center mt-[20px]">
                  {userInfo?.next_of_kin && <h1>Next Of Kin</h1>}
                  {userInfo?.next_of_kin && (
                    <div className="flex text-center justify-center gap-[40px] items-center mt-[20px]">
                      <p>{userInfo?.next_of_kin?.name}</p>
                      <p>{userInfo?.next_of_kin?.phone}</p>
                      <p>{userInfo?.next_of_kin?.address}</p>
                    </div>
                  )}

            
                </div>
              </>
            ) : (
              <p>Please Wait ...</p>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default User;
