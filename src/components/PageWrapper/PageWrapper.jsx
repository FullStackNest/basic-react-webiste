import './PageWrapper.css';
import PropTypes from 'prop-types';

const PageWrapper = ({ children }) => {
    return (
        <div className='page-wrapper-container'>
            {children}
        </div>
    )
}

PageWrapper.propTypes = {
    children: PropTypes.node,
}
export default PageWrapper