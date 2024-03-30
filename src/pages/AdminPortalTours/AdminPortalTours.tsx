import AdminPortalSidebar from "@/components/AdminPortalSidebar";
import PortalTopBar from "@/components/PortalTopBar";
import { TableDisplay } from "@/components/TableDisplay";
import TableForm from "@/components/TableForm";
import { Button } from "@/components/ui/button";
import Tour from "@/Interfaces/Tour";
import { useState } from "react";

const toursData: Tour[] = [
  {
    id: "1",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "2024-04-25",
    // tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "2",
    tourName: "Mount Longonot",
    location: "Mai Mahui, Kenya",
    tourImg: "png",
    tourDate: "2024-02-05",
    // tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "3",
    tourName: "Masaai Mara",
    location: "Narok, Kenya",
    tourImg: "png",
    tourDate: "2024-07-15",
    // tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "4",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "2024-04-25",
    // tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "5",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "2024-04-25",
    // tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "6",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "2024-04-25",
    // tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "7",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "2024-04-25",
    // tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "8",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "2024-04-25",
    // tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "9",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "2024-04-25",
    // tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "10",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "2024-04-25",
    // tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "11",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "2024-04-25",
    // tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
];

const AdminPortalTours = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isUpdatingTour, setIsUpdatingTour] = useState(false);
  const [updateTour, setUpdateTour] = useState<Tour>({} as Tour);

  // Update
  const handleUpdateTour = (tour: Tour) => {
    // Open Form
    setIsSheetOpen(true);
    // Setting User to be Edited
    setUpdateTour(tour);
    // Tell Form we Are Updating
    setIsUpdatingTour(true);

    // console.log(tour);
  };

  // Delete
  const handleDeleteTour = (tour: Tour) => {
    console.log(tour);
  };

  const handleFormSubmit = (tour: Tour) => {
    if (isUpdatingTour) {
      console.log("Updated Tour: ", tour);
    } else {
      console.log("Created Tour: ", tour);
    }
  };

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
                console.log("Update Tour on Add Click:\n", updateTour);
                setUpdateTour({} as Tour);
                console.log("Update Tour on Add Click After:\n", updateTour);
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
              toursData={toursData}
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
