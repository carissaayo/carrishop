import React from 'react'
import {Link} from "react-router-dom"
const Error = () => {
  return (
    <div className=" error-page flex h-screen w-full items-center justify-start flex-col pt-10">
      <h1 className="text-3xl mb-[30px] text-primaryColor">Oops</h1>
      <h1 className="text-2xl text-primaryColor mb-[30px] ">
        Something Went Wrong
      </h1>
      <Link
        to="/"
        className="border-primaryColor border-2 flex w-[100px] h-[40px] rounded-3xl items-center justify-center text-sm lg:text-base font-bold cursor-pointe bg-primaryColor"
      >
        Go Home
      </Link>
    </div>
  );
}

export default Error