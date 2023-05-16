import '../assets/style/components/gallery.scss';
import Card from "./Card";
import data from '../data/logements';

function Gallery() {
    return (
        <main className="gallery">
            {data.map((logement, index) => {
                return (
                    <Card
                        key={index}
                        id={logement.id}
                        title={logement.title}
                        picture={logement.cover}
                    />
                );
            })}
        </main>
    );
}

export default Gallery;