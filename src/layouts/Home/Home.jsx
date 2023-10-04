
import { Cards, Title } from '@/components';
import './Home.css'
import ImageOne from '@/assets/web-design.png';



const Home = () => {
    return (
        <>
            <div className="">
                <Title title={"Home"} />
                <img className='img-rounded' src={ImageOne} alt='Image For web designing' />
                <img className='img-rounded' src='https://images.pexels.com/photos/18372627/pexels-photo-18372627/free-photo-of-rocky-cliff-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
            </div>
            <h1>Our Tour Packages</h1>

            <Cards />
        </>

    )
}

export default Home