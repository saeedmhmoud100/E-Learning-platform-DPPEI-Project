import {Link} from "react-router-dom";
import './Navbar.css';

export const Navbar = ({logout, changeAdmin, userData}) => {


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
                        {
                            userData.loggedIn ? (
                                userData.isAdmin ?
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/admin">Admin</Link>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/courses">Courses</Link>
                                    </li>
                            ) : null
                        }

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle active" role="button" to="" id="navbarDropdown"
                                  data-bs-toggle="dropdown">
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
                        <li className="nav-item ms-md-3 ms-auto w-100">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2 rounded-5" type="search" placeholder="Search"
                                       aria-label="Search"/>
                            </form>
                        </li>
                    </ul>

                    <ul className="navbar-nav flex-row ms-auto">
                        {
                            userData.loggedIn ?
                                <>
                                    <li className="nav-item me-3 ms-md-3">
                                        <Link className="nav-link active" aria-current="page" to="/"><i
                                            className="fa-regular fa-heart"></i></Link>
                                    </li>
                                    <li className="nav-item me-3 ">
                                        <Link className="nav-link active" to="/courses"><i
                                            className="fa-solid fa-cart-shopping"></i></Link>
                                    </li>
                                    <li className="nav-item dropdown me-3 ">
                                        <Link className="nav-link active dropdown-toggle" role="button"
                                              data-bs-toggle="dropdown" to="">
                                            <i className="fa-regular fa-bell"></i>
                                        </Link>
                                        <div className="dropdown-menu nav-dropdown-absolute">
                                            <Link className="dropdown-item" href="#">notification</Link>
                                        </div>
                                    </li>

                                </> : null
                        }
                        <li class="nav-item dropdown ms-3">
                            <Link className="nav-link active dropdown-toggle" role="button" to='' data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-regular fa-bell"></i>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><Link className="dropdown-item" to="#">Notification</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown me-3   ">
                            <Link className="nav-link active dropdown-toggle" role="button" to=''
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-regular fa-user"></i>
                            </Link>
                            <ul className="dropdown-menu nav-dropdown-absolute">
                                {
                                    userData.loggedIn ? (
                                            <>
                                                <li><Link className="dropdown-item" to="#">Profile</Link></li>
                                                <li><Link className="dropdown-item" to="#">My Courses</Link></li>
                                                <li><Link className="dropdown-item" to="#">Purchase History</Link></li>
                                                <li onClick={changeAdmin}><Link className="dropdown-item"
                                                                                to="#">{userData.isAdmin ? "make user" : 'make admin'}</Link>
                                                </li>
                                                <li onClick={logout}><Link className="dropdown-item" to="#">logout</Link>
                                                </li>
                                            </>)
                                        : (
                                            <>
                                                <li><Link className="dropdown-item" to="/login">Login</Link>
                                                </li>
                                                <li><Link className="dropdown-item" to="/register">Register</Link></li>
                                            </>)
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
