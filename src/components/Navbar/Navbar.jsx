import {Link, useNavigate} from "react-router-dom";
import './Navbar.css';
import { updatesearchTerm } from "../../store/actions/searchActions.js";
import { useEffect } from "react";
import { logOut } from "../../store/actions/userActions.js";
import { useDispatch, useSelector } from "react-redux";
import { getToken, removeToken } from "../../hooks/myToken.js";

export const Navbar = ({updateCategory}) => {
    const navigate = useNavigate()

    const {searchTerm} = useSelector((state)=>state.searchTerm);
    const {userData, logged_in} = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    
    // FUNCTION TO HANDLE SEARCH INPUT
    const handleSearchInput = (e)=>{
        dispatch(updatesearchTerm(e.target.value))
    }

    // FUNCTION TO HANDLE SEARCH FORM SUBMIT
    const handleSubmit = e => {
        e.preventDefault()
        navigate('/courses')
    }

    // LOGOUT FUNCTION
    const logout = ()=>{
        dispatch(logOut());
        removeToken();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark p-3 position-relative">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">EduVerse</Link> {/*will be replaced with a logo*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {getToken() && (
                            <>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/my-courses">My Courses</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/courses">Courses</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" role="button"
                                      to="/courses"
                                      id="navbarDropdown"
                                      data-bs-toggle="dropdown">
                                    Categories
                                </Link>
                                <div className="dropdown-menu nav-dropdown-absolute"
                                     aria-labelledby="navbarDropdown">
                                    <button onClick={(e)=>updateCategory(e.target.textContent)} className="dropdown-item">Web Development</button>
                                    <button onClick={(e)=>updateCategory(e.target.textContent)} className="dropdown-item">Java</button>
                                    <button onClick={(e)=>updateCategory(e.target.textContent)} className="dropdown-item">Python</button>
                                    <button onClick={(e)=>updateCategory(e.target.textContent)} className="dropdown-item">C++</button>
                                    <button onClick={(e)=>updateCategory(e.target.textContent)} className="dropdown-item">JavaScript</button>
                                </div>
                            </li>
                            </>
                        )}
                    </ul>

                    <ul className="navbar-nav w-50">
                        <li className="nav-item ms-md-3 ms-auto w-100">
                            <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                                <input className="form-control mr-sm-2 rounded-5" type="search" placeholder="Search"
                                       aria-label="Search" onChange={handleSearchInput}/>
                            </form>
                        </li>
                    </ul>

                    <ul className="navbar-nav flex-row ms-auto">
                        {getToken() && (
                            <>
                            <li className="nav-item me-3 ms-md-3">
                                <Link className="nav-link active" aria-current="page" to="/"><i
                                    className="fa-regular fa-heart"></i></Link>
                            </li>
                            <li className="nav-item me-3 ">
                                <Link className="nav-link active" to="/cart"><i
                                    className="fa-solid fa-cart-shopping"></i></Link>
                            </li>
                            </> 
                        )}
                        <li className="nav-item dropdown me-3 ">
                            <Link className="nav-link active dropdown-toggle" role="button"
                                  data-bs-toggle="dropdown" to="" aria-expanded="false">
                                <i className="fa-regular fa-bell"></i>
                            </Link>
                            <div className="dropdown-menu nav-dropdown-absolute">
                                <Link className="dropdown-item" href="#">notification</Link>
                            </div>
                        </li>

                        <li className="nav-item dropdown me-3">
                            <Link className="nav-link active dropdown-toggle" role="button" to=''
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-regular fa-user"></i>
                            </Link>
                            <ul className="dropdown-menu nav-dropdown-absolute">
                                {logged_in ? (
                                    <>
                                    <li><Link className="dropdown-item"
                                              to="/profile">Profile</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="/my-courses">My
                                        Courses</Link></li>
                                    <li><Link className="dropdown-item"
                                              to="/profile/purchase-history">Purchase History</Link></li>
                                    <li onClick={logout}><Link className="dropdown-item" to="/login">Logout</Link></li>
                                    </>
                                ):(
                                    <>
                                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                    <li><Link className="dropdown-item" to="/register">Register</Link></li>
                                    </>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}