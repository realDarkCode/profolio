import { client, imageUrl } from "@/client";
import { images } from "@/constants";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./style.scss";
const initialState = [
  {
    title: "Graphic Designer",
    description: "I'm a professional graphic designer",
    imgUrl: images.about01,
  },
  {
    title: "Web Designer",
    description: "I'm a professional web designer",
    imgUrl: images.about02,
  },
  {
    title: "UI/UX Designer",
    description: "I'm a professional UI/UX designer",
    imgUrl: images.about03,
  },
  {
    title: "Photographer",
    description: "I'm a professional photographer",
    imgUrl: images.about04,
  },
];
function index() {
  const [aboutList, setAboutList] = useState([...initialState]);
  useEffect(() => {
    const query = "*[_type == 'abouts']";
    client.fetch(query).then((res) => {
      if (res.length === 0) return;
      const data = res.map((item) => ({
        title: item.title,
        description: item.description,
        imgUrl: imageUrl(item.imgUrl).url(),
      }));

      setAboutList(data);
    });
  }, []);
  return (
    <div className="flex-1 w-full flex-col mt-8">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-black uppercase">
        {" "}
        I know that <span className="text-secondary">Good Design</span> <br />
        means <span className="text-secondary">Good business</span>
      </h2>
      <div className="flex justify-center items-start flex-wrap mt-8 gap-4 md:gap-8 lg:gap-12">
        {aboutList.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            key={`about-${index}-${about.title}`}
            className="flex justify-start items-start flex-col w-44 lg:w-60 xl:w-64 2xl:w-80 cursor-pointer"
          >
            <img
              src={about.imgUrl}
              alt={about.title}
              className="w-full rounded-2xl object-cover"
            />
            <h2 className="bold-text mt-5 ">{about.title}</h2>
            <p className="p-text mt-2">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default index;
