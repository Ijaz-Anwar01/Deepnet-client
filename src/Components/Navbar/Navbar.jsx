import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../../assets/images/Logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define media queries for responsiveness
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={isMobile?'h-[40px] bg-[#121618]':'navbar-container w-full h-[100px] bg-[#121618]'}>
      <div className="navbar flex justify-between items-center px-6 lg:px-16">
        <div className="navbar-logo flex gap-5 mt-[62px] ml-[130px] ">
          <img src={logo} alt="Logo" className={isMobile?'w-[50px] h-[44px] absolute mt-[-46px] ml-[40px]':'w-[86px] h-[76px]'} />
          <div className={isMobile?'hidden':'logo-text font-oswald text-[35px] font-semibold leading-[51px]'}>
            <p className='text-[#0796EF]'>  
              DEEP <span className='text-[#ffffff]'>NET</span>
            </p>
            <p className='text-[#857878]'>SOFT</p>
          </div>
        </div>

        {/* Desktop and Tablet Menu */}
        <div className={isMobile?'mr-[-10px]':'right flex items-center '}>
          {!isMobile && !isTablet && (
            <div className="nav-links font-oswald text-[16px] text-[#F5F5F5] leading-[23.71px] hidden lg:block mr-[126px]">
              <ul className="flex gap-8">
                <li><a href="">HOME</a></li>
                <li><a href="">MENU</a></li>
                <li><a href="">RESERVATION</a></li>
                <li><a href="">CONTACT US</a></li>
              </ul>
            </div>
          )}

          {/* Hamburger Menu for Mobile */}
          {isMobile && (
            <div className="lg:hidden flex flex-col justify-center items-center" onClick={toggleMenu}>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="mobile-menu bg-[#121618] w-full absolute top-[40px] left-0 p-4 lg:hidden ">
          <ul className="flex flex-col gap-6 text-[#F5F5F5] font-oswald text-[16px]">
            <li><a href="">HOME</a></li>
            <li><a href="">MENU</a></li>
            <li><a href="">RESERVATION</a></li>
            <li><a href="">CONTACT US</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
