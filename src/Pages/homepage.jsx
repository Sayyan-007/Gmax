import Experience from "../Components/experience"
import Hero from "../Components/hero"
import Navbar from "../Components/navbar"
import Service from "../Components/service"

const Homepage=()=>{
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Experience/>
            <Service/>
        </div>
    )
}

export default Homepage
