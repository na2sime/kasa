import '../assets/style/pages/accomodation.scss'
import greyStar from '../assets/images/grey_star.png';
import redStar from '../assets/images/red_star.png';
import data from '../data/logements';
import Header from '../components/Header'
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Slider from "../components/Slideshow";
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import NotFound from "./NotFound";

function Accommodation() {

    const urlId = window.location.pathname.substr(15);
    const goodId = data.find((logement) => logement.id === urlId);

    const [imageSlider, setImageSlider] = useState([]);

    const idAccommodation = useParams('id').id;
    const dataCurrentAccommodation = data.filter(data => data.id === idAccommodation);

    useEffect(() => {
        if (goodId) {
            const dataCurrentAccommodation = data.filter(data => data.id === idAccommodation);
            setImageSlider(dataCurrentAccommodation[0].pictures);
        }
    }, [goodId, idAccommodation]);

    if (!goodId) {
        return <NotFound/>
    } else {
        const name = dataCurrentAccommodation[0].host.name.split(' ');
        const rating = dataCurrentAccommodation[0].rating;
        const description = dataCurrentAccommodation[0].description;
        const equipments = dataCurrentAccommodation[0].equipments;
        return (
            <div className="accommodations">
                <Header/>
                <Slider imageSlider={imageSlider}/>
                <main className="accommodation">
                    <div className="accommodation_content">
                        <div className="accommodation_content_infos">
                            <h1>{dataCurrentAccommodation[0].title}</h1>
                            <p>{dataCurrentAccommodation[0].location}</p>
                            <div>
                                {dataCurrentAccommodation[0].tags.map((tag, index) => {
                                    return (
                                        <button key={index}>{tag}</button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="accommodation_content_host">
                            <div>
                                <div className='accommodation_content_host_name'>
                                    <span>{name[0]}</span>
                                    <span>{name[1]}</span>
                                </div>
                                <img src={dataCurrentAccommodation[0].host.picture} alt="propriétaire du bien"/>
                            </div>

                            <div className="accommodation_content_host_stars">
                                {[...Array(5)].map((star, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <img key={index} src={ratingValue <= rating ? redStar : greyStar}
                                             alt="star"/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="accommodation_collapse">
                        <div className="accommodation_collapse_item">
                            <Collapse title={'Description'} text={description}/>
                        </div>
                        <div className="accommodation_collapse_item">
                            <Collapse title={'Équipements'} text={equipments}/>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Accommodation;