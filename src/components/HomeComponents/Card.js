import {Link} from 'react-router-dom'

const Card = () => {
  return (
      <div className="mb-[40px] w-full md:w-[45%] lg:w-[30%]">
    <Link to="/">
        <div>
          <img
            src="https://images.unsplash.com/photo-1570633545582-cd25ed6e8497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDExfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="item"
            className="w-full  h-[262px] "
          />
        </div>
        <div className="bg-whiteBg px-[30px] py-[30px]">
          <h2 className="font-bold text-xl mb-[10px]">Iphone11 pro</h2>
          <h3 className="font-bold mb-[20px]">
            {" "}
            <span>64GB ROM</span> <span>4GB RAM</span>
          </h3>
          <h1 className="font-bold text-3xl text-primaryColor">
            &#8358; 200,000
          </h1>
        </div>
    </Link>
      </div>
  );
}

export default Card