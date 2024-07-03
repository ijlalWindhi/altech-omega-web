import { useRef } from 'react';
import { motion } from 'framer-motion';
import HeaderImage from '/images/header.png';
import { About as AboutData } from '@/constants';

function About() {
  // initial variable
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const featuresRef = useRef(null);
  const cardRef = useRef(null);

  return (
    <section
      id="about"
      className="h-full w-full p-4 xs:p-8 sm:p-10 md:p-14 lg:p-18 xl:p-20 flex flex-col gap-4 md:gap-10 sm:flex-row items-center"
    >
      <div className="flex flex-col gap-4 w-full sm:max-w-[50%]">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <h2 className="font-bold text-primary text-lg xs:text-2xl xl:text-5xl">
            Your IT Partner for{' '}
            <span className="text-black">Optimal Business Performance</span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm xl:text-base">
            We are an IT Company based in Jakarta, with 4 branch offices in
            Indonesia, Singapore, Hong Kong and United States. We have a strong
            determination, commitment and persistence to bring a top-notch IT
            solutions to help your business operations reach its optimum state
            and to bring the best out of your business.
          </p>
        </motion.div>
        <motion.div
          ref={featuresRef}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 xs:grid-cols-2 gap-3"
        >
          {AboutData.map((data) => (
            <motion.div
              key={data}
              ref={cardRef}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full p-3 border-2 border-primary rounded-xl text-gray-500 hover:bg-primary hover:text-white hover:border-white cursor-default transition duration-200 ease-in-out"
            >
              <p className="text-xs md:text-sm xl:text-base">{data}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="w-full flex justify-center min-h-[50vh] sm:max-w-[50%]"
        ref={imageRef}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full my-auto xs:w-[80%] sm:w-[90%] md:w-[90%] lg:w-[60%] xl:w-[60%]">
          <img
            src={HeaderImage}
            alt="Header Image"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default About;
