import { useRef } from "react";
import { motion } from "framer-motion";
import { Statistic as StatisticData } from "@/constants";

function Statistic() {
  // initial variable
  const ref = useRef(null);

  return (
    <section
      id="hero"
      className="bg-primary text-white h-fit w-full px-4 py-10 xs:p-8 sm:p-10 md:px-14 md:py-10 lg:py-18 lg:px-32 xl:py-20 2xl:py-20 2xl:px-44 flex flex-wrap gap-10 xl:gap-18 2xl:gap-20 justify-center items-center"
    >
      {StatisticData.map((stat) => (
        <motion.div
          ref={ref}
          key={stat.title}
          className="flex flex-col gap-10 md:gap-3 min-w-56 sm:max-w-[50%] item items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center text-center gap-1 md:gap-3">
            <h1 className="font-semibold text-lg xs:text-2xl lg:text-3xl xl:text-4xl">
              {stat.value}
            </h1>
            <h2 className="font-light text-xs xs:text-sm xl:text-base">
              {stat.title}
            </h2>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default Statistic;