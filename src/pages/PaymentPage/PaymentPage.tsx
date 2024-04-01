import { Separator } from "@/components/ui/separator";
import MosaicLogoLight from "../../assets/SVGs/Mosaic Logo Light.svg";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaLock } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Tour from "@/Interfaces/Tour";
import { NavLink, useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithPopup,
  User,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth, db, googleProvider } from "@/config/firebase";
import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
// import { DevTool } from "@hookform/devtools";
import Payment from "@/Interfaces/Payment";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({});
  const [user, setUser] = useState<User>({} as User);
  const [loginError, setLoginError] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [userUid, setUserUid] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
      if (currentUser.displayName) {
        const [firstName, lastName] = currentUser.displayName.split(" ");
        setFname(firstName);
        setLname(lastName);
      }
      if (currentUser.email) {
        setEmail(currentUser.email);
      }
      if (currentUser.uid) {
        setUserUid(currentUser.uid);
      }
    }
  });

  const handleGoogleSignIn = async () => {
    try {
      const results = await signInWithPopup(auth, googleProvider);
      const additionalUserInfo = getAdditionalUserInfo(results);
      if (additionalUserInfo) {
        const isNewUser = additionalUserInfo.isNewUser;

        if (isNewUser) {
          console.log("New user signed in!");
          // Handle new user logic, e.g., store additional information in your database
        } else {
          console.log("Existing user signed in!");
          // Handle existing user logic, e.g., redirect to a different page or fetch stored data
        }
      }
    } catch (error) {
      setLoginError(
        "We could not Sign you In at the Moment. Please try again later."
      );
      console.error(error);
    }
  };

  const paymentCollectionRef = collection(db, "mosaicPayments");

  // Firebase Create

  const createPayment = (payment: Payment) => {
    addDoc(paymentCollectionRef, payment).catch((err) => {
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
        .then(() => {})
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.error("No Tour ID was provided");
    }
  };

  const tourData = location.state?.tourData as Tour;
  let totalPrice = 0,
    subTotal = 0,
    serviceFee = 0;

  if (tourData) {
    totalPrice = tourData.price;
    subTotal = totalPrice * 0.9;
    serviceFee = totalPrice - subTotal;
  } else {
    navigate("/");
  }

  const onSubmit = async (data: FieldValues) => {
    if (tourData.id) {
      const newPayment: Payment = {
        userID: userUid,
        userName: `${fname} ${lname}`,
        tourID: tourData.id,
        amount: tourData.price,
        date: serverTimestamp(),
      };
      createPayment(newPayment);
    }
    data;
    const updatedParticipants = [...tourData.participants, userUid];
    const updatedTour: Tour = {
      ...tourData,
      participants: updatedParticipants,
    };
    updateDbTour(updatedTour);
    reset();
    navigate("/");
  };

  return (
    <div className="min-h-screen px-5 bg-eggshell md:px-20">
      <div className="flex flex-col-reverse md:justify-between md:flex-row">
        {/* Left Container */}
        {/* Personal Details */}
        {/* <div className=" md:w-1/2"></div> */}

        <div className=" md:w-1/2">
          {/* Title */}
          <div className="">
            <h2 className="p-2 pt-6 text-3xl font-bold xl:pt-16 shadow-custom">
              Checkout
            </h2>
          </div>

          {Object.keys(user).length > 0 ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3 py-4 xl:gap-8"
            >
              {/* Basic Information */}
              <div className="p-2 text-2xl font-semibold shadow-custom">
                Your Basic Information
              </div>

              {/* <div className="flex flex-col justify-between space-x-0 space-y-6 md:space-x-2 md:space-y-0 md:flex-row"> */}
              <div className="grid gap-2 md:gap-16 md:grid-cols-2">
                <div className="w-full ">
                  <div className="text-2xl font-medium xl:text-3xl">
                    First Name
                  </div>
                  <div className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl lg:text-2xl font-light  focus:ring-0 focus:border-darkGreen">
                    {fname}
                  </div>
                </div>

                <div className="w-full ">
                  <div className="text-2xl font-medium xl:text-3xl">
                    Last Name
                  </div>
                  <div className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl lg:text-2xl font-light  focus:ring-0 focus:border-darkGreen">
                    {lname}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-2xl font-medium xl:text-3xl">Email</div>
                <div className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl lg:text-2xl font-light  focus:ring-0 focus:border-darkGreen">
                  {email}
                </div>
              </div>

              {/* Payment Information */}
              <div className="p-2 text-2xl font-semibold shadow-custom">
                Your Payment Information
              </div>

              <div>
                <label
                  htmlFor="cardNumber"
                  className="text-2xl font-medium xl:text-3xl"
                >
                  Credit Card
                </label>
                <input
                  {...register("cardNumber")}
                  id="cardNumber"
                  type="text"
                  placeholder="Enter Card Number"
                  required
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl lg:text-2xl font-light  focus:ring-0 focus:border-darkGreen"
                />
              </div>

              <div className="flex flex-col justify-between space-x-0 space-y-6 md:space-x-2 md:space-y-0 md:flex-row">
                <div>
                  <label
                    htmlFor="expiryDate"
                    className="text-2xl font-medium xl:text-3xl"
                  >
                    Expiry Date
                  </label>
                  <input
                    {...register("expiryDate")}
                    id="expiryDate"
                    type="text"
                    placeholder="02/27"
                    required
                    className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl lg:text-2xl font-light  focus:ring-0 focus:border-darkGreen"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cvv"
                    className="text-2xl font-medium xl:text-3xl"
                  >
                    CVX/CVV
                  </label>
                  <input
                    {...register("cvv")}
                    id="cvv"
                    type="text"
                    placeholder="258"
                    required
                    className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl lg:text-2xl font-light  focus:ring-0 focus:border-darkGreen"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="py-6 text-2xl border md:text-3xl bg-darkGreen border-darkGreen hover:bg-eggshell hover:text-darkGreen"
              >
                Pay
              </Button>
            </form>
          ) : (
            <div className="flex flex-col gap-3 py-4 ">
              <div className="p-2 text-2xl font-semibold shadow-custom">
                Sign In
              </div>
              <p className="text-lg text-lightGray">Please Sign in Below</p>
              <div className="px-1 py-2">
                <Button
                  className="p-6 bg-darkGreen"
                  onClick={handleGoogleSignIn}
                >
                  <FaGoogle size={32} />
                  <div className="pl-4 text-xl">Sign In With Google</div>
                </Button>
              </div>
              {loginError && (
                <div className="text-lg font-light text-red-400">
                  {loginError}
                </div>
              )}
            </div>
          )}
        </div>
        {/* Right Container */}
        {/* Price Information */}
        <div className="max-h-screen lg:h-[95vh] p-4 xl:py-8 md:w-1/3 shadow-custom smMax:mb-6">
          {/* Logo */}
          <div className="flex justify-center pb-4 xl:pb-8 ">
            <NavLink to="/">
              <img src={MosaicLogoLight} alt="Mosaic's Logo" />
            </NavLink>
          </div>
          {/* <DevTool control={control} placement="top-right" /> */}

          {/* Amount Summary */}
          <div className="py-2 space-y-2 text-center xl:py-6 xl:space-y-4">
            <p className="text-2xl font-medium">Total Amount</p>
            <h1 className="text-5xl font-bold lg:text-4xl xl:text-6xl text-darkGreen">
              {/* Ksh{tourData.price} */}
              {totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "KES",
              })}
              {/* Ksh 120,000 */}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <FaLock />
              <p className="text-xl">Secure Payment</p>
            </div>
          </div>
          <Separator className="bg-darkGreen" />
          {/* Order Summary */}
          <div className="py-2 xl:py-4">
            <p className="pb-4 text-2xl font-medium xl:pb-6 text-lightGray">
              Order Summary
            </p>
            {/* Order Summary Container */}
            <div className="flex justify-between pb-4">
              <div className="space-y-2 xl:space-y-4">
                {/* Tour Name */}
                <div className="text-2xl font-medium lg:text-xl xl:text-3xl">
                  {tourData.tourName}
                </div>
                {/* Tour Location */}
                <div className="text-xl lg:text-lg xl:text-2xl">
                  {tourData.location}
                </div>
              </div>
              {/* Tour Price */}
              <div className="text-2xl lg:text-xl xl:text-3xl ">
                {subTotal.toLocaleString("en-US", {
                  style: "currency",
                  currency: "KES",
                })}
              </div>
            </div>
          </div>

          <Separator className="bg-darkGreen" />
          {/* Price Break Down Section*/}
          <div className="py-4 space-y-4 xl:py-8 xl:space-y-6">
            {/* Subtotal */}
            <div className="flex justify-between">
              <div className="text-2xl font-medium lg:text-xl xl:text-3xl">
                Sub Total
              </div>
              {/* Tour Subtotal */}
              <div className="text-2xl lg:text-xl xl:text-3xl">
                {subTotal.toLocaleString("en-US", {
                  style: "currency",
                  currency: "KES",
                })}
              </div>
            </div>

            {/* Service Fee */}
            <div className="flex justify-between">
              <div className="text-2xl font-medium lg:text-xl xl:text-3xl">
                Service Fees
              </div>
              {/* Service Fees */}
              <div className="text-2xl lg:text-xl xl:text-3xl">
                {serviceFee.toLocaleString("en-US", {
                  style: "currency",
                  currency: "KES",
                })}
              </div>
            </div>
          </div>

          <Separator className="bg-darkGreen" />
          {/* Total */}
          <div className="flex justify-between py-4 md:py-6">
            <div className="text-2xl font-medium lg:text-xl xl:text-3xl">
              Total
            </div>
            {/* Total */}
            <div className="text-2xl lg:text-xl xl:text-3xl ">
              {totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "KES",
              })}
            </div>
          </div>

          {/* Payment Methods */}
          {/* <div className="flex justify-between px-2 pt-8 smMax:hidden">
            <PiContactlessPayment size={68} />
            <PiContactlessPayment size={68} />
            <PiContactlessPayment size={68} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
