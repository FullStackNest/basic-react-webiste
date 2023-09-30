import PageWrapper from '../../components/PageWrapper/PageWrapper'
import './Home.css'
import ImageOne from '../../assets/web-design.png';

const Home = () => {
    return (
        <PageWrapper>
            <div className="">
                <h1>Home</h1>
                <img className='img-rounded' src={ImageOne} alt='Image For web designing' />
                <img className='img-rounded' src='https://images.pexels.com/photos/18372627/pexels-photo-18372627/free-photo-of-rocky-cliff-by-the-sea-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
            </div>
        </PageWrapper>
    )
}

export default Home