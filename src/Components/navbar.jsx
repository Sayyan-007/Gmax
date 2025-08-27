import { Link } from 'react-router-dom';
import './style.css';
const Navbar = () => {


    let bgc = "linear-gradient(to right, #8a5a33, #3d3d3d)"
    let text =  'white'

    return (
        <nav className="navbar navbar-expand-md p-0">
            <div className="container-fluid  p-3" style={{background:bgc,color:text}}>
                <a className="navbar-brand fw-bold ms-0 ms-sm-5" style={{color:text}} href="#">
                    <img src="/icon1.webp" style={{width:"100px"}} className='text-center mw-100'  loading="lazy" decoding="async" alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className=""><img src="/menu.webp" style={{width:"40px"}} className='my-3' alt="/menu.webp" loading="lazy" decoding="async"/></span>
                </button>

                {/* Links - right */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-3 gap-md-5 mt-4 align-items-cente ms-0 ms-sm-5 me-5">
                        <li className="nav-item">
                            <Link className='text-decoration-none fw-bold' style={{color:text}} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='text-decoration-none fw-bold' style={{color:text}} to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='text-decoration-none fw-bold' style={{color:text}} to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar