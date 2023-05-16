import '../assets/style/pages/home.scss'
import Header from '../components/Header'
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className='home'>
            <Header/>
            <Banner/>
            <Gallery/>
            <Footer/>
        </div>
    );
}

export default Home;