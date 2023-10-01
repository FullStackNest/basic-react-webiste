/* eslint-disable react/prop-types */



const SliderItem = ({ item }) => {
    return (
        <div className={`carousel-item ${item.id === 1 ? "active" : ""} `}>
            <img src={item.imageURL} alt={item.title} />
            <div className="carousel-caption d-none d-md-block">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default SliderItem