import { HashLink as Link } from 'react-router-hash-link';

const Menu = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ 
      top: yCoordinate + yOffset, 
      behavior: 'smooth' 
    }); 
  }

  return (
    <div className="w-full h-20 bg-[#009689] fixed top-0 z-50">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-1.5">
          <div className="flex flex-col">
            <Link smooth to="/#" scroll={scrollWithOffset} className="text-white font-bold py-2">
              <h2 className="text-xl" style={{ fontSize: '2.5rem' }}>Kdeshea ❤︎ Events</h2>
            </Link>
          </div>
        </div>

        {/* Navigation and Search */}
        <div className="flex items-center gap-[50px]">
          <nav className="flex items-center gap-10 text-lg">
            <Link smooth to="/#services" scroll={scrollWithOffset} className="text-white hover:text-teal-400 transition-colors">Services</Link>
            <Link smooth to="/#process" scroll={scrollWithOffset} className="text-white hover:text-teal-400 transition-colors">Process</Link>
            <Link smooth to="/#review" scroll={scrollWithOffset} className="text-white hover:text-teal-400 transition-colors">Review</Link>
            <Link smooth to="/#gallery" scroll={scrollWithOffset} className="text-white hover:text-teal-400 transition-colors">Gallery</Link>
            <Link smooth to="/#contact" scroll={scrollWithOffset} className="text-white hover:text-teal-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Menu;