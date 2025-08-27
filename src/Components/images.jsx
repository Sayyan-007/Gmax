const Images=()=>{

      const imageSources = [
        "/image2.webp",
        "/image3.webp",
        "/image4.webp",
        "/image5.webp",
        "/image6.webp",
        "/image7.webp",
        "/image9.webp",
        "/image10.webp",
        "/image11.webp",
        "/image12.webp",
        "/image13.webp",
        "/image14.webp",
        "/image15.webp",

    ];
    return(
        <div className="container-fluid">
            <div className="container py-5">
                <div className="row text-center flex-nowrap overflow-scroll scroll-container">
          {imageSources.map((src, index) => (
            <div key={index} className="col-lg-3 col-md-5 col-sm-6 col-11">
              <img
                src={src}
                className="mw-100"
                width={300}
                alt={`gallery-${index + 1}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
            </div>
        </div>
    )
}
export default Images