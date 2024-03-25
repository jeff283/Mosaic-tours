import Navbar from "../../components/Navbar/Navbar";
import heroImg from "../../assets/imgs/HeroImg.png";

const HomePage = () => {
  return (
    <div className="bg-eggshell">
      <Navbar />
      {/* Hero Section */}
      <section id="home">
        <div className=" bg-darkGreen pt-6 pb-4 md:pt-36  ">
          <div className="flex flex-col-reverse justify-between items-center  text-white px-5  md:px-20 md:flex-row ">
            {/* Left Container */}
            <div className="space-y-8 smMax:pt-8 md:space-y-16">
              <h1 className="font-bold text-4xl w-3/4 md:text-6xl">
                Discover a World Within Kenya
              </h1>
              <p className="text-xl font-light md:text-2xl md:w-1/2 ">
                Join us on an unforgettable journey through Kenya's mosaic of
                experiences.
              </p>
              {/* CTA btn  */}
              <div className="w-1/2 md:w-1/3">
                <a
                  href="/"
                  className="block text-center font-medium text-3xl bg-eggshell text-darkGreen border border-eggshell px-6 py-1.5 pb-2 rounded-full align-middle hover:text-eggshell hover:bg-darkGreen md:block lgMax:px-2 lgMax:py-1 lgMax:pb-1 lgMax:text-2xl"
                >
                  Book A Tour
                </a>
              </div>
            </div>
            {/* Right Container */}
            <div className="">
              <img className="" src={heroImg} alt="Tours in Kenya" />
            </div>
          </div>
          {/* Locations */}
          <div className="bg-darkGreen text-eggshell  justify-between hidden md:flex md:px-20 text-lg pt-16 ">
            <span className="opacity-20 ">Mount Kenya </span>
            <span className="opacity-20">Nairobi National Park </span>
            <span className="opacity-20 ">Mount Longonot National Park</span>
            <span className="opacity-20 ">Aberdare National Park </span>
            <span className="opacity-20 ">Lewa Wildlife Conservancy </span>
            <span className="opacity-20">Masai Mara National Reserve</span>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours">
        {/* Container */}
        <div className="px-5 py-6  md:px-20 md:py-12">
          {/* Top Bar */}
          <div className="flex justify-between items-center font-bold text-darkGreen pb-16">
            <h2 className="text-4xl md:text-5xl ">Tours</h2>
            <div className="text-2xl md:text-3xl underline ">See all</div>
          </div>
          {/* Card Container */}
          <div className="">
            {/* Card */}
            <div className="">Card</div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about">
        {/* Container */}
        <div className="px-5 py-6  md:px-20 md:py-12">
          {/* Title */}
          <h2 className="font-bold text-4xl md:text-5xl text-darkGreen">
            About Us
          </h2>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
