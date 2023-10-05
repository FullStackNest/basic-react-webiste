
import './ProductItem.css'
import PropTypes from 'prop-types';

/**
 * 
 * @param {item, imageType} item - Array of product objects , imageType: square | rounded
 * @returns Elements
 */
const ProductItem = ({ item, imageType }) => {
    return (
        <div className="custom-card d-flex align-items-center justify-content-between p-4 my-3" key={item.id}>

            <div className="details">
                <p><b>Title:</b> {item.title}</p>
                <p><b>Description:</b> {item.description}</p>
                <button type="button" className="btn btn-primary">
                    Rating <span className="badge bg-warning">{item.rating.rate}&nbsp;<i className="bi bi-star-fill"></i></span>
                </button>
            </div>
            <img className={`img-${imageType}`} src={item.image} />
        </div>
    )
}
ProductItem.propTypes = {
    item: PropTypes.object,
    imageType: PropTypes.string,
}

export default ProductItem