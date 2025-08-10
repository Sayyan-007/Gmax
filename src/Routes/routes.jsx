import {  Route, Routes } from "react-router-dom"
import { Fragment } from "react"
import Homepage from "../Pages/homepage"
import Contactus from "../Pages/contactus"

const WayRoute=()=>{
    return(

        <Fragment>
            <Routes>
                <Route path="">
                    <Route path=""  element={<Homepage/>}/>
                    <Route path="contactus" element={<Contactus/>}/>
                </Route>
            </Routes>
        </Fragment>

    )
}

export default WayRoute