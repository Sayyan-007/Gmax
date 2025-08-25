const Map=()=>{
    return(
        <div className="container-fluid">
            <div className="container">
            <div className="row justify-content-center py-5 align-items-center">
                <div className="col-lg-6 mt-2">
                    <div className="row gap-3 justify-content-center">
                        <div className="col-md-5 hovereff text-center border p-3">
                            <img className="mw-100" src="/locationus.webp" alt="" />
                            <h4 className="mt-3">Visit our office</h4>
                            <p className="p-2">Wearhouse 15, Street 24, Al Quoz, Industrial Area 4, Dubai, UAЕ.</p>
                        </div>
                        <div className="col-md-5 hovereff text-center border p-3">
                            <img className="mw-100" src="/callus.webp" alt="" />
                            <h4 className="mt-3">Phone number</h4>
                            <p className="px-2 pt-2 m-0">+971 54 4099401</p>
                            <p className="">+971 422 41388</p>
                        </div>
                        <div className="col-lg-9 col-md-5 hovereff text-center border p-3">
                            <img className="mw-100" src="/msgus.webp" alt="" />
                            <h4 className="mt-3">Email Address</h4>
                            <p className="px-2 pt-2 m-0">mgaxtechnicalworksllc@gmail.com</p>
                            <p className="">info@mgaxtechnicalworks.ae</p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 mt-2">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3602.564284708416!2d55.2366257!3d25.1172199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzAyLjAiTiA1NcKwMTQnMTEuOSJF!5e0!3m2!1sen!2sae!4v1692176400000!5m2!1sen!2sae"
                    // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.7994468292673!2d55.2168928!3d25.1377917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f695cd51e960f%3A0x82023ac99a534646!2sWareHouse%2015%20Street%2024%20Al%20Quoz%20Industrial%20Area%204%20Dubai%20UAE!5e0!3m2!1sen!2sae!4v1691234567890"
                    // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.694568939351!2d75.83089807484226!3d11.248663588947583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bbe359ced81%3A0xc17c381f72b87e02!2sHiLITE%20Mall!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin" 
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