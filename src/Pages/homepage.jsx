import Experience from "../Components/experience"
import Hero from "../Components/hero"
import Latestprojects from "../Components/latestprojects"
import Navbar from "../Components/navbar"
import Service from "../Components/service"

const Homepage=()=>{
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Experience/>
            <Service/>
            <Latestprojects/>
        </div>
    )
}

export default Homepage
