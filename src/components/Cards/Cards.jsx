import { CARD_DATA } from "../../data/CardData"
import './Cards.css'


const Cards = () => {
    return (
        <div className="row">
            <div className="col-12 col-md-6 col-lg-12 order-3 my-4 d-flex flex-wrap gap-3  justify-content-between">
                {CARD_DATA.map(item => (
                    <div key={item.id} className="card card-container">

                        <img src={item.imageURL}
                            className="card-img-top" alt="Card 1 image" />
                        <div className="card-body">
                            <h5 className="card-title">{item.cardTitle}</h5>
                            <p className="card-text">{item.cardDescription}</p>
                            <a href="#" className={`btn ${item.buttonClass}`}>Rs. {item.buttonText}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Cards