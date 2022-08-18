import {ChevronLeftIcon}from"@heroicons/react/solid"

const GoBack = () => {
    const backHandler=()=>{
        window.history.back();
    }
  return (
    <div className="border-secondaryColor border-2 flex w-[100px] h-[40px] rounded-3xl items-center justify-center text-sm lg:text-base font-bold cursor-pointer" onClick={backHandler}>
    <ChevronLeftIcon className="h-[30px] w-[30px]"/>
      <p>Back</p>
    </div>
  );
}

export default GoBack