const Hero = () => {
    return (
        <div className="container-fluid navbar-bg">
            <div className="container py-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 text-light text-start py-5">
                        <h1>
                            <b>Creating Spaces <br />
                            Through</b>
                            <i className="fw-light"> Innovative <br />
                             Design.</i>
                        </h1>
                        <p>Welcome to GMAX, crafting timeless interiors that tell your story. Discover <br />
                         a world where design meets emotion.</p>
                        <button className="p-2 px-4 border border-0" style={{color:"#906E50"}}>ABOUT US</button>
                    </div>
                    <div className="col-md-6 w-0 mw-100 pb-4" >
                        <img src="/hero page 02.jpg" className="rounded-2 mw-100" style={{width:"500px"}} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero