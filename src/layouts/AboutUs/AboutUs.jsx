import './AboutUs.css'

import { toast } from 'react-toastify';
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';
import { useEffect, useState } from 'react';

const AboutUs = () => {
    const { width, height } = useWindowSize();
    console.log(width, height);
    const [showSparkle, setShowSparkle] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowSparkle(false);
        }, 5000);
    }, [showSparkle]);

    const handleToast = () => {
        toast('You clicked me')
    }
    const handleSparkles = () => {
        setShowSparkle(true)
    }
    return (
        <div>
            <h1>AboutUs</h1>
            <button className='btn btn-primary' onClick={handleToast}>Check About Us</button>
            <button className='btn btn-primary mx-3' onClick={handleSparkles}>Show Sparkles</button>
            {/* <ToastContainer position="top-center" /> */}
            {showSparkle && (<Confetti
                gravity={0.4}
                tweenDuration={5000}
                width={width - 50}
                height={height}
            />)}
        </div>
    )
}

export default AboutUs