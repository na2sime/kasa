import '../assets/style/components/banner.scss';
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function Banner() {

    const [homePage, setHomePage] = useState(true);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/about') {
            setHomePage(false);
        }
    }, [location.pathname])

    return (
        <section className={homePage ? "banner" : "banner about"}>
            {homePage && <p>Chez vous, partout et ailleurs</p>}
        </section>
    );

}

export default Banner;