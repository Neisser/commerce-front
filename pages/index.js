import { useRouter } from 'next/router';
import { language } from '../helpers/constants'

export default function Home(props) {
  const router = useRouter();
  const { lang: { home } } = props;
  /**
   * 
   * @param {value} param0 get language value to generate content about your chooice
   */
  const changeLang = ({target: {value}}) => {
    const lang = value;
    router.push(router.pathname, router.pathname, {
      locale: lang
    })
  }

  return (
    <>
      <select onChange={changeLang}>
        {
          language.map(({key, value}, index) => (<option key={index} value={key}>{value}</option>))
        }
      </select>
      <article className="sm:grid grid-cols-5 bg-white shadow-sm p-7 relative lg:max-w-2xl sm:p-4 rounded-lg lg:col-span-2 lg:ml-20">
        <div className="text-red-500">{home.title}</div>
      </article>
    </>
  )
}

/**
 * 
 * @param {locale} param0 Get value locale from props when the page is loaded
 */
export async function getStaticProps({locale}) {
  const response = await import(`../assets/lang/${locale}.json`);
  return {
    props:{
      lang: response.default.section
    }
  }
}