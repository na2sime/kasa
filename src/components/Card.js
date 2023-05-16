import '../assets/style/components/card.scss';
import {Link} from "react-router-dom";

function Card({id, title, picture}) {
    return (
        <Link to={`/accommodation/${id}`} className="card">
            <img src={picture} alt={"Carte représentant: " + title}/>
            <h3>{title}</h3>
        </Link>
    );
}

export default Card;