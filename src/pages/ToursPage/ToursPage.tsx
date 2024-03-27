import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TourCard from "@/components/TourCard";

const ToursPage = () => {
  return (
    <div className="bg-eggshell">
      <Navbar />
      <section id="all-tours">
        {/* Container */}

        <div className="px-5 py-6  md:px-20 md:py-12 min-h-screen">
          {/* Cards Container */}
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
              <TourCard />
              <TourCard />
              <TourCard />
              <TourCard />
              <TourCard />
              <TourCard />
              <TourCard />
              <TourCard />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ToursPage;
