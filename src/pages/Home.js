import '../assets/style/pages/home.scss'
import Header from '../components/Header'
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

function Home() {
    return (
        <div className='home'>
            <Header/>
            <Banner/>
            <Gallery/>
        </div>
    );
}

export default Home;