const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-200 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-700 mb-1">
            Copyright ©{currentYear} Natalie Sofer, All Rights Reserved
          </p>
          <p className="text-sm text-gray-700">
            Internet Marketing, Graphic & Web Design: High Arte
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;