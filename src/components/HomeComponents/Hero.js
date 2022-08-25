import heroImg from "../../assets/imgs/hero.jpg"
const Hero = () => {

  return (
    <main className="w-full  flex   items-start justify-between  mb-20 ">

      {/* <section className=""> */}
        <img src={heroImg} alt="banner" className="h-[530px] w-full " />
      {/* </section> */}
    </main>
  );
};

export default Hero;
