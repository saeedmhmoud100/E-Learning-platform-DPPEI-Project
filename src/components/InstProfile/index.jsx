import React, {useState ,useEffect} from "react";
/* import insPhoto from "./images/instractorPhoto.png";
import Courses from "./Courses"; */
import { useSelector , useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import {getInstructorProfile} from '../../store/actions/instructorAction'

import "./style.css";
import {Link} from "react-router-dom";

const open = {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    textOverflow: "ellipsis",
};
const imageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
  };

export default function InstProfile() {
    const {id} = useParams();
    let [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const {instructor} = useSelector(state => state.instructor)
    useEffect(() => {
        const fetchData = async () => {
          if (id) {           
             await dispatch(getInstructorProfile(id)); 
    
            
        }
        };
        fetchData();
}, [id, dispatch]);






    
    
    return (
        <div className="container w-85 mt-5  ">
            <div className="container w-85 d-flex ">
                <div className="col-md-8  ">
                    <div className="">
                        <h5>Instructor</h5>
                        <h1 className="font-size-40">{instructor?.user?.username}</h1>
                        <h2 className="font-size-16">
                            AWS certified, Professional Web Developer and Instructor
                        </h2>

                        <div className="container-fluide ">
                            <div className="row">
                                <div className="mt-3 col-sm-12 fs-14 mb-4  d-flex ">
                                    <p className="ins   flex-shrink-0 ">
                                        Udemy Instractor Partener
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="ins-statistics d-flex gap-5">
                            <div className="total  ">
                                <h4 className="fw-bold h4-style">Total Students</h4>
                                <p className="fs-3 fw-bold"> 3,081,162 </p>
                            </div>
                            <div className="review ">
                                <h4 className="fw-bold h4-style">Reviews</h4>
                                <p className="fs-3 fw-bold">1,136,952</p>
                            </div>
                        </div>
                        <div className="details">
                            <h2 className="mb-4 font-size-16">About me</h2>
                            <div className="about " style={isOpen ? null : open}>
                                <p className="fs-12 fw-bold">Experience as (Web) Developer</p>
                                <p className={!isOpen && `ins-info`}>
                                    {instructor?.user?.description}
                                </p>

                            </div>
                            <button
                                className="btn btn-link fs-5"
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                            >
                                {isOpen ? "read less..." : "read more.."}
                            </button>
                        </div>
                        {}
                        <Link to='/inst-profile/all-courses' className='text-decoration-none'>
                            <button  className='btn btn-dark m-auto d-block my-4'>All Courses</button>
                        </Link>
                    </div>
                </div>

                <div className="col-md-4  ">
                    <div className="">
                        <img src={instructor?.user?.profile_image} className="rounded-circle" style={imageStyle} alt="ins-photo"/>
                    </div>
                    <div className="social-btn d-flex flex-wrap  ">
                        <div className=" w-100 ms-3 mt-2 border-1 mb-2   ">
                            <Link to="#" className="btn  btn-outline-secondary w-50">
                                <i className="fa-solid fa-link me-2"></i>
                                Website
                            </Link>
                        </div>
                        <div className=" w-100 ms-3 mt-2 border-1 mb-2 ">
                            <Link to="#" className="btn  btn-outline-secondary w-50">
                                <i class="fa-brands fa-twitter me-3"></i>
                                Twitter
                            </Link>
                        </div>
                        <div className=" w-100 ms-3 mt-2 border-1 mb-2 ">
                            <Link to="#" className="btn  btn-outline-secondary w-50">
                                <i class="fa-brands fa-facebook me-3"></i>
                                Facebook
                            </Link>
                        </div>
                        <div className=" w-100 ms-3 mt-2 border-1 mb-2 ">
                            <Link to="#" className="btn  btn-outline-secondary w-50">
                                <i class="fa-brands fa-linkedin me-3"></i>
                                Linkedin
                            </Link>
                        </div>
                        <div className=" w-100 ms-3 mt-2 border-1 mb-2 ">
                            <Link to="#" className="btn  btn-outline-secondary w-50">
                                <i class="fa-brands fa-youtube me-3"></i>
                                Youtube
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
