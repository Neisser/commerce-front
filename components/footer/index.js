import styles from './footer.module.css'

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

const Footer = ({}) => {
    return (
        <p>holi footer</p>
    )
}

export default Footer;