import { FaFacebook, FaHome, FaInstagramSquare, FaLocationArrow } from "react-icons/fa"
import { FaInstagram, FaPhotoFilm, FaSquareInstagram } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footter = () => {
    return (
        <div className="container-fluid py-4" style={{ backgroundColor: "#080A0B" }}>
            <div className="container py-4">
                <div className="row text-light">
                    <div className="col-lg-3 col-md-6">
                        <h1 className="fw-bolder ">MGAX</h1>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="mt-3 fw-bold">Quick Links</h4>
                        <div className="d-flex mt-4 flex-column gap-2">
                            <Link className="nav-link fs-5" to='/'> <FaHome className="mb-1"/> &nbsp; Home</Link>
                            <Link className="nav-link fs-5" to='/gallery'><FaPhotoFilm className="mb-1"/> &nbsp; Gallery</Link>
                            <Link className="nav-link fs-5" to='/contactus'><FaLocationArrow/> &nbsp; Contact</Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h4 className="mt-3 fw-bold">Contact Us</h4>
                        <div className="d-flex align-items-center mt-4">
                            <div>
                                <img src="/phone.webp" className="mw-100" alt="" />
                            </div>
                            <div className="ms-3">
                                <p className="m-0">Phone Number</p>
                                <p className="m-0">+971 54 409 9401</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <div>
                                <img src="/mail.webp" className="mw-100" alt="" />
                            </div>
                            <div className="ms-3">
                                <p className="m-0">Email Address</p>
                                <p className="m-0">info@mgaxtechnicalworks.ae</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <div>
                                <img src="/map.webp" className="mw-100" alt="" />
                            </div>
                            <div className="ms-3">
                                <p className="m-0">Location</p>
                                <p className="m-0">Wearhouse 15, Street 24, <br /> Al Quoz, Industrial Area 4.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="mt-3 fw-bold">Social Media</h4>
                        <div className="d-flex align-items-center mt-4">
                            <div>
                                <FaFacebook className="fs-4" />
                            </div>
                            <div className="ms-3">
                                <p className="m-0">FaceBook</p>
                                <p className="m-0">MgaxTech</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <div>
                                <FaSquareInstagram className="fs-4" />
                            </div>
                            <div className="ms-3">
                                <p className="m-0">Instagram</p>
                                <p className="m-0">Mgax_Tech</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footter