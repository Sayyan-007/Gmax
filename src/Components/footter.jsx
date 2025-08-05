import { FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { FaInstagram, FaSquareInstagram } from "react-icons/fa6"

const Footter=()=>{
    return(
        <div className="container-fluid py-4" style={{backgroundColor:"#080A0B"}}>
            <div className="container">
                <div className="row text-light">
                    <div className="col-lg-3 col-md-6">
                        <h1 className="fw-bolder">MGAX</h1>
                    </div>
                    <div className="col-lg-3 col-md-6">s</div>
                    
                    <div className="col-lg-3 col-md-6">
                        <h4>Contact Us</h4>
                        <div className="d-flex align-items-center mt-4">
                            <div>
                                <img src="/phone.png" className="mw-100" alt="" />
                            </div>
                            <div className="ms-3">
                                <p className="m-0">Phone Number</p>
                                <p className="m-0">+888 (123) 869523</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <div>
                                <img src="/mail.png" className="mw-100" alt="" />
                            </div>
                            <div className="ms-3">
                                <p className="m-0">Email Address</p>
                                <p className="m-0">abc@gmail.com</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <div>
                                <img src="/map.png" className="mw-100" alt="" />
                            </div>
                            <div className="ms-3">
                                <p className="m-0">Location</p>
                                <p className="m-0">1058 Helton Ave, Berlin.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4>Social Media</h4>
                        <div className="d-flex align-items-center mt-4">
                            <div>
                                <FaFacebook className="fs-4"/>
                            </div>
                            <div className="ms-3">
                                <p className="m-0">FaceBook</p>
                                <p className="m-0">MgaxTech</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-4">
                            <div>
                                <FaSquareInstagram className="fs-4"/>
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