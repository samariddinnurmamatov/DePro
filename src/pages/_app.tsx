import { AppProps } from 'next/app';
import Layout, { LAYOUT_TYPE } from '@/components/layouts'; 
import '../assets/css/globals.css'; 
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* Sahifa sarlavhasi va viewport sozlamalari */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Uzbek, Russian, English" />

        {/* SEO meta teglar */}
        <title>DePro - Xizmatlar va Ma'lumotlar</title>
        <meta name="description" content="Kompaniyangiz haqida qisqacha ma'lumot, xizmatlar va boshqa tegishli ma'lumotlar." />
        <meta name="keywords" content="kompaniya, xizmatlar, mahsulotlar, loyiha" />
        <meta name="author" content="DePro IT-Outsourcing Company" />

        {/* Open Graph va Twitter uchun meta teglar */}
        {/* <meta property="og:title" content="Kompaniyangiz nomi" />
        <meta property="og:description" content="Kompaniyangiz haqida qisqacha ma'lumot." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sizning-kompaniya-saytingiz.com" />
        <meta property="og:image" content="https://sizning-kompaniya-saytingiz.com/rasmlar/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kompaniyangiz nomi" />
        <meta name="twitter:description" content="Kompaniyangiz haqida qisqacha ma'lumot." />
        <meta name="twitter:image" content="https://sizning-kompaniya-saytingiz.com/rasmlar/logo.png" /> */}

        {/* Favicon */}
        <link rel="icon" href="/1.svg" />

        {/* Canonical link */}
        <link rel="canonical" href="https://depro.uz/" />
      </Head>
      <Layout type={LAYOUT_TYPE.MAIN}>
        <Component {...pageProps} />
      </Layout>

      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default appWithTranslation(App);
