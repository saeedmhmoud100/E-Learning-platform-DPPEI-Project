import React, { useState } from 'react'
import insPhoto from './images/instractorPhoto.png'
import '@fortawesome/fontawesome-free/css/all.css';

import './style.css'
const open = {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    textOverflow: 'ellipsis',
}

export default function InstProfile() {
    let [isOpen, setIsOpen] = useState(false)

    return (

        <div className="container vh-100 mt-5  ">

            <div className="container d-flex ">
                <div className="col-md-8  vh-100 ">
                    <div className="">
                        <h5>Instructor</h5>
                        <h1>Maximilian Schwarzmüller</h1>
                        <h2 className=''>AWS certified, Professional Web Developer and Instructor
                        </h2>
                        <div className='  '>
                            <div className="container-fluide ">
                                <div className='mt-3  fs-14 mb-4   p-1 row w-50 '>
                                    <p className='ins col-sm-12'>
                                        Udemy Instractor Partener
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="ins-statistics d-flex gap-5">
                            <div className="total  ">
                                <h4 className='fw-bold '>Total Students</h4>
                                <p className='fs-3 fw-bold'> 3,081,162 </p>
                            </div>
                            <div className="review ">
                                <h4 className='fw-bold'>Reviews</h4>
                                <p className='fs-3 fw-bold'>1,136,952</p>
                            </div>
                        </div>
                        <div className="details">
                            <h2 className='mb-4'>About me</h2>
                            <div className="about "  >
                                <p className='fs-12 fw-bold' >Experience as (Web) Developer</p>
                                <p style={isOpen ? null : open} className='ins-info'>
                                    Starting out at the age of 12 I never stopped learning new programming skills and languages.
                                    Early I started creating websites for friends and just for fun as well
                                    . Besides web development I also explored Python and other non-web-only languages.
                                    This passion has since lasted and lead to my decision of working as a freelance web developer and consultant.
                                    The success and fun I have in this job is immense and really keeps that passion burningly alive.
                                    <br />
                                    Starting out at the age of 12 I never stopped learning new programming skills and languages.
                                    Early I started creating websites for friends and just for fun as well
                                    . Besides web development I also explored Python and other non-web-only languages.
                                    This passion has since lasted and lead to my decision of working as a freelance web developer and consultant.
                                    The success and fun I have in this job is immense and really keeps that passion burningly alive.
                                    <br />
                                    Starting out at the age of 12 I never stopped learning new programming skills and languages.
                                    Early I started creating websites for friends and just for fun as well
                                    . Besides web development I also explored Python and other non-web-only languages.
                                    This passion has since lasted and lead to my decision of working as a freelance web developer and consultant.
                                    The success and fun I have in this job is immense and really keeps that passion burningly alive.
                                    <br />
                                    Starting out at the age of 12 I never stopped learning new programming skills and languages.
                                    Early I started creating websites for friends and just for fun as well
                                    . Besides web development I also explored Python and other non-web-only languages.
                                    This passion has since lasted and lead to my decision of working as a freelance web developer and consultant.
                                    The success and fun I have in this job is immense and really keeps that passion burningly alive.
                                    <br />
                                    Starting out at the age of 12 I never stopped learning new programming skills and languages.
                                    Early I started creating websites for friends and just for fun as well
                                    . Besides web development I also explored Python and other non-web-only languages.
                                    This passion has since lasted and lead to my decision of working as a freelance web developer and consultant.
                                    The success and fun I have in this job is immense and really keeps that passion burningly alive.

                                </p>
                                <button className='btn btn-info mb-5' onClick={() => { setIsOpen(!isOpen) }}>{isOpen ? "read less..." : "read more.."}</button>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="col-md-4  ">
                    <div className="">
                        <img src={insPhoto} className=' rounded-circle' alt='ins-photo' />
                    </div>
                    <div className="social-btn d-flex flex-wrap  ">
                        <div className=" w-100 ms-3 mt-2 border-1 mb-2   ">
                            <button className='btn  btn-outline-secondary w-50'>
                                <i class="fa-regular fa-link-simple"></i>
                                Website
                            </button>
                        </div>
                        <div className=" w-100 ms-3 mt-2 border-1 mb-2 ">
                            <button className='btn  btn-outline-secondary w-50'>
                                <i class="fa-regular fa-link-simple"></i>
                                Twitter
                            </button>
                        </div>
                        <div className=" w-100 ms-3 mt-2 border-1 mb-2 ">
                            <button className='btn  btn-outline-secondary w-50'>
                                <i class="fa-regular fa-link-simple"></i>
                                Facebook
                            </button>
                        </div>
                        <div className=" w-100 ms-3 mt-2 border-1 mb-2 ">
                            <button className='btn  btn-outline-secondary w-50'>
                                <i class="fa-regular fa-link-simple"></i>
                                Linkedin
                            </button>
                        </div>
                        <div className=" w-100 ms-3 mt-2 border-1 mb-2 ">
                            <button className='btn  btn-outline-secondary w-50'>
                                <i class="fa-regular fa-link-simple"></i>
                                Youtube
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
