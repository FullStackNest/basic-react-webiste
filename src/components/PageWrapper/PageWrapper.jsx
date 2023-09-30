import './PageWrapper.css';

// eslint-disable-next-line react/prop-types
const PageWrapper = ({ children }) => {
    return (
        <div className='page-wrapper-container'>
            {children}
        </div>
    )
}

export default PageWrapper