import {Link} from "react-router-dom"
const Error = () => {
  return (
    <main className=" error-page flex h-[70vh]   w-full min-w-[80vw] items-center justify-center  pt-10">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-3xl mb-[30px] text-primaryColor">Oops</h1>
        <h1 className="text-2xl text-secondaryColor mb-[30px] ">
          Something Went Wrong
        </h1>
        <Link
          to="/"
          className="border-secondaryColor border-2 flex w-[100px] h-[40px] rounded-3xl items-center justify-center text-sm lg:text-base font-bold cursor-pointer bg-secondaryColor"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}

export default Error