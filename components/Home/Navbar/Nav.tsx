// "use client";
// import { navLinks } from "@/constant/constant";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { FaHouse } from "react-icons/fa6";
// import { HiBars3BottomRight } from "react-icons/hi2";

// type Props = {
//   openNav: () => void;
// };

// const Nav = ({ openNav }: Props) => {
//   const [navBg, setNavBg] = useState(false);

//   useEffect(() => {
//     const handler = () => {
//       if (window.scrollY >= 90) setNavBg(true);
//       if (window.scrollY < 90) setNavBg(false);
//     };
//     window.addEventListener("scroll", handler);
//     return () => {
//       window.removeEventListener("scroll", handler);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed ${navBg ? "bg-gray-800" : "bg-transparent"} h-[10vh] z-[100] w-full transition-all duration-200`}
//     >
//       <div className="flex items-center justify-between h-full w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
//         <div className="flex items-center space-x-2">
//           <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
//             <FaHouse />
//           </div>
//           <h1 className="text-sm sm:text-base md:text-xl font-bold text-white">
//             HomeHub
//           </h1>
//         </div>

//         <div className="lg:flex items-center space-x-14 text-white hidden">
//           {navLinks.map((navlink) => {
//             return (
//               <Link key={navlink.id} href={navlink.url}>
//                 <p className="font-medium hover:text-yellow-300">
//                   {navlink.label}
//                 </p>
//               </Link>
//             );
//           })}
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="flex items-center cursor-pointer text-white space-x-2 hover:text-red-400 transition-all duration-200">
//             <FaUserCircle className="w-5 h-5" />
//             <p className="font-bold text-xs sm:text-base">Login / Register</p>
//           </div>
//           <HiBars3BottomRight
//             onClick={openNav}
//             className="text-white sm:w-8 sm:h-8 w-6 h-6 cursor-pointer lg:hidden"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

// "use client";

// import { navLinks } from "@/constant/constant";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { FaHouse } from "react-icons/fa6";
// import { HiBars3BottomRight } from "react-icons/hi2";

// type Props = {
//   openNav: () => void;
// };

// const Nav = ({ openNav }: Props) => {
//   const [navBg, setNavBg] = useState(false);
//   const pathname = usePathname();


//   useEffect(() => {
//     const handler = () => {
//       setNavBg(window.scrollY > 80);
//     };
//     window.addEventListener("scroll", handler);
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   const handleNavClick = (url: string) => {
//     if (url.startsWith("/#")) {
//       if (pathname !== "/") {
//         window.location.href = url;
//       } else {
//         const element = document.querySelector(url.substring(1));
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//     } else {
//       window.location.href = url;
//     }
//   };

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 w-full z-[100]
//         transition-all duration-300
//         ${navBg
//           ? "bg-gray-900/90 backdrop-blur-lg shadow-lg"
//           : "bg-transparent"}
//       `}
//     >
//       <nav className="h-[70px] md:h-[80px] flex items-center">
//         <div className="w-[95%] sm:w-[90%] xl:w-[80%] mx-auto flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-3 group">
//             <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-600 to-pink-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
//               <FaHouse />
//             </div>
//             <h1 className="text-lg md:text-xl font-extrabold tracking-wide text-white">
//               HomeHub
//             </h1>
//           </Link>

//           <div className="hidden lg:flex items-center gap-10">
//             {navLinks.map((navlink) => (
//               <Link
//                 key={navlink.id}
//                 href={navlink.url}
//                 onClick={() => handleNavClick(navlink.url)}
//                 className="relative text-white font-medium text-sm tracking-wide group hover:text-rose-600 transition-colors duration-200"
//               >
//                 {navlink.label}

//               </Link>
//             ))}
//           </div>

//           <div className="flex items-center gap-4">
//             <div
//               className="
//                 hidden sm:flex items-center gap-2
//                 px-4 py-2 rounded-full
//                 border border-white/20
//                 text-white cursor-pointer
//                 hover:bg-white/10 hover:border-white/40
//                 transition-all duration-300
//               "
//             >
//               <FaUserCircle className="w-5 h-5" />
//               <span className="text-sm font-semibold">
//                 Login / Register
//               </span>
//             </div>

//             <HiBars3BottomRight
//               onClick={openNav}
//               className="
//                 lg:hidden w-7 h-7 text-white
//                 cursor-pointer hover:text-yellow-400
//                 transition-colors duration-200
//               "
//             />
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;


// components/Home/Navbar/Nav.tsx
"use client";

import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import LoginModal from "../Login/LoginModal";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY > 80);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith("/#")) {
      e.preventDefault();

      if (pathname !== "/") {
        window.location.href = url;
      } else {
        const element = document.querySelector(url.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`
        fixed top-0 left-0 w-full z-[100]
        transition-all duration-300
        ${navBg
            ? "bg-gray-900/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"}
      `}
      >
        <nav className="h-[70px] md:h-[80px] flex items-center">
          <div className="w-[95%] sm:w-[90%] xl:w-[80%] mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-600 to-pink-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <FaHouse />
              </div>
              <h1 className="text-lg md:text-xl font-extrabold tracking-wide text-white">
                HomeHub
              </h1>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((navlink) => (
                <Link
                  key={navlink.id}
                  href={navlink.url}
                  onClick={(e) => handleNavClick(e, navlink.url)}
                  className={`relative text-white font-medium text-sm tracking-wide transition-colors duration-200 hover:text-rose-600 ${pathname === navlink.url ? "text-rose-600" : ""}`}
                >
                  {navlink.label}
                </Link>
              ))}
            </div>

            {/* <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white cursor-pointer hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <FaUserCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Login / Register
              </span>
            </Link>

            <HiBars3BottomRight
              onClick={openNav}
              className="lg:hidden w-7 h-7 text-white cursor-pointer hover:text-yellow-400 transition-colors duration-200"
            />
          </div> */}

            <div className="flex items-center gap-4">
              <div
                onClick={() => setShowLogin(true)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white cursor-pointer hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                <FaUserCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  Login / Register
                </span>
              </div>

              <HiBars3BottomRight
                onClick={openNav}
                className="lg:hidden w-7 h-7 text-white cursor-pointer hover:text-yellow-400 transition-colors duration-200"
              />
            </div>

          </div>
        </nav>
      </header>
      <LoginModal
        open={showLogin}
        onClose={() => setShowLogin(false)}
      />

    </>
  );
};

export default Nav;