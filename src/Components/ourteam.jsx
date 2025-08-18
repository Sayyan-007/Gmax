const Ourteam=()=>{
    return(
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row">
                    <p style={{ color: "#906E50" }} className=" text-center m-0">Our Team</p>
                    <h2 className="fw-bold text-center ">Meet Our Highly Professional Team</h2>
                    <div className="col-md-4 p-3 ourteamboxparent">
                        <img className=" mw-100" src="/p1.webp" alt="" />
                        <div className="p-3 ourteambox">
                            <h3 className="m-0">Daniel</h3>
                            <p>developer</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-3 ourteamboxparent">
                        <img className=" mw-100" src="/p2.webp" alt="" />
                        <div className="p-3 ourteambox">
                            <h3 className="m-0">Daniel</h3>
                            <p>developer</p>
                        </div>
                    </div>
                    <div className="col-md-4 p-3 ourteamboxparent">
                        <img className=" mw-100" src="/p3.webp" alt="" />
                        <div className="p-3 ourteambox">
                            <h3 className="m-0">Daniel</h3>
                            <p>developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourteam