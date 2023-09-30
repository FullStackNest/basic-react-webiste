import { FOOTER_DATA, OFFICIAL_NOTES } from '../../data/FooterData'
import './Footer.css'

const Footer = () => {
    return (
        <footer id="footer" className="footer bg-primary">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center pt-4">
                <img className="image-rounded" src="https://raw.githubusercontent.com/FullStackNest/youtube-bootstrap-p1-p2/module-import-export/imgs/logo-icon.png" alt="Logo Icon" />
                <p className="text-light px-3 footer-heading">Travel Era | Your true holiday partner</p>
                <button className="btn btn-outline-light">Book your vacation now!</button>
            </div>
            <div className="container-fluid my-4">
                <div id="footer-text-links" className="row">
                    <div className="col-md-4 col-xl-3 d-flex align-items-center justify-content-center">
                        <img className="brand-image-footer"
                            src="https://images.pexels.com/photos/5269625/pexels-photo-5269625.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Brand Promotion" />
                    </div>
                    {OFFICIAL_NOTES.map((item) => (
                        <div key={item.id} className="col-6 col-md-4 col-lg-2 d-flex flex-column">
                            {item.titles.map(title => (
                                <a key={title} href="#">{title}</a>
                            ))}
                        </div>
                    ))}

                    {/* <!-- used for border --> */}
                    <div className="col-12 divider my-4 mx-4"></div>
                    {/* <!-- 2nd row  --> */}
                    <div className="col-12">
                        <p className="text-light px-3 footer-heading">Travel Era | Your Nearby</p>
                    </div>

                    {FOOTER_DATA.map((item) => (
                        <div key={item.id} className="col-6 col-md-4 col-lg-2 d-flex flex-column">
                            {item.cities.map(city => (
                                <a key={city} href="#">{city}</a>
                            ))}
                        </div>
                    ))}

                    {/*  used for border */}
                    <div className="col-12 divider my-4 mx-4"></div>

                    <div className="col-12">
                        <p className="text-light text-center px-3">&copy;Travel Era | 2010 - 2023</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer