import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { client, imageUrl } from "@/client";
import AnimateWrap from "@/wrapper/AnimateWrap";
import ComponentWrap from "@/wrapper/ComponentWrap";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const coursesQuery = "*[_type == 'courses'] | order(_updatedAt desc)";

    client.fetch(coursesQuery).then((res) => {
      if (res.length === 0) return;

      const data = res.map((item) => {
        return {
          ...item,
          coverImage: imageUrl(item.coverImage).url(),
        };
      });

      setCourses(data);
    });
  }, []);

  return (
    <>
      <h1 className="head-text">
        <span>Learn</span> with me{" "}
      </h1>
      <div className="w-full mt-8 lg:mt-12 xl:mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {courses.map((course, i) => (
          <motion.div
            key={course._id}
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, threshold: 0.4 }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg bg-white shadow-lg cursor-pointer group"
          >
            <img
              src={course.coverImage}
              alt={course.name}
              className="w-full aspect-video object-cover"
            />
            <div className="p-6 transition-brand">
              <h2 className="mb-2 text-2xl font-bold text-secondary">
                {course.name}
              </h2>
              <p className="mb-4 text-gray-600">{course.description}</p>
              <div>
                <h3 className="mb-2 text-base lg:text-lg  xl:text-xl font-medium text-secondary">
                  Course Outline:
                </h3>
                <ul className="mb-4 list-inside list-disc">
                  {course.outline.map((item, index) => (
                    <li key={index} className="text-zinc-900">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium ">
                  Duration: {course.duration}
                </span>
                {course.student && (
                  <span className="font-medium ">
                    Students: {course.student}
                  </span>
                )}
              </div>
              <div className="flex justify-between">
                <span className="text-2xl font-bold text-secondary">
                  ${course.price}
                </span>
                <button className="rounded-full bg-secondary px-4 py-2 text-white hover:bg-secondaryDark focus:outline-none focus:ring-2 focus:ring-secondaryDark focus:ring-offset-2">
                  Enroll now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ComponentWrap(
  AnimateWrap(Courses, "flex-col px-4 lg:px-8 xl:px-12"),
  "courses"
);
