import { LangsType } from "@/types";
import { i18n } from "next-i18next";
import Document, { Html, Head, Main, NextScript } from "next/document";

const lang = {
  ru: "uz-Cyrl-Ru",
  uz: "uz-Latn-UZ",
  en: "en-En",
};

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang={lang?.[i18n?.language as LangsType]}>
        <Head>
         
        </Head>

        <body className="bg-[#030728] text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
