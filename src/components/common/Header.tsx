// This component renders the header of the website.
// It includes navigation links and other header elements.

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowButton,
  FacebookIcon,
  LinkedInIcon,
  TiktokIcon,
  TwitterIcon,
} from "./Icon";
import { PageLogo, CancelIcon } from "./Icon";
import SocialPopUp from "./SocialPopUp";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const path = useRouter().pathname;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (open) {
        document.body.classList.add("overflow_hidden");
      } else {
        document.body.classList.remove("overflow_hidden");
      }
    }
  }, [open]);

  // Navbar scroll handling
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollPosition(currentScrollPos);
      const isVisible = prevScrollPos > currentScrollPos;
      setIsVisible(isVisible);
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Nav social icon handling
  const [navSocialIcon, setNavSocialIcon] = useState(true);
  const SocialIcon = () => {
    setOpen(false);
    setNavSocialIcon(!navSocialIcon);
  };
  const SocialIconDropDown = () => {
    setNavSocialIcon(!navSocialIcon);
  };

  return (
    <>
      <div
        ref={navbarRef}
        id="nav_bar"
        className={`max-w-[5560px] mx-auto navbar fixed top-0 black w-full bg-bgnav py-2 z-40 ${
          scrollPosition > 200 ? "slideUp" : "slideDown"
        } ${isVisible ? "slideDown" : "slideUp"}`}
      >
        <div className="container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Home">
              <PageLogo />
            </Link>

            {/* Mobile Menu Button */}
            <div
              onClick={() => setOpen(!open)}
              className="flex flex-col md:hidden bg-transparent border-0 relative z-50 cursor-pointer"
              aria-label={open ? 'Close Menu' : 'Open Menu'}
            >
              <span className="h-[3px] w-[35px] bg-white inline-block rounded-sm"></span>
              <span className="my-2 h-[3px] w-[27px] bg-white inline-block rounded-sm"></span>
              <span className="h-[3px] w-[35px] bg-white inline-block rounded-sm"></span>
            </div>

            <div
              className={
                open
                  ? "nav_open h-full w-full z-20 fixed top-0 left-0 duration-500 transition-all bg-[#000b13] min-h-screen"
                  : "md:relative fixed sm:hidden md:block min-h-screen sm:min-h-full -left-full sm:left-0 duration-500 sm:ml-0 nav_open sm:mt-0 z-40 top-0"
              }
            >
              {/* Navigation Links */}
              <ul className="flex items-center gap-[25px] sm:gap-[40px] flex-col md:flex-row h-full justify-center">
                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/"
                    aria-label="Home"
                    className={`text-md text-white font-normal font-Segoe opacity-70 hover:opacity-100 duration-300 relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow_blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto ${
                      path == "/" ? "!opacity-100" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/about-coaches"
                    aria-label="Meet Our Coaches"
                    className={`text-md text-white font-normal font-Segoe opacity-70 hover:opacity-100 duration-300 relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow-blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto ${
                      path == "/about-coaches" ? "!opacity-100 " : ""
                    }`}
                  >
                    Coaches
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/about-program"
                    aria-label="Program Details"
                    className={`text-md text-white font-normal font-Segoe opacity-70 hover:opacity-100 duration-300 relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow-blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto ${
                      path == "/about-program" ? "!opacity-100 " : ""
                    }`}
                  >
                    Program
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setOpen(false)}
                    href="/about-cards"
                    aria-label="Player Cards Information"
                    className={`text-md text-white font-normal font-Segoe opacity-70 hover:opacity-100 duration-300 relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow-blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto ${
                      path == "/about-cards" ? "!opacity-100 " : ""
                    }`}
                  >
                    Player Cards
                  </Link>
                </li>

                {/* Social Icons Menu Item */}
                <li className="social_icons_show sm:mt-7 sm:pb-7 hidden sm:block">
                  <button
                    onClick={SocialIcon}
                    className={`text-md text-white font-normal font-Segoe opacity-70 hover:opacity-100 duration-300 relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow_blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto ${
                      path == "/SocialIcons" ? "!opacity-100" : ""
                    }`}
                    aria-label="Social Media Links"
                  >
                    Socials
                  </button>
                  <div className="hidden social_btns">
                    <div className="relative h-full z-50">
                      <SocialPopUp />
                    </div>
                  </div>
                </li>
                <li
                  className="sm:hidden text-center"
                  onClick={SocialIconDropDown}
                >
                  <button
                    className={`text-md text-white font-normal font-Segoe opacity-70 hover:opacity-100 duration-300 relative after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[2px] after:-bottom-1 after:right-0 after:bg-shadow_blue after:rounded-md after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:right-auto ${
                      path == "/SocialIcons" ? "!opacity-100" : ""
                    }`}
                    aria-label="Social Media Links"
                  >
                    Socials
                  </button>
                  <div
                    className={` mt-3 h-[180px] overflow-scroll scroll_bar_hidden ${
                      navSocialIcon ? "!hidden" : "block"
                    }`}
                  >
                    <div className="flex gap-4 flex-col">
                      {/* SOCIAL ICONS LINKS */}
                      <Link
                        className="hover:-translate-y-1 transition duration-300 ease-out flex items-center"
                        href="https://www.tiktok.com/@athletifi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TiktokIcon />
                        <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
                          Tiktok
                        </span>
                      </Link>
                      <Link
                        className="hover:-translate-y-1 transition duration-300  flex items-center"
                        href="https://www.facebook.com/profile.php?id=61553263775533"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FacebookIcon />
                        <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
                          Facebook
                        </span>
                      </Link>
                      <Link
                        className="hover:-translate-y-1 transition duration-300  flex items-center"
                        href="https://twitter.com/Athletifi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon />
                        <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
                          Twitter
                        </span>
                      </Link>
                      <Link
                        className="hover:-translate-y-1 transition duration-300  flex items-center"
                        href="https://www.instagram.com/athletifi/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/assets/img/svg/Instagram.svg"
                          alt="grid-lines"
                          width={32}
                          height={32}
                        />
                        <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
                          Instagram
                        </span>
                      </Link>
                      <Link
                        className="hover:-translate-y-1 transition duration-300  flex items-center"
                        href="https://in.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                        <span className="text-white opacity-70 ms-4 text-md font-Segoe font-normal">
                          Linkedin
                        </span>
                      </Link>
                      <Link
                        href="/sign-up"
                        className="sm:px-[24px] px-4 sm:py-[14.5px] py-2 flex bg-skyblue text-base font-semibold text-white font-Segoe leading-6 gap-[6px] group border border-skyblue hover:bg-black hover:text-skyblue join_now_btn transition duration-300 ease-in-out social_btn_contact_us"
                      >
                        Contact Us
                        <span className="group-hover:translate-x-3 transition duration-300 ease-out">
                          <ArrowButton />
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    href="/sign-up"
                    onClick={() => setOpen(false)}
                    className="pt-[10px] pb-[14px] px-[24px] text-skyblue border border-skyblue font-semibold text-base font-Segoe duration-300 hover:bg-skyblue hover:text-white md:hidden"
                    aria-label="Join Waitlist"
                  >
                    Join 2026 Waitlist
                  </Link>
                </li>
              </ul>
            </div>

            {/* Desktop Sign Up Button */}
            <Link
              href="/sign-up"
              onClick={() => setOpen(false)}
              className="pt-[10px] pb-[14px] px-[24px] text-skyblue border border-skyblue font-semibold text-base font-Segoe duration-300 hover:bg-skyblue hover:text-white hidden md:inline-block"
              aria-label="Join Waitlist"
            >
              Join 2026 Waitlist
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;