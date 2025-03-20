import logo from '../../assets/images/logo.png';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[120px]">
          {/* Left side - Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-28 w-auto"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex items-center text-right">
            <div>
              <p className="text-sm text-white mb-1">
                Copyright ©{currentYear} Natalie Sofer, All Rights Reserved
              </p>
              <p className="text-sm text-white">
                Internet Marketing, Graphic & Web Design: High Arte
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;