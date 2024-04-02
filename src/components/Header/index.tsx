"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  console.log(pathname);

  return (
    <div className="relative h-[60px] md:h-20 md:py-10">
      <header
        id="header"
        className="fixed z-10 top-0 inset-y-0 px-5 h-[60px] w-screen bg-dark-1 flex flex-row justify-between items-center"
      >
        <a
          href="https://donx.net/"
          className={clsx(
            "flex flex-row items-center transition-opacity duration-200 ease-linear",
            openMenu && "opacity-0 ml-0"
          )}
        >
          <div
            className="flex flex-row justify-center items-center gap-2 opacity-100 transition-opacity duration-200 ease-linear"
            id="action-icon"
          >
            <Image
              src="icons/gold-donx.svg"
              alt="gold-donx-icon"
              className="header-logo"
              width={24}
              height={24}
            />
            <div className="text-xl text-white">DonX</div>
          </div>
        </a>

        <div
          className={clsx(
            "flex opacity-0 flex-row gap-2.5 transition-opacity duration-200 ease-linear w-0 md:gap-5",
            openMenu && "opacity-100 w-fit"
          )}
          id="header-menu"
        >
          <Link
            className={clsx(
              "text-white w-[80px] h-full text-center relative cursor-pointer text-sm font-bold active-menu",
              pathname === "/" &&
                "before:content-[''] before:absolute before:h-[10px] before:w-full before:top-[30px] before:left-0 before:bg-white"
            )}
            href=""
            // href="./index.html"
          >
            Home
          </Link>

          <Link
            className="text-white w-[80px] h-full text-center relative cursor-pointer text-sm font-bold"
            // href="./museum.html"
            href=""
          >
            Museum
          </Link>
        </div>

        <div className="flex flex-row">
          <Image
            src="icons/form.svg"
            alt="contact-icon"
            id="action-icon"
            width={24}
            height={24}
            className={clsx(
              "ml-5 transition-opacity duration-200 ease-linear",
              openMenu && "opacity-0 w-0 h-auto ml-0"
            )}
          />
          <Image
            src="icons/shopping.svg"
            alt="shopping-icon"
            id="action-icon"
            width={24}
            height={24}
            className={clsx(
              "ml-5 transition-opacity duration-200 ease-linear ",
              openMenu && "opacity-0 w-0 h-auto ml-0 "
            )}
          />
          <Image
            src="icons/user.svg"
            alt="user-icon"
            id="action-icon"
            width={24}
            height={24}
            className={clsx(
              "ml-5 transition-opacity duration-200 ease-linear",
              openMenu && "opacity-0 w-0 h-auto ml-0"
            )}
          />

          <div className="ml-5" onClick={() => setOpenMenu(!openMenu)}>
            <div
              className={clsx(
                "bg-white w-[24px] h-[3px] my-[5px] duration-500",
                openMenu && "translate-y-3 -rotate-45 !bg-[#8c8c8c] ml-0"
              )}
            />
            <div
              className={clsx(
                "bg-white w-[24px] h-[3px] my-[5px] duration-500",
                openMenu && "opacity-0"
              )}
            />
            <div
              className={clsx(
                "bg-white w-[24px] h-[3px] my-[5px] duration-500",
                openMenu && "translate-y-[-4px] rotate-45 !bg-[#8c8c8c]"
              )}
            />
          </div>
        </div>
      </header>
    </div>
  );
};
