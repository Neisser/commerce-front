// import App from 'next/app'
import React, { useCallback, useState } from 'react';
import db from 'helpers/db';

// import DexieObs from 'dexie-observable';

import Navbar from 'organism/Navbar';
import Footer from 'organism/Footer';

import CarShop from 'organism/CarShop';


// Import global style tailwidcss. Documentation: https://tailwindcss.com/
import 'tailwindcss/tailwind.css';
import styles from '../assets/styles/styles.module.css';
export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const [showModal, setShowModal] = useState(false);

  const handlerDarkMode = useCallback(
    (value) => {
      setTheme(value);
    },
    [theme]
  );
  return (
    <React.Fragment>
      <div
        className={`${
          styles[`theme-${theme}`]
        } flex flex-col max-h-screen bg-background-primary`}
      >
        <Navbar
          onChange={handlerDarkMode}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <div className="overflow-y-scroll flex-1">
          <CarShop showModal={showModal} setShowModal={setShowModal}/>
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
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
