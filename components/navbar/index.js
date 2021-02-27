import { useCallback } from 'react';
import { useRouter } from 'next/router';

import { language } from '../../helpers/constants';

import PropTypes from 'prop-types';
import styles from './navbar.module.css';


const ROOT = '/';
const routes = [
    {
        route: ROOT,
        label: 'home'
    },
    {
        route: '/home-section',
        label: 'home-section'
    }
];

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
            {/* <select onChange={changeDarkMode}>
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
            </select>

            <select onChange={changeLang}>
                {
                    language.map(({key, value}, index) => (<option key={index} value={key}>{value}</option>))
                }
            </select>
            <p>holi navbar</p> */}
                <nav className="bg-white-800 border-b-2 border-black-800 ">
                     <div className="max-w mx-4">
                        <div className="mx-0 relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:show">
               
                            <button type="button" className="inline-flex items-center justify-center p-0 mx-0 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="" fill="auto" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start mx-20">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block h-8 w-auto" src="" alt="Clusthers"/>
                                <img className="hidden  h-8 w-auto" src="" alt="Clusthers"/>
                            </div>
                         </div>          
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-5">
                            <button className="bg-white p-1 rounded-full  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="auto" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path /><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                                </svg>
                            </button>
                <div className="ml-3 relative">
                <div>
                    <button class="bg-white flex text-sm rounded-full focus:outline-none ml-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                        <span class="sr-only">Open user menu</span>
                        <svg className="h-7 w-7s" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zx" />
                        </svg>
                    </button>
                </div>
                {/* <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                </div> */}
                </div>
            </div>
            </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:show" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Productos</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tiendas</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cuenta</a>
            {/* <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a> */}
            </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar;

