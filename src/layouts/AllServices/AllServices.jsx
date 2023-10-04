
import { useParams } from 'react-router-dom'
import './AllServices.css'
import { Facebook, YouTube } from '@/assets/icons'
// import Facebook from '@/assets/icons/'

const AllServices = () => {
    const { subPageId } = useParams()
    return (

        <div>
            <h1>AllServices</h1>
            <h2>{subPageId}</h2>
            <img className='small-img' src={Facebook} />
            <img className='small-img' src={YouTube} />
        </div>

    )
}

export default AllServices