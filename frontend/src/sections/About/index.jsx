import { client, imageUrl } from "@/client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./style.scss";

import AnimateWrap from "@/wrapper/AnimateWrap";
import ComponentWrap from "@/wrapper/ComponentWrap";

function index() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = "*[_type == 'skills']";

    client.fetch(skillsQuery).then((res) => {
      if (res.length === 0) return;
      const skills = res.map((item) => ({
        name: item.name?.trim(),
        bgColor: item.bgColor?.trim(),
        icon: imageUrl(item.icon)?.url(),
        progress: item.progress || 100,
      }));

      setSkills(skills);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">
        Let me <span>introduce</span> myself
      </h2>

      <div className="w-full px-2 md:px-4 lg:px-8 flex flex-col-reverse lg:flex-row mt-12 gap-4  justify-center items-center lg:divide-x-2 divide-secondaryDark divide-dashed">
        <div className="w-full">
          <h2 className="col-span-full section-subheading text-left ">
            Technologies I use
          </h2>
          <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5  lg:grid-cols-4 gap-4 lg:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name + index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, amount: 0.4 }}
                className="transition-brand flex flex-col justify-center items-center gap-2 cursor-pointer  group"
              >
                <div className="relative">
                  <div
                    style={{ backgroundColor: skill.bgColor }}
                    className="flex justify-center items-center shrink-0 size-16 xl:size-20 rounded-full bg-secondaryLight hover:shadow-floatCard relative z-10 group-hover:scale-[0.85] transition-brand"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-1/2 h-1/2  group-hover:opacity-0"
                    />
                    <span className="absolute flex  opacity-0 group-hover:opacity-100  justify-center items-center w-full h-full rounded-full ">
                      {skill.progress + "%"}
                    </span>
                  </div>

                  <div className="absolute inset-0  transition-brand rounded-full scale-110  ">
                    <svg
                      className="size-full -rotate-90"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-green-200 "
                        strokeWidth="2"
                      ></circle>

                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-green-600 "
                        strokeWidth="2"
                        strokeDasharray="100"
                        strokeDashoffset={100 - skill.progress}
                        strokeLinecap="round"
                      ></circle>
                    </svg>
                  </div>
                </div>
                <p className="p-text font-medium selection:bg-none">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
          viewport={{ amount: 0.4, once: true }}
          className="w-full px-4"
        >
          <h2 className="section-subheading "> About Me </h2>
          <p className="p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            similique at odio quibusdam alias, velit dolore fuga ex deleniti!
            Possimus, ullam. Ipsam eos hic corrupti eum illo recusandae minus
            doloremque! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Incidunt, delectus quia! Veritatis molestiae distinctio, ipsa
            fugit provident esse dicta ipsam dolor magni impedit laudantium
            quam, dignissimos quaerat. Minus, tempora vitae.
          </p>
          <p className="p-text mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            delectus quia! Veritatis molestiae distinctio, ipsa fugit provident
            esse dicta ipsam dolor magni impedit laudantium quam, dignissimos
            quaerat. Minus, tempora vitae.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default ComponentWrap(
  AnimateWrap(index, "flex-col"),
  "about",
  "bg-white"
);
