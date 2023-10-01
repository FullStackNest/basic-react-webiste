
import UserForm from '../../components/UserForm/UserForm'
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import './ContactUs.css'

const ContactUs = () => {

    return (
        <>

            <h1 className='d-flex align-items-center justify-content-start'>
                <i className="text-primary bi bi-telephone-outbound-fill"></i>&nbsp;Contacts</h1>
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-5">
                    <UserForm />
                </div>
                {/* Form divison end */}
                <div className="col-12 col-lg-6 col-xl-7">
                    {/* Space for Image Slider */}
                    <ImageSlider />
                </div>
            </div>

        </>
    )
}

export default ContactUs