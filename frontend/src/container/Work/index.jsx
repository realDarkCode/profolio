import React, { useEffect, useState } from "react";
import "./style.scss";

import { client, imageUrl } from "@/client";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import AnimateWrap from "@/Wrapper/AnimateWrap";
import ComponentWrap from "@/Wrapper/componentWrap";
const initialAnimate = {
  y: 0,
  opacity: 1,
};

function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [workList, setWorkList] = useState([]);
  const [filteredWorkList, setFilteredWorkList] = useState([]);

  const [categories, setCategories] = useState(["all"]);
  const [animateCard, setAnimateCard] = useState({ ...initialAnimate });

  useEffect(() => {
    const query = "*[_type == 'works']";

    let categories = [];

    client.fetch(query).then((res) => {
      if (res.length === 0) return;
      const data = res.map((item) => {
        const work = {
          title: item.title?.toLowerCase(),
          description: item.description?.toLowerCase(),
          imgUrl: imageUrl(item.imgUrl).url(),
          tags:
            item.tags?.reduce((s, a) => {
              if (a) s.push(a.toLowerCase().trim());
              return s;
            }, []) || [],
          projectLink: item.projectLink,
          codeLink: item.codeLink,
        };

        categories.push(work.tags);
        return work;
      });

      categories = ["all", ...new Set(categories.flat())];

      setCategories(categories);

      setWorkList(data);
      setFilteredWorkList(data);
    });
  }, []);

  const handleWorkFilter = (category) => {
    setActiveFilter(category);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      if (category === "all") {
        setFilteredWorkList(workList);
      } else {
        const filtered = workList.filter((work) =>
          work.tags.includes(category)
        );
        setFilteredWorkList(filtered);
      }
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        {" "}
        My <span> Creative</span> Work Section
      </h2>
      <div className="flex flex-row  justify-center md:justify-start items-center flex-wrap gap-4 mt-16 mx-0 mb-8">
        {categories.map((category, index) => (
          <div
            key={`Work ` + index}
            onClick={() => handleWorkFilter(category.toLowerCase())}
            className={`px-4 py-2 bg-white rounded-md lg:rounded-lg font-bold text-black cursor-pointer transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-white flex justify-center items-center p-text capitalize ${
              activeFilter === category ? "!bg-secondary !text-white" : ""
            }`}
          >
            {category}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex justify-center items-center flex-wrap gap-4  lg:gap-6"
      >
        {!filteredWorkList.length && (
          <h2 className="head-text text-lg text-gray">No Work Found</h2>
        )}
        {filteredWorkList.map((work, index) => (
          <div
            className="flex justify-center items-center flex-col w-full md:w-64 lg:w-80 xl:w-96 rounded-md lg:rounded-xl p-4 bg-white text-black  cursor-pointer transition-all duration-300 ease-in-out hover:shadow-floatCard group"
            key={"work-" + index}
          >
            <div className="relative w-full flex justify-center items-center">
              <img
                src={work.imgUrl}
                alt={work.title}
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black/50 rounded-lg  transition-all duration-300 ease  flex justify-center items-center gap-4 lg:gap-8 opacity-0 group-hover:opacity-100">
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="size-12 rounded-full bg-black/50 text-white font-bold cursor-pointer transition-all duration-300 ease flex justify-center items-center"
                  >
                    <AiFillEye className="w-1/2 h-1/2 text-white" />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="size-12 rounded-full bg-black/50 text-white font-bold cursor-pointer transition-all duration-300 ease flex justify-center items-center"
                  >
                    <AiFillGithub className="w-1/2 h-1/2 text-white" />
                  </motion.div>
                </a>
              </div>
            </div>

            <div className="p-2 w-full relative flex justify-center items-center flex-col">
              <h4 className="bold-text mt-4 leading-6 capitalize">
                {" "}
                {work.title}
              </h4>
              <p className="p-text mt-2.5">{work.description}</p>
              <div className="flex justify-center items-center gap-4 mt-2.5">
                {work.tags.map((tag, index) => (
                  <p
                    key={`tag-${index}`}
                    className="p-text text-sm bg-gray/25 text-secondary px-2 py-1 rounded-md"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default ComponentWrap(
  AnimateWrap(Work, "flex-col"),
  "work",
  "bg-secondaryLight"
);
