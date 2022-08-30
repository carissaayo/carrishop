
import { StarFill, Star } from "react-bootstrap-icons";

const Review = ({name,image}) => {
  return (
    <div className="w-full flex gap-10 border-b border-[#ECEBEB] py-10">
      <div className="">
        <img
          src={image}
          alt=""
          className="w-[180px] h-[80px] rounded-full"
        />
      </div>
      <div className="">
        <h4 className="text-xl mb-5">{name}</h4>
        <div className="flex gap-2">
          <StarFill className="text-lg  text-secondaryColor" />
          <StarFill className="text-lg  text-secondaryColor" />
          <StarFill className="text-lg  text-secondaryColor" />
          <StarFill className="text-lg  text-secondaryColor" />

          <p className="text-[#868686] mb-4">3 weeks ago</p>
        </div>
        <p className="text-xl">
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