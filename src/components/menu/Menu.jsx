import { HashLink as Link } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    // Updated scroll handler
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Reduced threshold to 50px
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ 
      top: yCoordinate + yOffset, 
      behavior: 'smooth' 
    }); 
    setIsOpen(false);  // Close menu after clicking
  }

  return (
    <div className={`w-full h-20 fixed top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[var(--primary-purple)]' 
        : 'bg-transparent backdrop-blur-md bg-white/10'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-1.5">
          <div className="flex flex-col">
            <Link smooth to="/#" scroll={scrollWithOffset} className="text-white">
              <img 
                src={logo} 
                alt="Kdeshea Events Logo" 
                className={`transition-all duration-300 ${
                  windowWidth < 768 ? 'h-12' : 'h-16'
                }`}
              />
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Navigation and Search */}
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-20 md:top-0 left-0 md:left-auto w-full md:w-auto bg-[var(--primary-purple)] md:bg-transparent flex-col md:flex-row items-center gap-[50px]`}>
          <nav className="flex flex-col md:flex-row items-center gap-10 text-lg w-full md:w-auto py-4 md:py-0">
            <Link smooth to="/#services" scroll={scrollWithOffset} className="text-white hover:text-[#ced4da] transition-colors">Services</Link>
            <Link smooth to="/#process" scroll={scrollWithOffset} className="text-white hover:text-[#ced4da] transition-colors">Process</Link>
            <Link smooth to="/#review" scroll={scrollWithOffset} className="text-white hover:text-[#ced4da] transition-colors">Review</Link>
            <Link smooth to="/#gallery" scroll={scrollWithOffset} className="text-white hover:text-[#ced4da] transition-colors">Gallery</Link>
            <Link smooth to="/#contact" scroll={scrollWithOffset} className="text-white hover:text-[#ced4da] transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Menu;