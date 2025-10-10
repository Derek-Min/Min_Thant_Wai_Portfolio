import logoLight from "@/assets/logo_white.png";        // for dark header


const logoSrc =  logoLight;
const Footer = () => {
  return (
    <footer className="bg-muted/20 border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
           <div className="flex items-center space-x-3">
            <img
              src={logoSrc}
              alt="Min Thant Wai logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-xl hero-text">Min Thant Wai</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Min Thant Wai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;