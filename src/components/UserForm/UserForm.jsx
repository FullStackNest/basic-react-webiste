import { useState } from 'react'

const UserForm = () => {
    // states => useState() hook, useRef() =>
    const [userInputs, setUserInputs] = useState({
        userEmail: '',
        mobileNumber: '',
        address: '',
        tAndC: 'No',
    })
    // const [userEmail, setUserEmail] = useState('');
    // const [mobileNumber, setMobileNumber] = useState('');
    // const [address, setAddress] = useState('');
    // const [tAndC, setTAndC] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(userEmail, mobileNumber, address);
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
                <input onChange={handleInputCheckBox} type='checkbox' value={userInputs.tAndC} name='tAndC' />&nbsp;<span>I accept Terms & Conditions</span>
            </div>
            <div className="form-group my-3">
                <button className='btn btn-primary' type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default UserForm