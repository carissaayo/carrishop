
import { Circles } from "react-loader-spinner";


const Loading = () => {
  return (
    <main className=" w-[80%] md:w-full   h-[60vh] bg-primaryColor top-[ 1px] z-20 flex items-center justify-center absolute  ">
       
      <Circles
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </main>
  );
}   

export default Loading