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

