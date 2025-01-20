import React, { useEffect, useState } from "react";
import "./style.scss";

import { client, imageUrl } from "@/client";

import AnimateWrap from "@/Wrapper/AnimateWrap";
import ComponentWrap from "@/Wrapper/componentWrap";

import { motion } from "framer-motion";

function index() {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const skillsQuery = "*[_type == 'skills']";
    const experienceQuery = "*[_type == 'experiences']";

    client.fetch(skillsQuery).then((res) => {
      if (res.length === 0) return;
      const skills = res.map((item) => ({
        name: item.name?.trim(),
        bgColor: item.bgColor?.trim(),
        icon: imageUrl(item.icon)?.url(),
      }));

      setSkills(skills);
    });
    client.fetch(experienceQuery).then((res) => {
      if (res.length === 0) return;
      // const experience = res.map((item) => ({
      //   name: item.name?.toLowerCase().trim(),
      //   company: item.company?.toLowerCase().trim(),
      //   desc: item.desc?.toLowerCase().trim(),
      // }));

      setExperience(res);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="w-full  sm:w-4/5 flex-col md:flex-row  lg:w-full mt-12 flex lg:px-12  justify-center items-center  ">
        <motion.div className="flex-1 flex flex-wrap justify-center items-center md:justify-start md:items-start md:mr-20 lg:mr-0 lg:justify-center lg:items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name + index}
              whileInView={{ opacity: [0, 1], transition: { duration: 0.5 } }}
              className="flex-col text-center m-4  transition-all duration-300 ease-in-out flex justify-center items-center"
            >
              <div
                style={{ backgroundColor: skill.bgColor }}
                className="flex justify-center items-center size-16 xl:size-20 rounded-full bg-secondaryLight hover:shadow-floatCard"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-1/2 h-1/2"
                />
              </div>
              <p className="p-text font-medium mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex-1 flex justify-start items-start flex-col mt-8 lg:mt-0">
          {experience.map((exp, index) => (
            <motion.div
              className="w-full flex flex-row justify-start items-start mx-4  py-0"
              key={exp.year}
            >
              <div className="w-1/3">
                <p className="bold-text font-extrabold text-secondary">
                  {exp.year}
                </p>
              </div>
              <motion.div className="flex-1">
                {exp?.works?.map((exp, index) => (
                  <>
                    <motion.div
                      key={exp.name}
                      whileInView={{
                        opacity: [0, 1],
                        transition: { duration: 0.5 },
                      }}
                      className="flex flex-col justify-start items-start mb-4 cursor-pointer"
                      data-tip
                      data-for={exp.name}
                    >
                      <h4 className="bold-text font-medium">{exp.name}</h4>
                      <p className="p-text text-gray font-normal mt-0.5">
                        {exp.company}
                      </p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default ComponentWrap(
  AnimateWrap(index, "flex-col"),
  "skills",
  "bg-white"
);
