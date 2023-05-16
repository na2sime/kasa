import '../assets/style/components/footer.scss'
import Logo from '../assets/images/logo_footer.png'

function Footer() {
    return (
        <footer className="footer">
            <img src={Logo} alt="Logo de l'entreprise"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;