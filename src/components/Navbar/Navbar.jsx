import {Link} from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark p-3 position-relative">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">EduVerse</a> {/*will be replaced with a logo*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/admin">Admin</Link>
                        </li>

                        {/*Categories dropdown menu not working*/}
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" href="#">Web Development</Link>
                            <Link className="dropdown-item" href="#">CyberSecurity</Link>
                            <Link className="dropdown-item" href="#">Machine Learning</Link>
                            </div>
                        </li>
                    </ul>

                    <ul className="navbar-nav w-50">
                        <li className="nav-item ms-3 w-100">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2 rounded-5" type="search" placeholder="Search" aria-label="Search"/>
                            </form>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ms-3">
                            <Link className="nav-link active" aria-current="page" to="/"><i className="fa-regular fa-heart"></i></Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link active" to="/courses"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </li>

                        {/*Notification dropdown menu not working*/}
                        <li className="nav-item dropdown ms-3">
                            <Link className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="">
                                <i className="fa-regular fa-bell"></i>
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" href="#">notification</Link>
                            </div>
                        </li>

                        {/*Profile dropdown menu not working*/}
                        <li className="nav-item dropdown ms-3">
                            <Link className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="">
                            <i className="fa-regular fa-user"></i>
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" href="#">Profile</Link>
                                <Link className="dropdown-item" href="#">My Courses</Link>
                                <Link className="dropdown-item" href="#">Purchase History</Link>
                                <Link className="dropdown-item" href="#">LogOut</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
