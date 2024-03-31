import { Separator } from "@/components/ui/separator";

import MosaicLogo from "../../assets/SVGs/Mosaic Logo Dark.svg";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// import { PiContactlessPayment } from "react-icons/pi";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({});

  const onSubmit = async (data: FieldValues) => {
    navigate("/");
    data;
    reset();
  };

  return (
    <div className="min-h-screen px-5 bg-eggshell md:px-20">
      <div className="flex flex-col-reverse md:justify-between md:flex-row">
        {/* Left Container */}
        {/* Personal Details */}
        <div className="md:w-1/2 ">
          {/* Title */}
          <div className="">
            <h2 className="p-2 pt-6 text-3xl font-bold xl:pt-16 shadow-custom">
              Checkout
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 py-6 xl:gap-8"
          >
            {/* Basic Information */}
            <div className="p-2 text-2xl font-semibold shadow-custom">
              Your Basic Information
            </div>

            {/* <div className="flex flex-col justify-between space-x-0 space-y-6 md:space-x-2 md:space-y-0 md:flex-row"> */}
            <div className="grid gap-2 md:gap-16 md:grid-cols-2">
              <div className="w-full ">
                <label
                  htmlFor="fname"
                  className="text-2xl font-medium xl:text-3xl"
                >
                  First Name
                </label>
                <input
                  {...register("fname")}
                  id="fname"
                  type="text"
                  placeholder="First Name"
                  required
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl lg:text-2xl font-light  focus:ring-0 focus:border-darkGreen"
                />
              </div>

              <div className="w-full ">
                <label
                  htmlFor="lname"
                  className="text-2xl font-medium xl:text-3xl"
                >
                  Last Name
                </label>
                <input
                  {...register("lname")}
                  id="lname"
                  type="text"
                  placeholder="Last Name"
                  required
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl lg:text-2xl font-light  focus:ring-0 focus:border-darkGreen"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-2xl font-medium xl:text-3xl"
              >
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="text"
                placeholder="Enter Email"
                required
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl lg:text-2xl font-light  focus:ring-0 focus:border-darkGreen"
              />
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
        </div>
        {/* Right Container */}
        {/* Price Information */}
        <div className="max-h-screen lg:h-[95vh] p-4 xl:py-8 md:w-1/3 shadow-custom smMax:mb-6">
          {/* Logo */}
          <div className="flex justify-center pb-4 xl:pb-8 ">
            <img src={MosaicLogo} alt="Mosaic's Logo" />
          </div>
          {/* Amount Summary */}
          <div className="py-2 space-y-2 text-center xl:py-6 xl:space-y-4">
            <p className="text-2xl font-medium">Total Amount</p>
            <h1 className="text-5xl font-bold xl:text-6xl text-darkGreen">
              Ksh 120,000
            </h1>
            <p className="text-xl">Secure Payment</p>
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
                <div className="text-2xl font-medium">Mount Kenya</div>
                {/* Tour Location */}
                <div className="text-xl">Meru, Kenya</div>
              </div>
              {/* Tour Price */}
              <div className="text-2xl ">Ksh 110,000</div>
            </div>
          </div>

          <Separator className="bg-darkGreen" />
          {/* Price Break Down Section*/}
          <div className="py-4 space-y-4 xl:py-8 xl:space-y-6">
            {/* Subtotal */}
            <div className="flex justify-between">
              <div className="text-2xl font-medium">Sub Total</div>
              {/* Tour Subtotal */}
              <div className="text-2xl ">Ksh 110,000</div>
            </div>

            {/* Service Fee */}
            <div className="flex justify-between">
              <div className="text-2xl font-medium">Service Fees</div>
              {/* Service Fees */}
              <div className="text-2xl ">Ksh 10,000</div>
            </div>
          </div>

          <Separator className="bg-darkGreen" />
          {/* Total */}
          <div className="flex justify-between py-4 md:py-6">
            <div className="text-2xl font-medium">Total</div>
            {/* Total */}
            <div className="text-2xl ">Ksh 120,000</div>
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
