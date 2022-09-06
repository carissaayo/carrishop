

const ChangePassword = ({current}) => {
  return (
    <section
      className={`${
        current === "change-password" ? "flex " : "hidden"
      } w-[80%] mx-auto md:mx-0 md:w-full mb-24 items-center justify-center flex-col gap-10`}
    >
      {/* Current Password */}
      <div className="w-[90%] sm:w-[70%] md:w-[50%]">
        {" "}
        <h1 className="mb-5">Current Password</h1>
        <input
          type="text"
          className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
          placeholder=""
        />
      </div>

      {/* New Password */}
      <div className="w-[90%] sm:w-[70%] md:w-[50%]">
        {" "}
        <h1 className="mb-5">New Password</h1>
        <input
          type="text"
          className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
          placeholder=""
        />
      </div>

      <div className="w-[90%] sm:w-[70%] md:w-[50%]">
        {" "}
        <h1 className="mb-5">Confirm Password</h1>
        <input
          type="text"
          className=" w-full  border border-[#E0E0E0] outline-none focus:border-2 p-2 rounded-xl h-[50px]"
          placeholder=""
        />
      </div>

      {/* Save Button */}
      <div className="w-[90%] sm:w-[70%] md:w-[50%] mx-auto mb-10 flex items-center justify-center">
        <button className=" w-full bg-[#FCA311] p-4 px-6 text-primaryColor rounded-full text-center ">
          SAVE
        </button>
      </div>
    </section>
  );
}

export default ChangePassword