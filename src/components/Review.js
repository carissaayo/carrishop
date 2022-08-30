
import { StarFill, Star } from "react-bootstrap-icons";

const Review = ({name,image}) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-10 border-b border-[#ECEBEB] py-10">
      <div className="flex md:block items-center gap-8">
        <img
          src={image}
          alt=""
          className="w-[70px] h-[60px] sm:w-[120px] sm:h-[120px]  md:h-[80px] rounded-full"
        />
        <h4 className="text-lg sm:text-xl mb-5">{name}</h4>
      </div>
      <div className="">
        <div className="flex gap-2">
          <StarFill className="text-lg  text-secondaryColor" />
          <StarFill className="text-lg  text-secondaryColor" />
          <StarFill className="text-lg  text-secondaryColor" />
          <StarFill className="text-lg  text-secondaryColor" />

          <p className="text-[#868686] mb-4">3 weeks ago</p>
        </div>
        <p className="text-base md:text-xl">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Suspendisse eget facilisis odio. Duis sodales
          augue eu tincidunt faucibus. Etiam justo ligula, placerat ac augue id,
          volutpat porta dui.
        </p>
      </div>
    </div>
  );
}

export default Review