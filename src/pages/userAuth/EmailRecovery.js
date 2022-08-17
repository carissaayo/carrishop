import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const EmailRecovery = () => {
    const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(false)
  const [message, setMessage] = useState("Hello")
      const [phone, setPhone] = useState("");
      const handleSubmit = async (e) => {
        e.preventDefault();

        sendData();
      };

      const sendData = async () => {
        const config = {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        };
        const url =
          "https://api-staging-fairshop.herokuapp.com/api/v1/users/recover-email";

        const data = {
         phone,
        };

        axios
          .post(url, data, config)
          .then((res) => {
            console.log(res);
             if (res.status === 201) {
              //  navigate("/");
              setEmailSent(true)
              setMessage(res.data.message)
             }
          })
          .catch((err) => console.log(err));
      };
  return (
    <main className="w-full h-screen">
      <div className="flex w-full h-full items-center justify-center">
        {emailSent ? (
          <div className="">
            <span class="material-symbols-outlined text-red">task_alt</span>
            <p>{message}</p>
            <Link to="/" className="cursor-pointer">
              Go Back
            </Link>
          </div>
        ) : (
          <form action="" className="" onSubmit={(e) => handleSubmit(e)}>
            <h2 className="">Recover Email</h2>

            <div className="">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Your Phone Number"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="submit-btn-con flex">
              <button>Submit</button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
};

export default EmailRecovery;
