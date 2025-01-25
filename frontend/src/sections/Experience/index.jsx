import React, { useEffect, useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./style.scss";

import { client } from "@/client";
import { motion } from "framer-motion";

import AnimateWrap from "@/Wrapper/AnimateWrap";
import ComponentWrap from "@/Wrapper/componentWrap";

const animationVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function index() {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const experienceQuery = "*[_type == 'experiences'] | order(year asc)";
    const educationQuery = "*[_type == 'education'] | order(year asc)";

    client.fetch(experienceQuery).then((res) => {
      if (res.length === 0) return;
      setExperience(res);
    });

    client.fetch(educationQuery).then((res) => {
      if (res.length === 0) return;
      setEducation(res);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>background</span> & <span>experience</span>
      </h2>

      <div className="w-full  flex  flex-col lg:flex-row gap-4">
        <div className="w-full px-2 md:px-4 lg:px-8 flex flex-col  mt-12 gap-4  justify-start items-center  ">
          <h2 className="section-subheading">
            <FaBriefcase className="text-secondary text-lg lg:text-2xl" />
            Work Experience
          </h2>
          <motion.div className="">
            {experience.map((exp, index) => (
              <motion.div
                variants={animationVariants}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                transition={{ duration: 0.3, delay: 0.3 * index }}
                viewport={{ once: true }}
                className="relative pl-8 sm:pl-36 py-6 group  "
                key={exp._id}
              >
                <div className="flex flex-col sm:flex-row items-start mb-1 ">
                  <div className="group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5 origin-top overflow-hidden" />
                  <time className="sm:absolute -left-8 translate-y-0.5 inline-flex items-center justify-center text-base font-semibold uppercase  mb-3 sm:mb-0 text-secondaryDark  rounded-full text-right">
                    {exp.year}
                  </time>
                  <div className="text-xl font-bold text-slate-900">
                    {exp.role}
                  </div>
                </div>
                <div className="text-slate-500">{exp.company}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="w-full px-2 md:px-4 lg:px-8 flex flex-col  mt-12 gap-4  justify-start items-center">
          <h2 className="section-subheading">
            <FaGraduationCap className="text-secondary text-lg lg:text-2xl" />
            Academic Background
          </h2>
          <motion.div className="">
            {education.map((edu, index) => (
              <motion.div
                variants={animationVariants}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                transition={{ duration: 0.3, delay: 0.3 * index }}
                viewport={{ once: true }}
                className="relative pl-8 sm:pl-20 py-6 group "
                key={edu._id}
              >
                <div className="flex flex-col sm:flex-row items-start mb-1 ">
                  <div className="group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[3.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[3.5rem] after:-translate-x-1/2 after:translate-y-1.5" />
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-base font-semibold uppercase  mb-3 sm:mb-0 text-secondaryDark  rounded-full text-right">
                    {edu.year}
                  </time>
                  <div className="text-xl font-bold text-zinc-900">
                    {edu.degree}
                  </div>
                </div>
                <div className="text-slate-500">{edu.institution}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ComponentWrap(
  AnimateWrap(index, "flex-col"),
  "experience",
  "bg-white"
);
