const Happycustomer = () => {
    return (
        <div className="container-fluid py-4" style={{backgroundColor:"#404242"}}>
            <div className="container">
                <div className="row text-center">
                    <h5 style={{ color: "#906E50" }} className="m-0">Testimonial</h5>
                    <h2 className="fw-bold text-light">Our Happy Customer</h2>
                    <p className="text-light fw-light">Which is the same as saying that we shrink from toil and pain. These cases are simple and easy to distinguish.</p>
                </div>
                <div className="row gap-3 flex-nowrap overflow-scroll scroll-container">
                    <div className="col-lg-5 col-md-7 text-start p-3" style={{backgroundColor:"white"}}>
                        <div className="d-flex align-items-center">
                            <div>
                                <img src="/p1.webp" style={{width:"80px"}} className="mw-100 rounded-circle" alt="" />
                            </div>
                            <div className="ms-3">
                                <h6>Fahad Al-Qahtani</h6>
                                <h6>Business Consultant <span className="fw-light"> (Riyadh)</span></h6>
                                
                            </div>
                        </div>
                        <div>
                            <p className="mt-3">“They turned our house into a home with elegant designs that perfectly reflect our lifestyle.”</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-7 text-start p-3" style={{backgroundColor:"white"}}>
                        <div className="d-flex align-items-center">
                            <div>
                                <img src="/p2.webp" style={{width:"80px"}} className="mw-100 rounded-circle" alt="" />
                            </div>
                            <div className="ms-3">
                                <h6>Omar Al-Shehri</h6>
                                <h6>Architect <span className="fw-light"> (Dammam)</span></h6>
                            </div>
                        </div>
                        <div>
                            <p className="mt-3">“Professional team, unique ideas, and flawless execution – couldn’t be happier with the results!”</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-7 text-start p-3" style={{backgroundColor:"white"}}>
                        <div className="d-flex align-items-center">
                            <div>
                                <img src="/p3.webp" style={{width:"80px"}} className="mw-100 rounded-circle" alt="" />
                            </div>
                            <div className="ms-3">
                                <h6>Sinan Al-Harbi</h6>
                                <h6>Marketing Manager <span className="fw-light"> (Jeddah)</span></h6>
                            </div>
                        </div>
                        <div>
                            <p className="mt-3">“Their designs beautifully balance elegance and comfort — our home feels fresh and welcoming every day.”</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-7 text-start p-3" style={{backgroundColor:"white"}}>
                        <div className="d-flex align-items-center">
                            <div>
                                <img src="/p4.webp" style={{width:"80px"}} className="mw-100 rounded-circle" alt="" />
                            </div>
                            <div className="ms-3">
                                <h6>Nasser Al-Dossary</h6>
                                <h6>Real Estate Investor <span className="fw-light"> (Dhahran)</span></h6>
                            </div>
                        </div>
                        <div>
                            <p className="mt-3">“From planning to final touch, everything was seamless and beautifully crafted.”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Happycustomer