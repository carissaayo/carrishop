
import { Circles } from "react-loader-spinner";


const Loading = () => {
  return (
    <main className="aw-full h-screen z-50 flex items-center justify-center">
       
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