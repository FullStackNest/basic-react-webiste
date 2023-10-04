import { SLIDER_DATA } from '@/data/SliderData'

import './ImageSlider.css'
import { SliderItem } from '@/components'

const ImageSlider = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {SLIDER_DATA.map(item => (
                    <button key={item.id} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={String(item.id - 1)} className={item.id === 1 ? "active" : ""} aria-current={item.id === 1 ? "true" : "false"} aria-label={`Slide ${item.id}`}></button>
                ))}
            </div>
            <div className="carousel-inner">
                {SLIDER_DATA.map(item => (
                    <SliderItem key={item.id} item={item} />
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default ImageSlider