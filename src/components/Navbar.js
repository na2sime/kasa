import '../assets/style/components/navbar.scss'
import { Link } from 'react-router-dom'
function Navbar() {

    const currentRoute = window.location.pathname;

    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li className={currentRoute === '/home' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/home'>
                        Accueil
                    </Link>
                </li>
                <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/about'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;