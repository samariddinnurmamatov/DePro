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


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout type={LAYOUT_TYPE.MAIN}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
