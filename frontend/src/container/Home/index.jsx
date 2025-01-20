import { images } from "@/constants";
import ComponentWrap from "@/Wrapper/ComponentWrap";
import { motion } from "framer-motion";
import React from "react";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const flutterImages = [images.photoshop, images.figma, images.illustrator];

const Home = () => {
  return (
    <div className="flex justify-center items-center relative bg-[url('/bgIMG.png')] bg-cover bg-center bg-repeat flex-1 w-full h-full flex-col pt-24 lg:pt-28 px-4 pb-8 lg:px-2 lg:pb-0 lg:flex-row">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-[0.65] flex justify-start items-start flex-col h-full w-full selection:bg-none"
      >
        <div className="w-full flex justify-start items-start lg:justify-end lg:items-end flex-col">
          <motion.div className="py-4 px-8 border-white border-r-[15] flex-row w-auto shadow-floatCard  flex justify-center items-center">
            <span className="text-3xl ">👋</span>
            <div className="ml-5">
              <p className="text-sm lg:text-base text-left text-gray  leading-6">
                Hello, I'm{" "}
              </p>
              <h1 className="text-3xl lg:4xl font-extrabold  text-black uppercase">
                Imrul Kayes
              </h1>
            </div>
          </motion.div>
          <div className="py-4 px-8 mt-8 border-white border-r-[15] flex-col w-auto shadow-floatCard  flex justify-center items-center">
            <p className="text-sm lg:text-base text-right uppercase lg:text-left text-secondary font-bold  leading-6">
              Graphic Designer
            </p>
            <p className="text-sm lg:text-base text-right uppercase lg:text-left text-secondary font-bold  leading-6">
              Web Designer
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex-1 h-100 flex justify-end items-end relative mt-8 mx-0 sm:mt-0 sm:mx-4 "
      >
        <img
          src={images.profile}
          alt="profileImg"
          className="w-full object-contain z-10"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_bg_circle"
          className="absolute top-0 bottom-0 right-0 z-0 w-full h-[90%] animate-spin-slow"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="lg:flex-[0.75] flex-wrap lg:flex-nowrap w-full flex lg:flex-col justify-center lg:justify-evenly items-start h-full ml-4 "
      >
        {flutterImages.map((img, index) => (
          <motion.div
            key={`circle-${index}`}
            className={`flex justify-center items-center m-1 lg:m-0 bg-white rounded-full shadow-floatCard  cursor-pointer 
            [&:nth-child(1)]:w-[50px] [&:nth-child(1)]:h-[50px] 
            sm:[&:nth-child(1)]:w-[100px] sm:[&:nth-child(1)]:h-[100px]
            md:[&:nth-child(1)]:w-[120px] md:[&:nth-child(1)]:h-[120px]
            
            [&:nth-child(2)]:w-[100px] [&:nth-child(2)]:h-[100px] [&:nth-child(2)]:m-[1.25rem]
            sm:[&:nth-child(2)]:w-[150px] sm:[&:nth-child(2)]:h-[150px] sm:[&:nth-child(2)]:m-[1.75rem]
            md:[&:nth-child(2)]:w-[180px] md:[&:nth-child(2)]:h-[180px] md:[&:nth-child(2)]:m-[2rem]
    
            [&:nth-child(3)]:w-[60px] [&:nth-child(3)]:h-[60px]
            sm:[&:nth-child(3)]:w-[70px] sm:[&:nth-child(3)]:h-[70px]
            md:[&:nth-child(3)]:w-[90px] md:[&:nth-child(3)]:h-[90px]`}
            initial={{ scale: 1 }}
            animate={{
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 3.14159,
              delay: index * 0.54321,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <img src={img} alt="circle  " className="size-3/5" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ComponentWrap(Home, "home");
