import { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NavMenu } from '@/constants/index';

function Navbar() {
  // state
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // handler
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="flex justify-between items-center gap-4 py-2 px-4 md:px-8 lg:px-20 xl:px-32 shadow-sm sm:py-4 fixed w-full z-50 bg-white">
      <Link to="/">
        <img
          src="https://altechomega.com/wp-content/uploads/2020/09/logo-e1668010727869.png"
          alt="Altech Omega Logo"
          className="w-32"
        />
      </Link>
      <div className="hidden sm:flex gap-4 md:gap-10 justify-center items-center">
        {NavMenu.map((menu) => (
          <p
            key={menu.id}
            onClick={() => {
              scrollTo(menu.id);
              setShowMenu(false);
            }}
            className="text-primary cursor-pointer hover:text-primary py-2 px-2 text-sm md:text-base font-medium"
          >
            {menu.title}
          </p>
        ))}
      </div>
      <Link to="/login">
        <button
          className="hidden text-sm md:text-base font-medium sm:block bg-primary text-white px-5 py-2 rounded-full"
          aria-label="Daftar Sekarang"
        >
          Login
        </button>
      </Link>
      <div className="sm:hidden" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <X size={24} /> : <AlignJustify size={24} />}
      </div>
      <motion.div
        className={`absolute sm:hidden top-11 w-full left-0 py-4 bg-white shadow-sm`}
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: showMenu ? 0 : '-100%', opacity: showMenu ? 1 : 0 }}
        exit={{ y: '-100%', opacity: 0 }}
        hidden={!showMenu}
        transition={{ duration: 0.3 }}
      >
        <div
          className={
            'flex sm:hidden flex-col gap-3 justify-center items-center'
          }
        >
          {NavMenu.map((menu) => (
            <p
              key={menu.id}
              onClick={() => {
                scrollTo(menu.id);
                setShowMenu(false);
              }}
              className="text-primary cursor-pointer hover:text-primary hover:font-semibold w-full text-center text-sm font-medium"
            >
              {menu.title}
            </p>
          ))}
          <Link to="/login">
            <button
              className="text-sm font-medium bg-primary text-white px-10 py-2 rounded-full"
              aria-label="Daftar Sekarang"
            >
              Login
            </button>
          </Link>
        </div>
      </motion.div>
    </header>
  );
}

export default Navbar;
