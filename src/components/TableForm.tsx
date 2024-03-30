// import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  //   SheetClose,
  SheetContent,
  SheetDescription,
  //   SheetFooter,
  SheetHeader,
  SheetTitle,
  //   SheetTrigger,
} from "@/components/ui/sheet";
// import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

import { FieldValues, useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
// import { useEffect, useState } from "react";
import Tour from "@/Interfaces/Tour";
import { useEffect } from "react";

const emptyTour: Tour = {
  id: "",
  tourName: "",
  location: "",
  tourImg: "",
  tourDate: "",
  days: 0,
  nights: 0,
  price: 0,
  participants: [],
};

interface Props {
  openSheet: boolean;
  updateTour?: Tour;
  onOpenSheetChange: (sheetState: boolean) => void;
  onFormSubmit: (tour: Tour) => void;
  clearUpdateTour: () => void;
}

const TableForm = ({
  openSheet,
  updateTour = emptyTour,
  onOpenSheetChange,
  onFormSubmit,
  clearUpdateTour,
}: Props) => {
  const isUpdateTour =
    updateTour && Object.keys(updateTour).length > 0 ? true : false;
  console.log("isUpdateTour", isUpdateTour);
  console.log("updateTour", updateTour);

  const {
    register,
    handleSubmit,
    reset,
    //  control,
    setValue,
  } = useForm();
  //     {
  //     defaultValues: {
  //       //   tourName: updateTour.tourName,
  //       tourName: isUpdateTour ? updateTour.tourName : "No Tour Name",
  //       location: updateTour.location,
  //       tourImg: updateTour.tourImg,
  //       tourDate: updateTour.tourDate,
  //       days: updateTour.days,
  //       nights: updateTour.nights,
  //       price: updateTour.price,
  //     },
  //   }

  useEffect(() => {
    setValue("tourName", updateTour.tourName || "");
    setValue("location", updateTour.location || "");
    setValue("tourDate", updateTour.tourDate || "");
    setValue("days", updateTour.days || "");
    setValue("nights", updateTour.nights || "");
    setValue("price", updateTour.price || "");
  }, [updateTour, setValue]);

  const onSubmit = async (data: FieldValues) => {
    const tourTemplateData: Tour = {
      id: "",
      tourName: data.tourName,
      location: data.location,
      //   tourImg: data.tourImg,
      tourImg: "tourImg.png",
      tourDate: data.tourDate,
      days: parseInt(data.days),
      nights: parseInt(data.nights),
      price: parseInt(data.price),
      participants: [],
    };
    onFormSubmit(tourTemplateData);
    // setIsSubmitted(true);
    reset();
    console.log("updateTour on Submit State: \n", updateTour);

    clearUpdateTour();
    console.log("updateTour on Emptying State: \n", updateTour);
  };

  //   console.log({ ...(isUpdateTour && { defaultValue: updateTour.tourName }) });

  //   useEffect(() => {
  //     if (isSubmitted) {
  //       reset();

  //       setIsSubmitted(false); // Reset submission state after form reset
  //     }
  //   }, [isSubmitted, reset]);

  return (
    <div className="">
      {/* Sheet component */}
      <Sheet
        open={openSheet}
        onOpenChange={() => {
          onOpenSheetChange(!openSheet);
          //   setIsSubmitted(true);
          clearUpdateTour();
          reset();
          console.log("Sheet Focus Changed");
        }}
      >
        <SheetContent className=" mr-7 md:mr-0 bg-eggshell shadow-custom">
          <SheetHeader>
            <SheetTitle className="text-2xl">Tour Details</SheetTitle>
            <SheetDescription>View Details on (X) tour</SheetDescription>
          </SheetHeader>
          <div className="max-h-[80vh] md:max-h-[90vh] overflow-y-auto custom-scrollbar pb-4">
            {/* <DevTool control={control} placement="top-left" /> */}
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
              {/* TOUR NAME */}
              <div className="grid items-center gap-0 grid-row-2">
                <label
                  htmlFor="tourName"
                  className="px-2 text-lg font-medium md:text-2xl"
                >
                  Tour Name
                </label>
                {/* <p>{updateTour.tourName}</p> */}
                <input
                  {...register("tourName")}
                  //   defaultValue={isUpdateTour ? updateTour.tourName : ""}
                  //   {...(isUpdateTour && { defaultValue: updateTour.tourName })}
                  id="tourName"
                  type="text"
                  placeholder="Enter Tour Name"
                  required
                  className="block w-full mt-0 text-base font-light border-0 border-b-2 border-lightGreen bg-eggshell md:text-xl focus:ring-0 focus:border-darkGreen"
                />
              </div>
              {/* TOUR LOCATION */}
              <div className="grid items-center gap-0 grid-row-2">
                <label
                  htmlFor="location"
                  className="px-2 text-lg font-medium md:text-2xl"
                >
                  Location
                </label>
                {/* <p>{updateTour.location}</p> */}
                <input
                  {...register("location")}
                  //   defaultValue={isUpdateTour ? updateTour.location : ""}
                  id="location"
                  type="text"
                  placeholder="Enter Tour Location"
                  required
                  className="block w-full mt-0 text-base font-light border-0 border-b-2 border-lightGreen bg-eggshell md:text-xl focus:ring-0 focus:border-darkGreen"
                />
              </div>
              {/* TOUR DATE */}
              <div className="grid items-center gap-0 grid-row-2">
                <label
                  htmlFor="date"
                  className="px-2 text-lg font-medium md:text-2xl"
                >
                  Date
                </label>
                {/* <p>{updateTour.tourDate}</p> */}

                <input
                  {...register("tourDate")}
                  //   defaultValue={isUpdateTour ? updateTour.tourDate : ""}
                  id="tourDate"
                  type="text"
                  placeholder="Enter Tour date"
                  required
                  className="block w-full mt-0 text-base font-light border-0 border-b-2 border-lightGreen bg-eggshell md:text-xl focus:ring-0 focus:border-darkGreen"
                />
              </div>
              {/* TOUR DAYS */}
              <div className="grid items-center gap-0 grid-row-2">
                <label
                  htmlFor="days"
                  className="px-2 text-lg font-medium md:text-2xl"
                >
                  Days
                </label>
                {/* <p>{updateTour.days}</p> */}

                <input
                  {...register("days")}
                  //   defaultValue={isUpdateTour ? updateTour.days : ""}
                  id="days"
                  type="number"
                  placeholder="Enter Tour Days"
                  required
                  className="block w-full mt-0 text-base font-light border-0 border-b-2 border-lightGreen bg-eggshell md:text-xl focus:ring-0 focus:border-darkGreen"
                />
              </div>
              {/* TOUR NIGHTS */}
              <div className="grid items-center gap-0 grid-row-2">
                <label
                  htmlFor="nights"
                  className="px-2 text-lg font-medium md:text-2xl"
                >
                  Nights
                </label>
                {/* <p>{updateTour.nights}</p> */}

                <input
                  {...register("nights")}
                  //   defaultValue={isUpdateTour ? updateTour.nights : ""}
                  id="nights"
                  type="number"
                  placeholder="Enter Tour Nights"
                  required
                  className="block w-full mt-0 text-base font-light border-0 border-b-2 border-lightGreen bg-eggshell md:text-xl focus:ring-0 focus:border-darkGreen"
                />
              </div>
              {/* TOUR PRICE */}
              <div className="grid items-center gap-0 grid-row-2">
                <label
                  htmlFor="price"
                  className="px-2 text-lg font-medium md:text-2xl"
                >
                  Price
                </label>
                {/* <p>{updateTour.price}</p> */}

                <input
                  {...register("price")}
                  //   defaultValue={isUpdateTour ? updateTour.price : ""}
                  id="price"
                  type="number"
                  placeholder="Enter Tour Price"
                  required
                  className="block w-full mt-0 text-base font-light border-0 border-b-2 border-lightGreen bg-eggshell md:text-xl focus:ring-0 focus:border-darkGreen"
                />
              </div>
              {/* TOUR IMAGE */}
              {/* <div className="grid items-center gap-0 grid-row-2">
                <label
                  htmlFor="image"
                  className="px-2 text-lg font-medium md:text-2xl"
                >
                  Tour Image
                </label>
                <input
                  {...register("image")}
                //   value={updateTour.tourImg}
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  placeholder="Enter Tour image"
                  required
                  className="block w-full py-4 mt-0 text-base font-light bg-eggshell md:text-xl focus:ring-0 focus:border-darkGreen"
                />
              </div> */}
              {/* FORM SUBMIT */}
              <Button
                type="submit"
                className="text-lg border bg-darkGreen border-darkGreen hover:bg-eggshell hover:text-darkGreen"
              >
                Save changes
              </Button>

              {/* <SheetClose asChild>
                <Button
                  type="submit"
                  className="text-lg border bg-darkGreen border-darkGreen hover:bg-eggshell hover:text-darkGreen"
                >
                  Save changes
                </Button>
              </SheetClose> */}
              {/* IMAGE PREVIEW */}
              {/* {selectedImage && (
                <div className="grid items-center gap-0 grid-row-2">
                  <label className="px-2 text-lg font-medium md:text-2xl">
                    Preview
                  </label>
                  <div className="flex items-center justify-center w-full overflow-hidden max-h-40 rounded-xl">
                    <img
                      src={selectedImage}
                      alt="Selected Image"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              )} */}
            </form>
          </div>

          {/* <Separator className="" /> */}

          {/* <SheetFooter>
            <SheetClose asChild>
              <Button
                type="submit"
                className="text-lg border bg-darkGreen border-darkGreen hover:bg-eggshell hover:text-darkGreen"
              >
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default TableForm;
