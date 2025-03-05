
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import ClientModal from "./ClientModal";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              WF
            </div>
            <h1 className="text-xl font-semibold">WhatsApp Fashion</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-fashion-600 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#analytics"
              className="text-sm font-medium text-fashion-600 hover:text-primary transition-colors"
            >
              Analytics
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-fashion-600 hover:text-primary transition-colors"
            >
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setModalOpen(true)}
              className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <UserPlus size={16} />
              <span>Add Client</span>
            </Button>
          </div>
        </div>
      </header>

      <ClientModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Header;
