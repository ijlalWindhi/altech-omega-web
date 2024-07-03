import { useState, useRef } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Switch } from '@/components/ui/switch';
import { Pricing as PricingData } from '@/constants';

function Pricing() {
  // initial state
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  // initial variable
  const headingRef = useRef(null);
  const pricingRef = useRef(null);

  return (
    <section
      id="pricing"
      className="h-full w-full p-4 xs:p-8 sm:p-10 md:p-14 lg:p-18 xl:p-20 flex flex-col gap-4 md:gap-10 justify-center items-center"
    >
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 w-full justify-center items-center text-center"
      >
        <h2 className="font-bold text-primary text-lg xs:text-2xl xl:text-5xl">
          Our
          <span className="text-black">Pricing</span>
        </h2>
        <p className="text-gray-500 text-xs md:text-sm xl:text-base sm:max-w-[70%] md:max-w-[50%]">
          Try our service for free for 30 days. If you are satisfied, you can
          continue to use our service by subscribing to our service package.
        </p>
        <div className="flex items-center justify-center gap-4">
          <h3
            className={`text-xs md:text-base xl:text-lg ${
              isMonthly ? 'font-semibold text-primary' : 'text-gray-500'
            }`}
          >
            Monthly
          </h3>
          <Switch checked={isMonthly} onCheckedChange={setIsMonthly} />
          <h3
            className={`text-xs md:text-base xl:text-lg ${
              isMonthly ? 'text-gray-500' : 'font-semibold text-primary'
            }`}
          >
            Annual
          </h3>
        </div>
      </motion.div>
      <motion.div
        ref={pricingRef}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {PricingData.map((data) => (
          <motion.div
            key={data.type}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="text-left flex flex-col gap-3 w-full p-4 border border-primary rounded-xl text-primary hover:bg-primary hover:text-white hover:border-white cursor-default transition duration-200 ease-in-out"
          >
            <h3 className="text-sm md:text-base xl:text-lg font-semibold">
              {data.type}
            </h3>
            <p className="text-xs md:text-sm">{data.description}</p>
            <p className="text-xs md:text-sm xl:text-base">
              {!isMonthly && (
                <span className="cross mr-2">${data.yearlyPrice}</span>
              )}
              ${isMonthly ? data.monthlyPrice : data.discountYearlyPrice}
            </p>
            <ul className="flex flex-col gap-1">
              {data.features.map((feature) => (
                <li key={feature} className="text-xs md:text-sm xl:text-base">
                  <Check size={16} className="inline mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Pricing;
