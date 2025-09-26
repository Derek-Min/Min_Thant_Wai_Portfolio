const Footer = () => {
  return (
    <footer className="bg-muted/20 border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-full bg-hero-gradient flex items-center justify-center font-bold text-background text-sm">
              MTW
            </div>
            <span className="font-semibold hero-text">Min Thant Wai</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Min Thant Wai. All rights reserved.
            <br />
            Built with passion using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;