import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Typewrite = ({
  textList,
  fadeDuration = 0.25,
  fadeDelay = 3,
  letterDelay = 0.025,
  boxFadeDuration = 0.125,
  swapDelay = 0.5,
}) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((pv) => (pv + 1) % textList.length);
    }, (fadeDelay + swapDelay) * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <span className="">
        {textList[textIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: fadeDelay,
              duration: fadeDuration,
              ease: "easeInOut",
            }}
            key={`${textIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * letterDelay,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * letterDelay,
                times: [0, 0.1, 1],
                duration: boxFadeDuration,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-secondary"
            />
          </motion.span>
        ))}
      </span>
    </>
  );
};

export default Typewrite;
