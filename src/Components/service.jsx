import { FaArrowRight } from "react-icons/fa"

const Service=()=>{
    return(
        <div className="container-fluid text-center py-4">
            <div className="row">
                <p style={{ color: "#906E50" }} className="m-0">What We Do</p>
                <h2 className="fw-bold">The best Services We Provide</h2>
            </div>
            <div className="container mt-4" style={{ backgroundImage: "url('/servicebg.png')",backgroundSize: 'cover',backgroundPosition: 'center',}}>
                <div className="row p-5">
                    <div className="col-lg-4 col-md-6 d-flex gap-3 text-start p-3 ">
                        <div>
                            <img src="/homeservice.png" alt="" />
                        </div>
                        <div>
                            <h5 className="fw-bold">Home Interior Design</h5>
                            <p className="p2">The company specializes in modern, stylish, and functional home interior design solutions.</p>
                            <p className="p2 fw-bold">Read More <FaArrowRight className="mb-1"/></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex gap-3 text-start p-3 ">
                        <div>
                            <img src="/homeservice.png" alt="" />
                        </div>
                        <div>
                            <h5 className="fw-bold">Home Exterior Design</h5>
                            <p className="p2">Offers creative and durable home exterior design solutions tailored for modern lifestyle needs.</p>
                            <p className="p2 fw-bold">Read More <FaArrowRight className="mb-1"/></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex gap-3 text-start p-3 ">
                        <div>
                            <img src="/3d.png" alt="" />
                        </div>
                        <div>
                            <h5 className="fw-bold">2D/3D Design Layout</h5>
                            <p className="p2">Provides precise and visually engaging 2D/3D design layouts for effective project visualization.</p>
                            <p className="p2 fw-bold">Read More <FaArrowRight className="mb-1"/></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex gap-3 text-start p-3 ">
                        <div>
                            <img src="/furniture.png" alt="" />
                        </div>
                        <div>
                            <h5 className="fw-bold">Furniture's Design</h5>
                            <p className="p2">Crafts functional and aesthetic furniture designs that enhance comfort, style, and space efficiency.</p>
                            <p className="p2 fw-bold">Read More <FaArrowRight className="mb-1"/></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex gap-3 text-start p-3 ">
                        <div>
                            <img src="/modern.png" alt="" />
                        </div>
                        <div>
                            <h5 className="fw-bold">Modern Home Interior</h5>
                            <p className="p2">Creates modern home interiors blending elegance, functionality, and personalized design aesthetics seamlessly.</p>
                            <p className="p2 fw-bold">Read More <FaArrowRight className="mb-1"/></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex gap-3 text-start p-3 ">
                        <div>
                            <img src="/modern.png" alt="" />
                        </div>
                        <div>
                            <h5 className="fw-bold">Custom Design Plan</h5>
                            <p className="p2">Delivers personalized, innovative custom design plans tailored to client preferences, space, lifestyle, and functionality.</p>
                            <p className="p2 fw-bold">Read More <FaArrowRight className="mb-1"/></p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default Service