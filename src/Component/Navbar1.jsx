// import React, { useState } from "react";
// // import Logo from "../assets/name Logo.png";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//   const [mobileMenuOpen, setmMobileMenuOpen] = useState(false);
//   return (
//     <header className="sticky top-0 z-50 w-full bg-blue-700 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0">
//       <div className="max-w-7xl mx-auto flex h-14 items-center">
//         <div className="md:mr-4 flex justify-between w-full">
//           <a href="#home" className="text-white text-decoration-none">
//             <h1>Vishal Mishra</h1>
//           </a>
//           <nav className="md:flex hidden my-auto item-center space-x-6 text-lg font-medium mt-6">
//             <a
//               href="#home"
//               className="text-white text-decoration-none hover:text-black/50"
//             >
//               Home
//             </a>
//             <a href="#about" className=" text-white text-decoration-none">
//               About
//             </a>
//             <a href="#skills" className="text-white text-decoration-none">
//               Skills
//             </a>
//             <a href="#projects" className="text-white text-decoration-none">
//               Projects
//             </a>
//             <a href="#Experience" className="text-white text-decoration-none">
//               Experience
//             </a>
//             <a href="#education" className="text-white text-decoration-none">
//               Education
//             </a>
//             <a href="#contact" className="text-white text-decoration-none">
//               Contact
//             </a>
//           </nav>
//         </div>
//         <button
//           className="inline-flex item-center justify-center rounded-md  md:hidden"
//           onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <span className="sr-only">Open main menu</span>
//           {mobileMenuOpen ? (
//             <X className="h-6 w-6" aria-hidden="true" />
//           ) : (
//             <Menu className="h-6 w-6 " aria-hidden="true" />
//           )}
//         </button>
//       </div>
//       {mobileMenuOpen && (
//         <div className="space-y-1 px-2 pb-3 pt-2 ">
//           <a
//             href="#home"
//             className="block  py-2 px-3 rounded-md text-base font-medium text-white text-decoration-none  hover:text-gray-900"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="block py-2 px-3 rounded-md text-base font-medium text-white text-decoration-none hover:text-gray-900 "
//           >
//             About
//           </a>
//           <a
//             href="#skills"
//             className="block py-2 px-3 rounded-md text-base font-medium text-white text-decoration-none hover:text-gray-900 "
//           >
//             Skills
//           </a>
//           <a
//             href="#projects"
//             className="block py-2 px-3 rounded-md text-base font-medium text-white text-decoration-none hover:text-gray-900 "
//           >
//             Projects
//           </a>
//           <a
//             href="#contact"
//             className="block py-2 px-3 rounded-md text-base font-medium text-white text-decoration-none hover:text-gray-900 "
//           >
//             Contacts
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setmMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-500 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-14 items-center">
        <div className="md:mr-4 flex justify-between w-full">
          <a
            href="#home"
            className="text-red-700 hover:text-yellow-800 text-decoration-none"
          >
            <h1>Vishal Mishra</h1>
          </a>
          <nav className="md:flex hidden my-auto item-center space-x-6 text-lg font-medium mt-6">
            <a href="#home" className="text-white text-decoration-none ">
              Home
            </a>
            <a href="#about" className="text-white text-decoration-none">
              About
            </a>
            <a href="#skills" className="text-white text-decoration-none">
              Skills
            </a>
            <a href="#projects" className="text-white text-decoration-none">
              Projects
            </a>
            <a href="#Experience" className="text-white text-decoration-none">
              Experience
            </a>
            <a href="#education" className="text-white text-decoration-none">
              Education
            </a>
            <a href="#contact" className="text-white text-decoration-none">
              Contact
            </a>
          </nav>
        </div>
        <button
          className="inline-flex item-center justify-center rounded-md md:hidden"
          onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 " aria-hidden="true" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#home"
            className="block py-2 px-3 rounded-md text-base font-medium text-white text-decoration-none hover:text-gray-900"
            onClick={() => setmMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 px-3 rounded-md text-base font-medium text-white text-decoration-none hover:text-gray-900"
            onClick={() => setmMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="block py-2 px-3 rounded-md text-base font-medium text-white text-decoration-none hover:text-gray-900"
            onClick={() => setmMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block py-2 px-3 rounded-md text-base font-medium text-white text-decoration-none hover:text-gray-900"
            onClick={() => setmMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 px-3 rounded-md text-base font-medium text-white text-decoration-none hover:text-gray-900"
            onClick={() => setmMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;

