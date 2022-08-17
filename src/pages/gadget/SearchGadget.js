import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchGadget } from "../../redux/reducers/gadgetSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchGadget = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [search, setSearch] = useState("")
  const { done, message, error, user } = useSelector((state) => state.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchGadget({ token: user?.access_token ,search}));
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
            <div className="register__input_con flex items-center justify-center gap-4">
              <label htmlFor="fullname">
                Search for Gadget <span>*</span>
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
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
    </main>
  );
};

export default SearchGadget;
