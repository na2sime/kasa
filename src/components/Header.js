import '../assets/style/components/header.scss'
import Logo from '../assets/images/logo.png'
import Navbar from './Navbar'

function Header() {
    return (
        <header className='header'>
            <h1>
                <img src={Logo} alt="représentant kasa, une agence de location d'appartement"/>
            </h1>
            <Navbar/>
        </header>
    )
}

export default Header;