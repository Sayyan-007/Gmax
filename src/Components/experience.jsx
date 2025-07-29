const Experience = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        IMAGE
                    </div>
                    <div className="col-lg-6">
                        <p style={{ color: "#906E50" }} className="m-0">Welcome To MGAX</p>
                        <h2 className="fw-bold">Interior Design with <br />
                            Different Approach</h2>
                        <p style={{ color: "#767676" }}>We believe that every space tells a story and we’re here to design yours with creativity, 
                            precision, and vision. Our team specializes in crafting stunning interiors, immersive 3D 
                            visualizations, and innovative architectural solutions that reflect your lifestyle and 
                            aspirations. Whether it's transforming a home, visualizing a concept in 3D, or building 
                            from the ground up, we approach every project with a unique blend of functionality, aesthetics,
                             and modern design thinking.
                        </p>
                        <div className="d-flex flex-column gap-1">
                            <div className="d-flex justify-content-between">
                                <p className="m-0">Interior Design</p>
                                <p className="m-0">90%</p>
                            </div>
                            <div>
                                <img className="mw-100" src="/interiordesignBar.png" alt="" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="m-0">Architecture</p>
                                <p className="m-0">80%</p>
                            </div>
                            <div>
                                <img className="mw-100" src="/ArchitectureBar.png" alt="" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="m-0">3D Design</p>
                                <p className="m-0">95%</p>
                            </div>
                            <div>
                                <img className="mw-100" src="/3DBar.png" alt="" />
                            </div>
                        </div>
                        <button style={{ backgroundColor: "#906E50",color:"white" }} className="mt-4 p-2 px-4 border border-0">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience