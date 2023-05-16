import '../assets/style/components/collapse.scss';
import {useState} from "react";
import Arrow from "../assets/images/arrow.png";

function Collapse({title, text}) {

    const [open, setOpen] = useState(false);

    return (
        <section className="collapse">
            <h3 className='collapse_title' onClick={() => setOpen(!open)}>
                {title}
                <img className={open ? 'arrow arrow_up' : 'arrow arrow_down'} src={Arrow} alt="Ouvrir / fermer"/>
            </h3>
            <div className={open ? 'collapse_text' : 'collapse_text_hidden'}>
                {Array.isArray(text) ? text.map((item, index) => {
                    return (<p key={index}>{item}</p>)}) : text
                }
            </div>
        </section>
    );
}

export default Collapse;