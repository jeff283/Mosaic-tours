// const ContactUs = () => {
//   return <div>ContactUs</div>;
// };

// export default ContactUs;

import { FieldValues, useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm({});

  const onSubmit = async (data: FieldValues) => {
    data;
    reset();
  };

  return (
    <div className="w-full h-full">
      <div className="custom-shadow px-8 md:px-20  rounded-[40px]  py-2">
        <h2 className="text-4xl font-semibold text-darkGreen">Contact Us</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 py-6"
        >
          <div className="flex flex-col justify-between space-x-0 space-y-6 md:space-x-2 md:space-y-0 md:flex-row">
            <div>
              <label
                htmlFor="fname"
                className="text-2xl font-medium md:text-3xl"
              >
                First Name
              </label>
              <input
                {...register("fname")}
                id="fname"
                type="text"
                placeholder="First Name"
                required
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl md:text-2xl font-light  focus:ring-0 focus:border-darkGreen"
              />
            </div>

            <div>
              <label
                htmlFor="lname"
                className="text-2xl font-medium md:text-3xl"
              >
                Last Name
              </label>
              <input
                {...register("lname")}
                id="lname"
                type="text"
                placeholder="Last Name"
                required
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl md:text-2xl font-light  focus:ring-0 focus:border-darkGreen"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="phone"
                className="text-2xl font-medium md:text-3xl"
              >
                Phone Number
              </label>
              <input
                {...register("phone")}
                id="phone"
                type="text"
                placeholder="Enter Phone Number"
                required
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl md:text-2xl font-light  focus:ring-0 focus:border-darkGreen"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="email"
                className="text-2xl font-medium md:text-3xl"
              >
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="text"
                placeholder="Enter Email"
                required
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl md:text-2xl font-light  focus:ring-0 focus:border-darkGreen"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="message"
                className="text-2xl font-medium md:text-3xl"
              >
                Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                name="message"
                rows={4}
                cols={40}
                placeholder="Enter Message"
                required
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-lightGreen bg-eggshell text-xl md:text-2xl font-light  focus:ring-0 focus:border-darkGreen"
              ></textarea>
            </div>
          </div>

          <div className="items-center">
            <button className="px-12 py-1.5 text-2xl font-semibold rounded-lg border-2 border-darkGreen text-eggshell bg-darkGreen hover:text-darkGreen hover:bg-eggshell">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
