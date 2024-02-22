import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";

const Header = () => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrolly, setLastScrolly] = useState(0);

  const controlNavBar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrolly) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrolly(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrolly]);

  return (
    <div
      className={`w-full h-[50px] md:h-[70px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="w-[40px] md:w-[60px] cursor-pointer">
            <h2>LOGO</h2>
          </div>
          <div className="">
            <button className="bg-graylight py-1 px-4 rounded-full">
              Sign In
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
