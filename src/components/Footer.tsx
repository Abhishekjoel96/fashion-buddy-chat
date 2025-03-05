
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                WF
              </div>
              <h2 className="text-xl font-semibold">WhatsApp Fashion</h2>
            </div>
            <p className="text-fashion-600 max-w-md">
              Elevate your fashion business with our WhatsApp-powered platform.
              Connect with clients, offer virtual try-ons, and provide personalized style recommendations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-fashion-600 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-fashion-600 hover:text-primary transition-colors">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-fashion-600 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-fashion-600 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-fashion-600">
                Email: hello@whatsappfashion.com
              </li>
              <li className="text-fashion-600">
                Phone: +1 (555) 123-4567
              </li>
              <li className="text-fashion-600">
                Address: Fashion District, New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-fashion-600 text-sm">
            © {currentYear} WhatsApp Fashion. All rights reserved.
          </p>
          <p className="text-fashion-600 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for fashion enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
