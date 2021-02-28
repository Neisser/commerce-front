// import App from 'next/app'
import React, { useCallback, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

// Import global style tailwidcss. Documentation: https://tailwindcss.com/
import 'tailwindcss/tailwind.css';
import styles from '../assets/styles/styles.module.css';

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  console.log(pageProps);

  const handlerDarkMode = useCallback(
    (value) => {
      setTheme(value);
    },
    [theme]
  );

  return (
    <React.Fragment>
      <section className={`${styles[`theme-${theme}`]} bg-background-primary`}>
        <Navbar onChange={handlerDarkMode} />
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
