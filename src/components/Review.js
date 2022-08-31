
import { StarFill, Star } from "react-bootstrap-icons";

const Review = ({name,image}) => {
  return (
    <div className="w-full =flex-col review md:flex-row border-b border-[#ECEBEB] py-10">
      <div className=" block  image">
        <img
          src={image}
          alt=""
          className="w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] rounded-full "
        />
      </div>
      {/* <div className=""> */}
      <h4 className="text-lg sm:text-xl  name my-auto ">{name}</h4>
      <div className="flex gap-2 items-center w-full">
        <StarFill className="text-lg  text-secondaryColor" />
        <StarFill className="text-lg  text-secondaryColor" />
        <StarFill className="text-lg  text-secondaryColor" />
        <StarFill className="text-lg  text-secondaryColor" />

        <p className="text-[#868686]  ratings min-w-[150px]">3 weeks ago</p>
      </div>
      <p className="text-base md:text-xl comment">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Suspendisse eget facilisis odio. Duis sodales
        augue eu tincidunt faucibus. Etiam justo ligula, placerat ac augue id,
        volutpat porta dui.
      </p>
      {/* </div> */}
    </div>
  );
}

export default Review