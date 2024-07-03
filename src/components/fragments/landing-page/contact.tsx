import { useRef } from 'react';
import { motion } from 'framer-motion';
import ImageHeading from '/images/header.png';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

function Contact() {
  // initial variable
  const headingRef = useRef(null);

  return (
    <section
      id="contact"
      className="bg-white h-full w-full p-4 xs:p-8 sm:p-10 md:p-14 lg:p-18 xl:p-20 flex flex-col gap-4 md:gap-10 sm:flex-row items-center"
    >
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2 w-full"
      >
        <h2 className="font-bold text-primary text-lg xs:text-2xl xl:text-5xl">
          Connect with us{' '}
          <span className="text-black">to explore how we can collaborate</span>
        </h2>
        <p className="text-gray-500 text-xs md:text-sm xl:text-base">
          Don't Miss Out on Our Exclusive IT Solutions – Get in Touch Today
        </p>
        <div className="w-full my-auto xs:w-[80%] lg:w-[50%] xl:w-[40%] mx-auto mt-6">
          <img
            src={ImageHeading}
            alt="contact decoration"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      <motion.form
        ref={headingRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 w-full lg:w-[60%] bg-primary px-8 py-12 rounded-xl"
      >
        <div className="grid w-full items-center gap-1.5">
          <Label className="text-white" htmlFor="name">
            Name
          </Label>
          <Input required type="text" id="name" placeholder="Name" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label className="text-white" htmlFor="email">
            Email
          </Label>
          <Input required type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label className="text-white" htmlFor="phone">
            Phone Number
          </Label>
          <Input required type="tel" id="phone" placeholder="Phone Number" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label className="text-white" htmlFor="message">
            Message
          </Label>
          <Textarea required id="message" placeholder="Message" />
        </div>
        <Button
          className="w-fit m-auto rounded-lg"
          type="submit"
          variant={'outline'}
        >
          Send Message
        </Button>
      </motion.form>
    </section>
  );
}

export default Contact;
