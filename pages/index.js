import React, { useEffect } from 'react';
import Paragraph from 'atoms/Paragraph';
import Heading from 'atoms/Heading';
import {
  setDataFromLocal,
  getDataFromLocal,
  Collections,
  language,
  LanguageEnum,
} from '../helpers';

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
        <div className="text-red-500">{home.title}</div>
        <Paragraph>Hello World</Paragraph>
        <Heading>Hello World</Heading>
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
