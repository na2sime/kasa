import '../assets/style/pages/notfound.scss'
import Header from '../components/Header'
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className='notfound'>
            <Header/>
            <main className="notfound_main">
                <h1 className='notfound_title'>404</h1>
                <p className='notfound_text'>La page que vous recherchez n'existe pas.</p>
            </main>
            <Link className='notfound_return' to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default NotFound;