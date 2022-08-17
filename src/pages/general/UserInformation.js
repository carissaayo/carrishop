import { meansOfIdentity } from "../../redux/reducers/generalSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserInformation = () => {
      let dispatch = useDispatch();
      const { done, message, error, code, user } = useSelector(
        (state) => state.user
      );

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(meansOfIdentity());
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
        ):(
        <form action="" className="" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="">Get Means of Identity</h2>

          {error && (
            <div className="w-[300px]">
              <p className="text-[red]">{message}</p>
            </div>
          )}
          <div className="submit-btn-con flex">
            <button>Submit</button>
          </div>
        </form>)}
      </div>
    </main>
  );
};

export default UserInformation;
