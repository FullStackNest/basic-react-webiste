import './Loading.css';

const Loading = () => {
    return (
        <div className="loader d-flex align-items-center flex-column justify-content-center">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            <h1>Loading...</h1>
        </div>
    )
}

export default Loading