"use client";

import { useCallback, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import CustomDropdown from "@/components/ui/Select/Select";
import Logo from "@/assets/2.svg"
import Logo3 from "@/assets/1.svg"
import Image from "next/image";
import CustomContainer from "@/components/ui/Container";

const language = {
  en: "English",
  uz: "Uzbek",
  ru: "Русский",
} as const;

type Language = keyof typeof language;

const select_options = Object.keys(language).map((key) => ({
  label: language[key as Language], // To'liq nom
  value: key, // Qisqartma
}));

const MainHeader = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation();

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

  return (
    <header className="sticky top-0 py-4 px-3 bg-[#121637] z-50" style={{ borderBottom: "1px solid #191d3e", width: "100%", fontWeight: "500", fontSize: "15px"}}> 
    <CustomContainer>
      <div className="w-full h-full flex flex-row items-center justify-between">
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={Logo3} width={25} height={25} alt="logo" />
          <span>DePro</span>
        </Link>

        <div className="h-full flex flex-row items-center justify-between">
          <div className="flex items-center gap-10 justify-between w-full h-auto border border-[#7042f88b] mr-[15px] px-10 py-[10px] rounded-full text-gray-200">
            <Link href={"#home-section"}>{t('nav.home')}</Link>
            <Link href={"/#"}>{t('nav.about')}</Link>
            <Link href={"#clients-section"}>{t('nav.clients')}</Link>
            <Link href={"#services-section"}>{t('nav.services')}</Link>
            <Link href={"#tools-section"}>{t('nav.tools')}</Link>
            <Link href={"#projects-section"}>{t('nav.projects')}</Link>
          </div>
        </div>

        <div className="flex flex-row items-center gap-5">
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
              className="bg-[#2f3fe7] rounded-[7px] text-[#fff] text-[14px] font-bold py-2 px-4"
            >
              {t('nav.contact')}
            </button>
        </div>
      </div>

    </CustomContainer>
    </header>
  );
};

export default MainHeader;
