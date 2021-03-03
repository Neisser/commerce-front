import React, { useEffect } from 'react';
import Carousel from 'molecules/Carousel';
import Image from 'atoms/Image';
import {
  setDataFromLocal,
  getDataFromLocal,
  Collections,
  language,
  LanguageEnum,
} from '../helpers';

const products = [
  {
    src: 'https://via.placeholder.com/349/92c952',
  },
  {
    src: 'https://via.placeholder.com/349/771796',
  },
  {
    src: 'https://via.placeholder.com/349/24f355',
  },
  {
    src: 'https://via.placeholder.com/349/d32776',
  },
];

export default function Home(props) {
  // DECLARATIONS
  const {
    languageObject: { home },
    locale,
  } = props;

  // HOOKS
  useEffect(() => {
    setDataFromLocal(Collections.SETTINGS, { lan: locale });
  }, []);

  return (
    <>
      <article className="sm:grid grid-cols-5 bg-white shadow-sm p-7 relative lg:max-w-2xl sm:p-4 rounded-lg lg:col-span-2 lg:ml-20">
        <Carousel>
          {products.map((product) => (
            <Image src={product.src} />
          ))}
        </Carousel>
      </article>
    </>
  );
}

/**
 *
 * @param {locale} param0 Get value locale from props when the page is loaded static.
 */
export async function getStaticProps({ locale }) {
  console.log(locale);
  // const data = getDataFromLocal(Collections.SETTINGS);
  const findLanguage = language.find((language) => language.key === locale);
  const _locale = findLanguage.key ?? LanguageEnum.ES;
  const response = await import(`../assets/lang/${_locale}.json`);
  return {
    props: {
      languageObject: response.default.section,
      locale: _locale,
      darkMode: true,
    },
  };
}
