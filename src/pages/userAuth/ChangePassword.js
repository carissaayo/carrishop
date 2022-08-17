import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/reducers/userSlice";
const ChangePassword = () => {
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  const { done, message, error } = useSelector((state) => state.user);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
    dispatch(changePassword(password));   
    };
    
  return (
    <main className="w-full h-screen">
      <div className="flex w-full h-full items-center justify-center">
        {done ? (
          <div>
            <span class="material-symbols-outlined">task_alt</span>
            <p>Password has been reset</p>
            <p className="">
              <Link to="/">Go Back Home</Link>
            </p>
          </div>
        ) : (
          <form
            action=""
            className="register__form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2 className="register__title">Enter new password</h2>

            <div className="register__input_con">
              <label htmlFor="email">
                New password <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter new password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

export default ChangePassword;
