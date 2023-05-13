import '../assets/style/pages/home.scss'
import Header from '../components/Header'
import Banner from "../components/Banner";

function Home() {
    return (
        <div className='home'>
            <Header/>
            <Banner/>
        </div>
    );
}

export default Home;