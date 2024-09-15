"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import CustomDropdown from "@/components/ui/Select/Select";
import Logo3 from "@/assets/svg/1.svg";
import Image from "next/image";
import CustomContainer from "@/components/ui/Container";

const language = {
  en: "English",
  uz: "Uzbek",
  ru: "Русский",
} as const;

type Language = keyof typeof language;

const select_options = Object.keys(language).map((key) => ({
  label: language[key as Language],
  value: key,
}));

const MainHeader = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      const query = { ...router.query };
      router.push({ pathname: router.pathname, query }, undefined, {
        locale: lng,
      });
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, router]);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="sticky top-0 py-4 px-3 bg-[#121637] z-50"
      style={{ borderBottom: "1px solid #191d3e", width: "100%", fontWeight: "500", fontSize: "15px" }}
    >
      <CustomContainer>
        <div className="w-full h-full flex items-center justify-between">
          <Link href={"/"} className="flex items-center gap-3" aria-label="Home Page">
            <Image src={Logo3} width={25} height={25} alt="logo" loading="lazy" />
            <span>DePro</span>
          </Link>

          <div className="hidden min-[1000px]:flex items-center gap-10">
            <div className="flex items-center gap-10 justify-between w-full h-auto border border-[#7042f88b] mr-[15px] px-10 py-[10px] rounded-full text-gray-200">
              <Link href={"#home-section"}>{t('nav.home')}</Link>
              {/* <Link href={"/#"}>{t('nav.about')}</Link> */}
              {/* <Link href={"#clients-section"}>{t('nav.clients')}</Link> */}
              <Link href={"#services-section"}>{t('nav.services')}</Link>
              <Link href={"#tools-section"}>{t('nav.tools')}</Link>
              {/* <Link href={"#projects-section"}>{t('nav.projects')}</Link> */}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <CustomDropdown
              options={select_options}
              value={i18n.language}
              onValueChange={changeLanguage}
              ariaLabel="Select language"
              title={
                <div className="relative text-[14px] text-gray flex items-center gap-[4px] font-bold">
                  {i18n.language.toUpperCase()}
                </div>
              }
            />
            <button
              onClick={handleScrollToContact}
              aria-label={t("nav.contact")}
              className="bg-[#2f3fe7] rounded-[7px] text-[#fff] text-[14px] font-bold py-2 px-4 hidden min-[1000px]:block"
            >
              {t("nav.contact")}
            </button>

            {/* Toggle Button for Mobile Menu */}
            <button
              className="min-[1000px]:hidden text-gray-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
              aria-label="Close menu overlay"
              role="button"
              tabIndex={0}
            ></div>
            <div
              className={`fixed top-0 right-0 h-full w-[250px] bg-[#121637] text-white transition-transform duration-300 ease-in-out transform ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              } min-[1000px]:hidden z-50`}
            >
              <div className="flex flex-col items-start p-5 space-y-4">
                {/* X Icon to Close Modal */}
                <button
                  className="self-end text-gray-200"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <Link href={"#home-section"} onClick={closeMenu} aria-label="Navigate to Home Section">
                  {t("nav.home")}
                </Link>
                <Link href={"#services-section"} onClick={closeMenu} aria-label="Navigate to Services Section">
                  {t("nav.services")}
                </Link>
                <Link href={"#tools-section"} onClick={closeMenu} aria-label="Navigate to Tools Section">
                  {t("nav.tools")}
                </Link>
                <button
                  onClick={() => {
                    closeMenu();
                    handleScrollToContact();
                  }}
                  className="bg-[#2f3fe7] rounded-[7px] text-[#fff] text-[14px] font-bold py-2 px-4 w-full text-center"
                  aria-label={t("nav.contact")}
                >
                  {t("nav.contact")}
                </button>
              </div>
            </div>
          </>
        )}
      </CustomContainer>
    </header>
  );
};

export default MainHeader;
