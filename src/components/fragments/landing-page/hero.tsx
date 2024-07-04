import { useRef } from 'react';
import { LogoBrand } from '@/constants';
import HeaderImage from '/images/header.png';
import { motion } from 'framer-motion';

function Hero() {
  // initial variable
  const imageRef = useRef(null);
  const headingRef = useRef(null);

  return (
    <section
      id="hero"
      className="h-full w-full p-4 xs:p-8 sm:p-10 md:p-14 lg:p-18 xl:p-20 flex flex-col gap-4 md:gap-10 sm:flex-row items-center"
    >
      <motion.div
        ref={headingRef}
        className="flex flex-col gap-4 xl:gap-10 sm:max-w-[50%] item"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="bg-primary text-xs xs:text-sm md:text-base text-white px-3 py-1 w-fit rounded-full">
          #01 Bootcamp 2024
        </h1>
        <div className="flex flex-col gap-1 md:gap-4">
          <h2 className="font-bold text-primary text-lg xs:text-2xl xl:text-5xl">
            Raih Karir Impian,{' '}
            <span className="text-black">Dengan Skola Digital Terbaik</span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm xl:text-base">
            Solusi untuk kamu menggampai karir impian dengan metode kelas yang
            bisa kamu pilih sendiri
          </p>
        </div>
        <button
          className="w-fit text-xs md:text-base bg-primary text-white px-3 py-2 md:px-5 md:py-2 rounded-full"
          aria-label="Baca Selengkapnya"
        >
          Baca Selengkapnya
        </button>
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-500 text-xs md:text-sm xl:text-base">
            Dipercaya oleh perusahaan besar
          </h3>
          <div className="flex flex-wrap gap-4">
            {LogoBrand.map((logo) => (
              <div
                className="relative w-6 h-6 md:w-9 md:h-9 object-cover"
                key={logo.alt}
              >
                <img src={logo.src} alt={logo.alt} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
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
            alt="Header"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
