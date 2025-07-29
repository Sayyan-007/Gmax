import './style.css';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark p-0">
            <div className="container-fluid navbar-bg p-3">
                <a className="navbar-brand text-light fw-bold" href="#">
                    LOGO
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
                    <span className=""><img src="/menu.png" className='my-3' alt="/menu.png" /></span>
                </button>

                {/* Links - right */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-md-5">
                        <li className="nav-item">
                            <a className="nav-link text-light fw-bold" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light fw-bold" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light fw-bold" href="#service">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light fw-bold" href="#contactus">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar