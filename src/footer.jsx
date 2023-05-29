import React from "react";
import logo from "./compoments/image/percilok.png";

function Footer() {
  return (
    <footer className="footer footer-center py-5 bg-slate-800 text-primary-content text-center bottom-0 ">
      <div>
        <img
          src={logo}
          alt="Percilok Logo"
          className="w-10 rouded mr-4 flex justify-center"
        />
        <p className="font-bold text-gray-300 text-lg sm:text-xl">
          PerCiLok Ltd.
          <br />
          Bringing Expectations to Life since 2022
        </p>
        <p className="text-gray-300 text-base sm:text-lg">
          Copyright © 2023 - All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
