// import App from 'next/app'
import React, { useCallback, useState, useEffect} from 'react';
import { tap } from 'rxjs/operators';

// import DexieObs from 'dexie-observable';

// Components
import Navbar from 'organisms/Navbar';
import Footer from 'organisms/Footer';
import CarShop from 'organisms/CarShop';
import MethodPayment from 'organisms/MethodPayment';

// Services

import { subjectPayObservable } from 'services/car-shop'


// Import global style tailwidcss. Documentation: https://tailwindcss.com/
import 'tailwindcss/tailwind.css';
import styles from '../assets/styles/styles.module.css';
export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const [ showModalCarShop, setShowModalCarShop ] = useState(false);
  const [ showModalMethodPayment, setShowModalMethodPayment ] = useState(false);
  const [ payload, setPayload ] = useState()

  useEffect(() => {
    subjectPayObservable.pipe(
      tap((payload) => {
        setPayload(payload);
        setShowModalCarShop(false)
        setShowModalMethodPayment(true)
      })
    ).subscribe()
  }, [])

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
          showModal={showModalCarShop}
          setShowModal={setShowModalCarShop}
        />
        <div className="overflow-y-scroll flex-1">
          <MethodPayment showModal={showModalMethodPayment} setShowModal={setShowModalMethodPayment} payload={payload}/>
          <CarShop showModal={showModalCarShop} setShowModal={setShowModalCarShop}/>
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
