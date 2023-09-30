
import { useParams } from 'react-router-dom'
import './AllServices.css'

const AllServices = () => {
    const { subPageId } = useParams()
    return (

        <div>
            <h1>AllServices</h1>
            <h2>{subPageId}</h2>
        </div>

    )
}

export default AllServices