import { client } from "@/client";
import "./style.scss";

import AnimateWrap from "@/Wrapper/AnimateWrap";
import ComponentWrap from "@/Wrapper/componentWrap";
import { useState } from "react";
import { MdEmail, MdLocationPin, MdWhatsapp } from "react-icons/md";

const initialForm = {
  name: "",
  email: "",
  message: "",
};
function index() {
  const [form, setForm] = useState({ ...initialForm });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      ...form,
    };

    client.create(contact).then((res) => {
      setLoading(false);
      setHasSubmitted(true);
      setForm({ ...initialForm });
    });
  };

  return (
    <>
      <h2 className="head-text">Contact Me</h2>
      <div className="w-full md:w-3/5 my-4 lg:my-8 xl:my-12 flex justify-evenly items-center flex-wrap gap-4">
        <div className="w-full lg:w-auto text-sm lg:text-base xl:text-lg py-2 lg:py-2 px-1 lg:px-4 flex flex-row justify-start items-center rounded-xl cursor-pointer bg-secondaryLight transition-all duration-300 ease-in-out gap-2">
          <MdEmail className="size-6 lg:size-8 text-secondary" />
          <a
            href="mailto:test@gmail.com"
            className="font-medium"
            target="_blank"
          >
            test@gmail.com
          </a>
        </div>

        <div className="w-full lg:w-auto text-sm lg:text-base xl:text-lg py-2 lg:py-2 px-1 lg:px-4 flex flex-row justify-start items-center rounded-xl cursor-pointer bg-secondaryLight transition-all duration-300 ease-in-out gap-2">
          <MdWhatsapp className="size-6 lg:size-8 text-secondary" />
          <a
            href="https://api.whatsapp.com/send/?phone=%2B88017123456789&text&type=phone_number&app_absent=0"
            target="_blank"
            className="font-medium"
          >
            +88016123456789
          </a>
        </div>

        <div className="w-full lg:w-auto text-sm lg:text-base xl:text-lg py-2 lg:py-2 px-1 lg:px-4 flex flex-row justify-start items-center rounded-xl cursor-pointer bg-secondaryLight transition-all duration-300 ease-in-out gap-2">
          <MdLocationPin className="size-6 lg:size-8 text-secondary" />
          <a
            target="_blank"
            href="https://maps.app.goo.gl/yNDJJ7DfcUQ2uSos8"
            className="font-medium"
          >
            Road 1, House 1, Dhaka, Bangladesh
          </a>
        </div>
      </div>

      {!hasSubmitted ? (
        <div className="w-full lg:my-1 lg:w-3/5  flex justify-center items-center flex-col mx-8 my-4  gap-4">
          <div className="flex justify-center items-center w-full rounded-xl cursor-pointer bg-secondaryLight transition-all duration-300 ease-in-out">
            <input
              type="text"
              className="p-text w-full p-3 border-none rounded-lg bg-secondaryLight text-secondary outline-none focus:ring-1 ring-secondary"
              placeholder="Enter Your Full Name"
              value={form.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center items-center w-full rounded-xl cursor-pointer bg-secondaryLight transition-all duration-300 ease-in-out ">
            <input
              type="email"
              className="p-text w-full p-3 border-none rounded-lg bg-secondaryLight text-secondary outline-none focus:ring-1 ring-secondary"
              placeholder="Enter Your Email Address"
              value={form.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center items-center w-full rounded-xl cursor-pointer bg-secondaryLight transition-all duration-300 ease-in-out ">
            <textarea
              type="email"
              className="resize-none p-text w-full p-3 border-none rounded-lg bg-secondaryLight text-secondary outline-none focus:ring-1 ring-secondary"
              placeholder="Enter Your Message"
              value={form.message}
              name="message"
              onChange={handleChange}
              rows={5}
            />
          </div>
          <button
            className="p-text px-8 py-4 mt-8 cursor-pointer rounded-lg border-none outline-none bg-secondary text-white hover:bg-secondaryDark transition-all duration-300 ease-in-out"
            type="button"
            onClick={handleSubmit}
          >
            {loading ? "sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h2 className="head-text mt-8">Thank you for contacting me</h2>
        </div>
      )}
    </>
  );
}
export default ComponentWrap(
  AnimateWrap(index, "flex-col"),
  "contact",
  "bg-white"
);
