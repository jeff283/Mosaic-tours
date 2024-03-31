// COMPONENTS
import AdminPortalSidebar from "@/components/AdminPortalSidebar";
import PortalTopBar from "@/components/PortalTopBar";
import TableDisplay from "@/components/TableDisplay";
import TableForm from "@/components/TableForm";
// SHADCN COMPONENTS
import { Button } from "@/components/ui/button";

// INTERFACES
import Tour from "@/Interfaces/Tour";

// LIBARIES
import { useEffect, useState } from "react";

// CONFIGS
import { db } from "../../config/firebase";

// FIREBASE
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  // updateDoc,
} from "firebase/firestore";

const AdminPortalTours = () => {
  // STATES
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isUpdatingTour, setIsUpdatingTour] = useState(false);
  const [updateTour, setUpdateTour] = useState<Tour>({} as Tour);
  const [tourList, setTourList] = useState<Tour[]>({} as Tour[]);

  // Update from list
  const handleUpdateTour = (tour: Tour) => {
    // Open Form
    setIsSheetOpen(true);
    // Setting User to be Edited
    setUpdateTour(tour);
    // Tell Form we Are Updating
    setIsUpdatingTour(true);
  };

  // Delete from list
  const handleDeleteTour = (tour: Tour) => {
    deleteTour(tour);
  };

  // Submit from form
  const handleFormSubmit = (tour: Tour) => {
    if (isUpdatingTour) {
      updateDbTour(tour);
    } else {
      createTour(tour);
    }
  };

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

  // Firebase Create

  const createTour = (tour: Tour) => {
    addDoc(tourCollectionRef, tour)
      .then(() => {
        getTourList();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //  UPDATE TOUR

  const updateDbTour = (tour: Tour) => {
    const newUpdatedTour = {
      // id: "1",
      tourName: tour.tourName,
      location: tour.location,
      tourImg: tour.tourImg,
      tourDate: tour.tourDate,
      days: tour.days,
      nights: tour.nights,
      price: tour.price,
      participants: tour.participants,
    };
    if (tour.id) {
      const tourDoc = doc(db, "mosaicTours", tour.id);
      delete tour.id;
      updateDoc(tourDoc, newUpdatedTour)
        .then(() => {
          getTourList();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.error("No Tour ID was provided");
    }
  };

  //  DELETE TOUR
  const deleteTour = (tour: Tour) => {
    if (tour.id) {
      const tourDoc = doc(db, "mosaicTours", tour.id);
      deleteDoc(tourDoc)
        .then(() => {
          getTourList();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.error("No Tour ID was provided");
    }
  };

  // USE EFFECTS
  useEffect(() => {
    getTourList();
  }, []);

  return (
    <div className="flex bg-eggshell">
      <AdminPortalSidebar />

      <div className="w-full px-2 md:pr-20 md:pl-4">
        <PortalTopBar pageTitle="Tours" />
        <main className="flex flex-col flex-1 gap-4 p-4 px-1 md:gap-6 md:p-6 ">
          <div className="">
            <Button
              className="px-6 text-xl border border-darkGreen bg-darkGreen md:text-2xl md:px-12 md:py-5 hover:text-darkGreen hover:bg-eggshell"
              onClick={() => {
                setIsSheetOpen(true);
              }}
            >
              Add Tour
            </Button>
            <TableForm
              openSheet={isSheetOpen}
              updateTour={updateTour}
              onOpenSheetChange={(sheetState) => setIsSheetOpen(sheetState)}
              clearUpdateTour={() => {
                setUpdateTour({} as Tour);
              }}
              onFormSubmit={(tour) => {
                // Close Form
                setIsSheetOpen(false);
                // Removing User to be Edited
                setUpdateTour({} as Tour);
                // Handling Form Data
                handleFormSubmit(tour);
                // Tell Form we Are Not Updating
                setIsUpdatingTour(false);
              }}
            />
          </div>

          <div className="">
            <TableDisplay
              // toursData={toursData}
              toursData={tourList}
              onEditTour={(tour) => handleUpdateTour(tour)}
              onDeleteTour={(tour) => handleDeleteTour(tour)}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPortalTours;
