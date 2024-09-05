// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "../assets/css/globals.css";
// import Layout, { LAYOUT_TYPE } from "@/components/layouts";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Internet Magazin",
//   description: "Bizning internet magazinimiz orqali siz buyurtmangiz tezlashadi",
//   authors: [{ name: "Nurmamatov Samariddin" }],
//   icons: { icon: "../assets/favicon.ico" },
//   keywords: "internet magazin, ecommerce, magazin, olx, magazinlar",
//   openGraph: {
//     title: "Internet Magazin",
//     description: "Bizning internet magazinimiz orqali siz buyurtmangiz tezlashadi",
//     type: "website",
//     locale: "uz_UZ",
//     images: [
//       "https://example.com/default-image.jpg",
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@YourTwitterHandle",
//     title: "Internet Magazin",
//     description: "Bizning internet magazinimiz orqali siz buyurtmangiz tezlashadi",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   themeColor: "#ffffff",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </head>
//       <body className={inter.className}>
//         <Layout type={LAYOUT_TYPE.MAIN}>
//           {children}
//         </Layout>
//       </body>
//     </html>
//   );
// }

import { AppProps } from 'next/app';
import Layout, { LAYOUT_TYPE } from '@/components/layouts'; 
import '../assets/css/globals.css'; 
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* Sahifa sarlavhasi va viewport sozlamalari */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DePro - Xizmatlar va Ma'lumotlar</title>

        {/* SEO meta teglar */}
        <meta name="description" content="Kompaniyangiz haqida qisqacha ma'lumot, xizmatlar va boshqa tegishli ma'lumotlar." />
        <meta name="keywords" content="kompaniya, xizmatlar, mahsulotlar, loyiha" />
        <meta name="author" content="Samariddin Nurmamatov" />

        {/* Open Graph va Twitter uchun meta teglar */}
        <meta property="og:title" content="Kompaniyangiz nomi" />
        <meta property="og:description" content="Kompaniyangiz haqida qisqacha ma'lumot." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sizning-kompaniya-saytingiz.com" />
        <meta property="og:image" content="https://sizning-kompaniya-saytingiz.com/rasmlar/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kompaniyangiz nomi" />
        <meta name="twitter:description" content="Kompaniyangiz haqida qisqacha ma'lumot." />
        <meta name="twitter:image" content="https://sizning-kompaniya-saytingiz.com/rasmlar/logo.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical link */}
        <link rel="canonical" href="https://sizning-kompaniya-saytingiz.com" />
      </Head>
    <Layout type={LAYOUT_TYPE.MAIN}>
      <Component {...pageProps} />
    </Layout>
    </>
  );
};

export default appWithTranslation(App);
