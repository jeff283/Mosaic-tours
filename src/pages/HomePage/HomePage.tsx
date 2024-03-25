import Navbar from "../../components/Navbar/Navbar";
import heroImg from "../../assets/imgs/HeroImg.png";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <div className=" bg-darkGreen h-[95vh] py-16 md:py-36">
          <div className="flex flex-col-reverse justify-between items-center  text-white px-5  md:px-20 md:flex-row">
            {/* Left Container */}
            <div className="space-y-10 md:space-y-16">
              <h1 className="font-bold text-4xl w-3/4 md:text-6xl">
                Discover a World Within Kenya
              </h1>
              <p className="text-xl font-light md:text-2xl md:w-1/2">
                Join us on an unforgettable journey through Kenya's mosaic of
                experiences.
              </p>
              {/* CTA btn  */}
              <div className="w-1/2 md:w-1/3">
                <a
                  href="/"
                  className="block text-center font-medium text-3xl bg-eggshell text-darkGreen border border-eggshell px-6 py-1.5 pb-2 rounded-full align-middle hover:text-eggshell hover:bg-darkGreen md:block lgMax:px-2 lgMax:py-1 lgMax:pb-1 lgMax:text-2xl lgMax:pb-2 "
                >
                  Book A Tour
                </a>
              </div>
            </div>
            {/* Right Container */}
            <div className="">
              <img src={heroImg} alt="Tours in Kenya" />
            </div>
          </div>
          <div className="bg-darkGreen text-eggshell flex justify-between md:px-20 text-lg pt-16">
            <span className="opacity-50 hidden md:block">Mount Kenya </span>
            <span className="opacity-50">Nairobi National Park </span>
            <span className="opacity-50 hidden md:block">
              Mount Longonot National Park
            </span>
            <span className="opacity-50 hidden md:block">
              Aberdare National Park{" "}
            </span>
            <span className="opacity-50 hidden md:block">
              Lewa Wildlife Conservancy{" "}
            </span>
            <span className="opacity-50">Masai Mara National Reserve</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
