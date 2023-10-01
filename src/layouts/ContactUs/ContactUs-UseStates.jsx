import { useState } from 'react';
import './ContactUs.css'

const ContactUs = () => {
    // states => useState() hook, useRef() =>
    const [userEmail, setUserEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [tAndC, setTAndC] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userEmail, mobileNumber, address);
        console.log(tAndC);
    }
    // const handleInputChange = (e) => {
    //     setUserEmail(e.target.value)
    // }
    return (
        <>

            <h1 className='d-flex align-items-center justify-content-start'>
                <i className="text-primary bi bi-telephone-outbound-fill"></i>&nbsp;Contacts</h1>
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-5">
                    <form onSubmit={handleSubmit} className='contact-form'>
                        <h3>Have a queary feel free to reach us</h3>
                        <div className="form-group my-3">
                            <label htmlFor="userEmail" className='label'><i className="text-primary bi bi-envelope-at-fill"></i>&nbsp;EmailId:</label>
                            {/* <input name='userEmail' onChange={handleInputChange} className='form-control' type="email" placeholder='Enter your email id' /> */}
                            <input name='userEmail' onChange={(e) => setUserEmail(e.target.value)} className='form-control' type="email" placeholder='Enter your email id' />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="mobileNumber" className='label'><i className="text-primary bi bi-phone-fill"></i>&nbsp;Mobile Number:</label>
                            <input onChange={(e) => setMobileNumber(e.target.value)} className='form-control' type="text" placeholder='Enter your mobile number' />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="address" className='label'><i className="text-primary bi bi-house"></i>&nbsp;Address:</label>
                            <textarea onChange={(e) => setAddress(e.target.value)} className='form-control' type="text" placeholder='Enter your address ' />
                        </div>
                        <div className="form-group my-3">
                            <input onChange={(e) => e.target.checked ? setTAndC(e.target.value) : setTAndC('No')} type='checkbox' value="Yes" />&nbsp;<span>I accept Terms & Conditions</span>
                        </div>
                        <div className="form-group my-3">
                            <button className='btn btn-primary' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
                {/* Form divison end */}
                <div className="col-12 col-lg-6 col-xl-7">
                    {/* Space for Image Slider */}
                </div>
            </div>

        </>
    )
}

export default ContactUs