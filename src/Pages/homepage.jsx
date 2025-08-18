import Experience from "../Components/experience"
import Footter from "../Components/footter"
import Happycustomer from "../Components/happycustomer"
import Hero from "../Components/hero"
import Latestprojects from "../Components/latestprojects"
import Navbar from "../Components/navbar"
import Ourteam from "../Components/ourteam"
import Service from "../Components/service"
import Whychoose from "../Components/whychoose"

const Homepage=()=>{
    return(
        <div className="mainscroll-container">
            <Navbar/>
            <Hero/>
            <Experience/>
            <Service/>
            <Latestprojects/>
            <Whychoose/>
            <Happycustomer/>
            <Ourteam/>
            <Footter/>
        </div>
    )
}

export default Homepage
