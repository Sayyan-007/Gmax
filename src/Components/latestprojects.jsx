const Latestprojects=()=>{
    return(
        <div className="container-fluid py-3">
            <div className="container">
                <div className="row align-items-center py-4">
                    <div className="col-lg-6">
                        <p style={{ color: "#906E50" }} className="m-0">latest projects</p>
                        <h2 className="fw-bold">Our Projects & Designs</h2>
                    </div>
                    <div className="col-lg-6">
                        <p className="p2">Explore our latest innovative projects and stunning interior design transformations today.</p>
                    </div>
                </div>
                <div className="row text-center text-md-start">
                    <div className="col-md-6 p-3">
                        <img src="/project 02.jpg" className="rounded-2 mw-100" style={{width:"250px"}} alt="" />
                        <h4 className="fw-bold mt-3">Home Interior</h4>
                        <p className="p2">Elegant designs that redefine home interiors.</p>
                    </div>
                    <div className="col-md-6 p-3">
                        <img src="/project 03.jpg" className="rounded-2 mw-100" style={{width:"250px"}} alt="" />
                        <h4 className="fw-bold mt-3">Living Home Decor</h4>
                        <p className="p2">Stylish living room crafted with elegance.</p>
                    </div>
                    <div className="col-md-6 p-3">
                        <img src="/project 04.jpg" className="rounded-2 mw-100" style={{width:"250px"}} alt="" />
                        <h4 className="fw-bold mt-3">Home Corner Interior</h4>
                        <p className="p2">Transform every home corner with style.</p>
                    </div>
                    <div className="col-md-6 p-3">
                        <img src="/project 01.jpg" className="rounded-2 mw-100" style={{width:"250px"}} alt="" />
                        <h4 className="fw-bold mt-3">Home Studio Interior</h4>
                        <p className="p2">Creative vibes in your studio corner.</p>
                    </div>
                </div>
            </div>
            <div className="row py-3 bg-black text-light justify-content-center text-center">
                <div className="p-3 col-lg-3 col-md-3 col-6">
                    <img src="/experience.png" alt="" />
                    <p className="m-0 my-2">Years Of Experience</p>
                    <h3 className="fw-bold">15+</h3>
                </div>
                <div className="p-3 col-lg-3 col-md-3 col-6">
                    <img src="/succes.png" alt="" />
                    <p className="m-0 my-2">Success Projects</p>
                    <h3 className="fw-bold">600+</h3>
                </div>
                <div className="p-3 col-lg-3 col-md-3 col-6">
                    <img src="/group.png" alt="" />
                    <p className="m-0 my-2">Team Members</p>
                    <h3 className="fw-bold">15+</h3>
                </div>
                <div className="p-3 col-lg-3 col-md-3 col-6">
                    <img src="/statisfied.png" alt="" />
                    <p className="m-0 my-2">Clients Satisfactions</p>
                    <h3 className="fw-bold">150+</h3>
                </div>
            </div>
        </div>
    )
}

export default Latestprojects