import {  Route, Routes } from "react-router-dom"
import { Fragment } from "react"
import Homepage from "../Pages/homepage"

const WayRoute=()=>{
    return(

        <Fragment>
            <Routes>
                <Route path="" element={<Homepage/>}/>
            </Routes>
        </Fragment>

    )
}

export default WayRoute