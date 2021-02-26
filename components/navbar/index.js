import { useCallback } from 'react';
import { useRouter } from 'next/router';

import { language } from '../../helpers/constants';

import PropTypes from 'prop-types';
import styles from './navbar.module.css';

// const ROOT = '/';
// const routes = [
//     {
//         route: ROOT,
//         label: 'home'
//     },
//     {
//         route: '/home-section',
//         label: 'home-section'
//     }
// ];

const Navbar = (props) => {
    console.log(props);
    const router = useRouter();
    const { onChange } = props;

    const changeDarkMode = useCallback(({target: { value }}) => {
        onChange(value)
    }, []);

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
            <select onChange={changeDarkMode}>
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
            </select>

            <select onChange={changeLang}>
                {
                    language.map(({key, value}, index) => (<option key={index} value={key}>{value}</option>))
                }
            </select>
            <p>holi navbar</p>
        </>
    )
}

export default Navbar;

  