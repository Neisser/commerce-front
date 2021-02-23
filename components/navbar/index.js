import styles from './navbar.module.css'

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

const Navbar = ({}) => {
    return (
        <p>holi navbar</p>
    )
}

export default Navbar;