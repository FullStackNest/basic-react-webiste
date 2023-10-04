
import { ImageSlider, Modal, UserForm } from '@/components' // absolute imports
import './ContactUs.css' // relative imports ../../../

const ContactUs = () => {

    return (
        <>

            <h1 className='d-flex align-items-center justify-content-start'>
                <i className="text-primary bi bi-telephone-outbound-fill"></i>&nbsp;Contacts</h1>
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-5">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactForm">
                        Open Contact Form
                    </button>
                    {/* <!-- Modal --> */}
                    <Modal modalId="contactForm">
                        <UserForm />
                    </Modal>

                </div>
                {/* Form divison end */}
                <div className="col-12 col-lg-6 col-xl-7">
                    {/* Space for Image Slider */}

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#imageSlider">
                        Open Image Slider
                    </button>
                    {/* <!-- Modal --> */}
                    <Modal modalId="imageSlider">
                        <ImageSlider />
                    </Modal>
                </div>
            </div>



        </>
    )
}

export default ContactUs