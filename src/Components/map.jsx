const Map=()=>{
    return(
        <div className="container-fluid">
            <div className="container">
            <div className="row justify-content-center py-5 align-items-center">
                <div className="col-lg-6 mt-2">
                    <div className="row gap-3 justify-content-center">
                        <div className="col-md-5 text-center border p-3">
                            <img className="mw-100" src="/locationus.png" alt="" />
                            <h4 className="mt-3">Visit our office</h4>
                            <p className="p-2">93X Hilgard Ave, Los Angeles, CA 900XX, United States.</p>
                        </div>
                        <div className="col-md-5 text-center border p-3">
                            <img className="mw-100" src="/msgus.png" alt="" />
                            <h4 className="mt-3">Email Address</h4>
                            <p className="px-2 pt-2 m-0">example@exdosstudio.com</p>
                            <p className="">example@exdosstudio.com</p>
                        </div>
                        <div className="col-md-5 text-center border p-3">
                            <img className="mw-100" src="/callus.png" alt="" />
                            <h4 className="mt-3">Phone number</h4>
                            <p className="px-2 pt-2 m-0">+1-2353-4352-555</p>
                            <p className="">01 (541) 258 360</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 mt-2">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.694568939351!2d75.83089807484226!3d11.248663588947583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bbe359ced81%3A0xc17c381f72b87e02!2sHiLITE%20Mall!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin" 
                    className="mw-100"
                    allowFullScreen=""
                    height={400}
                    width={500}
                    loading="lazy"
                    frameborder="0">
                    </iframe>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Map