import React, { useState, useEffect } from "react";
import {
  CancelIcon,
  FacebookIcon,
  InstaIcon,
  LinkedInIcon,
  TiktokIcon,
  TwitterIcon,
} from "./Icon";
import Link from "next/link";
import SocialPopUp from "./SocialPopUp";

const Footer = () => {
  // SOCIAL-ICON
  const [socialIcon, setSocialIcon] = useState(true);
  const SocialIcon = () => {
    setSocialIcon(!socialIcon);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (socialIcon) {
        document.body.classList.remove("overflow_hidden");
      } else {
        document.body.classList.add("overflow_hidden");
      }
    }
  }, [socialIcon]);
  // UPDATE DATE-YEAR
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <footer className="border-t border-[#00C7FF]">
        <div className=" container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto  flex flex-col md:flex-row gap-5 items-center justify-between py-7">
          <ul className=" flex gap-lg-10 gap-5">
            <li>
              <Link
                className=" text-white text-base font-Segoe relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow_blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-aoto "
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                aria-label="about-us"
                className=" text-white text-base font-Segoe relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow_blue after:rounded-md after:transition-all after:duration-300 after:ease-out"
                href="/about-us"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                aria-label="news"
                className=" text-white text-base font-Segoe relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow_blue after:rounded-md after:transition-all after:duration-300 after:ease-out"
                href="/news-insight"
              >
                News
              </Link>
            </li>
            <li>
              <button
                aria-label="socials"
                onClick={SocialIcon}
                className=" text-white text-base font-Segoe relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow_blue after:rounded-md after:transition-all after:duration-300 after:ease-out"
              >
                Socials
              </button>
            </li>
          </ul>
          <p className=" text-white text-sm font-Segoe opacity-70">
            @{year} Athletifi
          </p>
          {/* SOCIAL-ICON */}
          <div className="flex gap-4">
            <Link
              aria-label="Tik-Tok"
              className="hover:-translate-y-2 transition duration-300 ease-out"
              href="https://www.tiktok.com/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiktokIcon />
            </Link>
            <Link
              aria-label="facebook"
              className="hover:-translate-y-2 transition duration-300 ease-out"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </Link>
            <Link
              aria-label="twitter"
              className="hover:-translate-y-2 transition duration-300 ease-out"
              href="https://twitter.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </Link>
            <Link
              aria-label="instagram"
              className="hover:-translate-y-2 transition duration-300 ease-out"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstaIcon />
            </Link>
            <Link
              aria-label="linkedin"
              className="hover:-translate-y-2 transition duration-300 ease-out"
              href="https://in.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
        {/* POPUP SOCAIL ICONS CODE */}
        <div className={socialIcon ? "!hidden" : "block"}>
          <div onClick={() => setSocialIcon(true)} className="h-full z-50">
            <SocialPopUp />
            <span
              className="fixed z-30 right-0 top-10 sm:mt-10 sm:me-20 mt-10 me-5 lg:mt-0 cursor-pointer"
              onClick={() => setSocialIcon(true)}
            >
              <CancelIcon />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
