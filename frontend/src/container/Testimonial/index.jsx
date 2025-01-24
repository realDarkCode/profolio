import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./style.scss";

import { client, imageUrl } from "@/client";
import AnimateWrap from "@/Wrapper/AnimateWrap";
import ComponentWrap from "@/Wrapper/componentWrap";

function index() {
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const testimonialsQuery = "*[_type == 'testimonials']";
    client.fetch(testimonialsQuery).then((res) => {
      if (res.length === 0) return;
      const testimonials = res.map((item) => ({
        name: item.name?.trim(),
        company: item.company?.trim(),
        feedback: item.feedback?.trim(),
        imgUrl: imageUrl(item.imgurl)?.url(),
      }));

      setTestimonials(testimonials);
    });
  }, []);

  const testimonial = testimonials[testimonialIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <div className="w-full flex-col sm:w-3/5 min-h-60 lg:min-h-80 bg-white p-8 rounded-2xl shadow-floatCard transition-all ease-in-out duration-300 flex justify-center items-center sm:flex-col md:flex-row">
            <img
              src={testimonial.imgUrl}
              alt={testimonial.name}
              className="w-32 h-32 sm:w-32 sm:h-32  lg:w-40 lg:h-40 xl:size-60  rounded-full object-cover "
            />
            <div className="flex-1 w-full py-4 sm:py-0 px-8 text-left flex flex-col justify-around items-start">
              <p className="p-text lg:text-lg  text-black ">
                {testimonial.feedback}
              </p>
              <div>
                <h4 className="bold-text  font-semibold text-secondary mt-8">
                  {testimonial.name}
                </h4>
                <h5 className="p-text font-medium text-gray mt-1">
                  {testimonial.company}
                </h5>
              </div>
            </div>
          </div>
          <div className="flex-row mt-4 flex justify-center items-center gap-4">
            <button
              className="flex justify-center items-center size-12 rounded-full hover:bg-secondary group bg-white transition-all ease-in-out duration-300"
              onClick={() =>
                setTestimonialIndex(
                  testimonialIndex === 0
                    ? testimonials.length - 1
                    : testimonialIndex - 1
                )
              }
            >
              <HiChevronLeft className="size-6 text-secondary  group-hover:text-white" />
            </button>
            <button
              className="flex justify-center items-center size-12 rounded-full hover:bg-secondary group bg-white transition-all ease-in-out duration-300"
              onClick={() =>
                setTestimonialIndex(
                  testimonialIndex === testimonials.length - 1
                    ? 0
                    : testimonialIndex + 1
                )
              }
            >
              <HiChevronRight className="size-6 text-secondary  group-hover:text-white" />
            </button>
          </div>
        </>
      )}
    </>
  );
}
export default ComponentWrap(
  AnimateWrap(index, "flex-col"),
  "testimonials",
  "bg-secondaryLight"
);
