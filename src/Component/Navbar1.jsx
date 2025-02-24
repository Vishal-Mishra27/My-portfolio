import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-500 border-b backdrop-blur px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-14 items-center">
        <div className="md:mr-4 flex justify-between w-full">
          <a
            href="#home"
            className="text-red-700 hover:text-yellow-800 transition-all duration-300"
          >
            <h1 className="text-3xl font-bold hover:scale-105 transition-transform duration-300">
              Vishal Mishra
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="md:flex hidden items-center space-x-6 text-lg font-medium">
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Experience",
              "Education",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-decoration-none hover:text-yellow-400 hover:scale-105 transition-transform duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <span className="sr-only">Open main menu</span>
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-1 px-2 pb-3 pt-2 bg-blue-600 md:hidden"
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 px-3 rounded-md text-base font-medium text-white hover:text-yellow-400 transition-all duration-300 text-decoration-none"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
