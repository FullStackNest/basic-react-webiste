import { useState } from 'react';
import './UserForm.css'

const UserForm = () => {
    // states => useState() hook, useRef() =>
    const [userInputs, setUserInputs] = useState({
        userEmail: '',
        mobileNumber: '',
        address: '',
        bookingLocation: '',
        tAndC: 'No',
    })
    const [actualProfilePictureFile, setActualProfilePictureFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInputs);
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInputs(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleInputCheckBox = (e) => {
        const { name, checked } = e.target;
        setUserInputs(prev => {
            return {
                ...prev,
                [name]: checked ? 'Yes' : 'No'
            }
        })
    }

    const handleInputFile = (e) => setActualProfilePictureFile(URL.createObjectURL(e.target.files[0]));


    function resetImage() {
        setActualProfilePictureFile(null);
    }

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <h3>Have a queary feel free to reach us</h3>
            <div className="form-group my-3">
                <label htmlFor="userEmail" className='label'><i className="text-primary bi bi-envelope-at-fill"></i>&nbsp;EmailId:</label>
                {/* <input name='userEmail' onChange={handleInputChange} className='form-control' type="email" placeholder='Enter your email id' /> */}
                <input name='userEmail' onChange={handleInputChange} className='form-control' type="email" value={userInputs.userEmail} placeholder='Enter your email id' />
            </div>
            <div className="form-group my-3">
                <label htmlFor="mobileNumber" className='label'><i className="text-primary bi bi-phone-fill"></i>&nbsp;Mobile Number:</label>
                <input name='mobileNumber' value={userInputs.mobileNumber} onChange={handleInputChange} className='form-control' type="text" placeholder='Enter your mobile number' />
            </div>
            <div className="form-group my-3">
                <label htmlFor="address" className='label'><i className="text-primary bi bi-house"></i>&nbsp;Address:</label>
                <textarea value={userInputs.address} name='address' onChange={handleInputChange} className='form-control' type="text" placeholder='Enter your address ' />
            </div>
            <div className="form-group my-3">
                <label htmlFor="bookingLocation" className='label'><i className="text-primary bi bi-bookmark-heart-fill"></i>&nbsp;Book Your Location:</label>
                <select onChange={handleInputChange} name="bookingLocation" className='form-control'>
                    <option>Select your Booking Location</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Chennai">Chennai</option>
                </select>
            </div>
            <div className="form-group my-3">
                <label htmlFor="profilePicture" className='label'><i className="text-primary bi bi-file-earmark-person"></i>&nbsp;Upload your profile picture</label>
                <input name='profilePicture' onChange={handleInputFile} className='form-control' type="file" />
                {actualProfilePictureFile !== null && (
                    <div className="">
                        <img src={actualProfilePictureFile} className='img-rounded' alt='User profile image' />
                        <button onClick={resetImage} title='Delete or Reset Image' className='btn btn-primary'><i className="bi bi-trash-fill"></i></button>
                    </div>
                )}
            </div>

            <div className="form-group my-3">
                <input onChange={handleInputCheckBox} type='checkbox' value={userInputs.tAndC} name='tAndC' />&nbsp;<span>I accept Terms & Conditions</span>
            </div>

            <div className="form-group my-3">
                <button className='btn btn-primary' type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default UserForm