import '../assets/style/components/slideshow.scss'
import {useState} from 'react'
import ArrowRight from '../assets/images/chevron_carousel_right.png'
import ArrowLeft from '../assets/images/chevron_carousel_left.png'

function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex === imageSlider.length - 1 ? 0 : currentIndex + 1)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? imageSlider.length - 1 : currentIndex - 1);
    }

    return (
        <section style={{backgroundImage: `url(${imageSlider[currentIndex]})`}} className='carousel'>
            {imageSlider.length > 1 &&
                <>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img className='carousel_arrow carousel_arrow_right' src={ArrowRight} alt="Image suivante"
                         onClick={nextSlide}/>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img className='carousel_arrow carousel_arrow_left' src={ArrowLeft} alt="Image précédente"
                         onClick={prevSlide}/>
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            }
        </section>
    )
}

export default Slider;