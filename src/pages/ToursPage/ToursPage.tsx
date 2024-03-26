import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ToursPage = () => {
  return (
    <div className="bg-eggshell">
      <Navbar />
      <section id="all-tours">
        {/* Container */}
        <div className="h-screen">
          <div className="px-5 py-6  md:px-20 md:py-12 ">Tours</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ToursPage;
