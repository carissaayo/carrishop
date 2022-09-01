import { Range, getTrackBackground } from "react-range";
import { ChevronRight, Plus } from "react-bootstrap-icons";

const PriceFilter = ({values,setValues}) => {
    const STEP = 50;
    const MIN = 50;
    const MAX = 1_000_000;
  return (
    <section className="w-[90%] sm:w-[80%] mx-auto md:mx-0 md:w-[45%] lg:w-full mb-10 pl-4 ">
      <div className="flex justify-between w-[95%] items-center ">
        <p className="font-bold text-xl">Price</p>
        <button className="text-[#FCA311] text-lg">Apply</button>
      </div>

      {/* Filter  */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        className=" w-[80%]"
      >
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: values,
                    colors: ["#FCA311", "#ccc"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "30px",
                width: "30px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#FCA311" : "#CCC",
                }}
              />
            </div>
          )}
        />
        <output className="mt-2 text-lg font-bold" id="output">
          &#8358; {values[0]}
        </output>
      </div>
      <div className="my-5 ">
        <p className="text-[#8D8D8D] text-lg">
          Price: &#8358;50 - &#8358;1,00,000
        </p>
      </div>

      <div className="w-full flex items-center justify-center md:block">
        <button className="bg-[#FCA311] p-4 px-12 font-bold text-lg text-primaryColor rounded-full">
          Filter
        </button>
      </div>
    </section>
  );
};

export default PriceFilter;
