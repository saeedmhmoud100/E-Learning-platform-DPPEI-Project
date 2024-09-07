    import React, { useState } from "react";
    import insPhoto from "./images/instractorPhoto.png";
    import Courses from "./Courses";

    import "./style.css";
    import { Link } from "react-router-dom";
    const open = {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    textOverflow: "ellipsis",
    };

    export default function InstProfile(  ) {
    let [isOpen, setIsOpen] = useState(false);
    

    return (
        <div className="container vh-100 mt-5  ">
        <div className="container d-flex ">
            <div className="col-md-8  vh-100 ">
            <div className="">
                <h5>Instructor</h5>
                <h1>Maximilian Schwarzmüller</h1>
                <h2 className="">
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
                    <h4 className="fw-bold ">Total Students</h4>
                    <p className="fs-3 fw-bold"> 3,081,162 </p>
                </div>
                <div className="review ">
                    <h4 className="fw-bold">Reviews</h4>
                    <p className="fs-3 fw-bold">1,136,952</p>
                </div>
                </div>
                <div className="details">
                <h2 className="mb-4">About me</h2>
                <div className="about " style={isOpen ? null : open}>
                    <p className="fs-12 fw-bold">Experience as (Web) Developer</p>
                    <p className={!isOpen && `ins-info`}>
                    Starting out at the age of 12 I never stopped learning new
                    programming skills and languages. Early I started creating
                    websites for friends and just for fun as well . Besides web
                    development I also explored Python and other non-web-only
                    languages. This passion has since lasted and lead to my
                    decision of working as a freelance web developer and
                    consultant. The success and fun I have in this job is immense
                    and really keeps that passion burningly alive.
                    <br />
                    Starting out at the age of 12 I never stopped learning new
                    programming skills and languages. Early I started creating
                    websites for friends and just for fun as well . Besides web
                    development I also explored Python and other non-web-only
                    languages. This passion has since lasted and lead to my
                    decision of working as a freelance web developer and
                    consultant. The success and fun I have in this job is immense
                    and really keeps that passion burningly alive.
                    <br />
                    Starting out at the age of 12 I never stopped learning new
                    programming skills and languages. Early I started creating
                    websites for friends and just for fun as well . Besides web
                    development I also explored Python and other non-web-only
                    languages. This passion has since lasted and lead to my
                    decision of working as a freelance web developer and
                    consultant. The success and fun I have in this job is immense
                    and really keeps that passion burningly alive.
                    <br />
                    Starting out at the age of 12 I never stopped learning new
                    programming skills and languages. Early I started creating
                    websites for friends and just for fun as well . Besides web
                    development I also explored Python and other non-web-only
                    languages. This passion has since lasted and lead to my
                    decision of working as a freelance web developer and
                    consultant. The success and fun I have in this job is immense
                    and really keeps that passion burningly alive.
                    <br />
                    Starting out at the age of 12 I never stopped learning new
                    programming skills and languages. Early I started creating
                    websites for friends and just for fun as well . Besides web
                    development I also explored Python and other non-web-only
                    languages. This passion has since lasted and lead to my
                    decision of working as a freelance web developer and
                    consultant. The success and fun I have in this job is immense
                    and really keeps that passion burningly alive.
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
             {<Courses />}
            </div>
            </div>

            <div className="col-md-4  ">
            <div className="">
                <img src={insPhoto} className=" rounded-circle" alt="ins-photo" />
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
