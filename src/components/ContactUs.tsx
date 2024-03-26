// const ContactUs = () => {
//   return <div>ContactUs</div>;
// };

// export default ContactUs;

import { FieldValues, useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    data;
    reset();
  };

  return (
    <div className="h-full w-full">
      <div className="custom-shadow px-8 md:px-20  rounded-[40px]  py-2">
        <h2 className="font-semibold text-4xl text-darkGreen">Contact Us</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 py-6"
        >
          <div className="space-y-6 space-x-0 md:space-x-2 md:space-y-0 flex flex-col justify-between   md:flex-row">
            <div>
              <label htmlFor="fname">First Name</label>
              <input
                {...register("fname")}
                id="fname"
                type="text"
                placeholder="First Name"
                required
              />
            </div>

            <div>
              <label htmlFor="lname">Last Name</label>
              <input
                {...register("lname")}
                id="lname"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                {...register("phone")}
                id="phone"
                type="text"
                placeholder="Enter Phone Number"
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                id="email"
                type="text"
                placeholder="Enter Email"
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message")}
                id="message"
                name="message"
                rows={4}
                cols={40}
                placeholder="Enter Message"
                required
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
