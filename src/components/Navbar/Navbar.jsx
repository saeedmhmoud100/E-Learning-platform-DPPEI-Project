import {Link, useNavigate} from "react-router-dom";
import './Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { updatesearchTerm } from "../../store/actions/searchActions.js";
import { useEffect } from "react";
import { removeToken } from "../../hooks/myToken.js";
import { logOut } from "../../store/actions/userActions.js";


export const Navbar = () => {
    const navigate = useNavigate()

    const {searchTerm} = useSelector((state)=>state.searchTerm);
    const {userData, logged_in} = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    
    // FUNCTION TO HANDLE SEARCH INPUT
    const handleSearchInput = (e)=>{
        dispatch(updatesearchTerm(e.target.value))
    }

    const handleSubmit = e => {
        e.preventDefault()
        navigate('/courses')
    }

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
                        {logged_in && (
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
                                    <Link to={'/courses?cat=web'} className="dropdown-item" href="#">Web
                                        Development</Link>
                                    <Link to={'/courses?cat=cyber'} className="dropdown-item"
                                          href="#">CyberSecurity</Link>
                                    <Link to={'/courses?cat=machine'} className="dropdown-item"
                                          href="#">Machine Learning</Link>
                                </div>
                            </li>
                            </>
                        )}
                        {/* {
                            userData.loggedIn ? (
                                userData.isAdmin ?
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/admin">Admin</Link>
                                    </li>
                                    : userData.isInstructor ?

                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link active" to="/courses">Courses</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link active" to="/inst-profile">inst profile</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link active" to="/videopage">videopage</Link>
                                            </li>
                                            </>
                                            :
                                            
                                            ) : null
                                            } */}
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
                        {logged_in && (
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
                                
                                {/* {
                                    userData.loggedIn ? (
                                            <>

                                                {
                                                    userData.isInstructor ?
                                                        (
                                                            <>
                                                                <li className="">
                                                                    <Link className="dropdown-item" to="/add-course">Add
                                                                        Course</Link>
                                                                </li>
                                                                <li className="">
                                                                    <Link className="dropdown-item" to="/inst-profile">inst
                                                                        profile</Link>
                                                                </li>
                                                            </>
                                                        ) :
                                                        (
                                                            
                                                        )
                                                }


                                                <li onClick={changeRule}><Link className="dropdown-item" to="#">
                                                    {userData.isAdmin ? "make instructor" : userData.isInstructor ? 'make user' : 'make admin'}
                                                </Link>
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
                                } */}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}