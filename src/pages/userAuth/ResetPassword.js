import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/reducers/userSlice";


const ResetPassword = () => {
  const [email, setEmail] = useState("");
  let dispatch = useDispatch();

  const { done, message, error } = useSelector(
    (state) => state.user
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(resetPassword(email));
  };

  return (
    <main className="w-full h-screen">
      <div className="flex w-full h-full items-center justify-center">
        {done ? (
          <div>
            <span class="material-symbols-outlined">task_alt</span>
            <p>
              A link has been sent to {email}, kindly check it out to reset your password
            </p>
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
            <h2 className="register__title">Recover Email</h2>

            <div className="register__input_con">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default ResetPassword;
