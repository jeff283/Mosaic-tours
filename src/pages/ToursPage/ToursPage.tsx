import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TourCard from "@/components/TourCard";
import { db } from "@/config/firebase";
import Tour from "@/Interfaces/Tour";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const ToursPage = () => {
  const [tourList, setTourList] = useState<Tour[]>({} as Tour[]);

  // FIREBASE FIRESTORE

  const tourCollectionRef = collection(db, "mosaicTours");
  // Firebase Get

  const getTourList = () => {
    getDocs(tourCollectionRef)
      .then((data) => {
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTourList(filterData as Tour[]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // USE EFFECTS
  useEffect(() => {
    getTourList();
  }, []);

  return (
    <div className="bg-eggshell">
      <Navbar />
      <section id="all-tours">
        {/* Container */}

        <div className="min-h-screen px-5 py-6 md:px-20 md:py-12">
          {/* Cards Container */}
          <div className="space-y-16">
            {tourList && tourList.length > 0 ? (
              <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tourList.map((tour: Tour) => (
                  <TourCard tour={tour} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[60vh]  gap-3">
                <h2 className="text-4xl font-bold">No Tours Available</h2>
                <h3 className="text-2xl font-medium">Please come back later</h3>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ToursPage;
