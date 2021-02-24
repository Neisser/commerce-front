// import App from 'next/app'
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Import global style tailwidcss. Documentation: https://tailwindcss.com/
import "tailwindcss/tailwind.css";


function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <section className="theme-dark bg-background-primary">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </section>
    </React.Fragment>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
