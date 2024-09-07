import React from 'react';
import CourseCards from '../../components/CourseCards';
import Footer from '../../components/Footer/index.jsx';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
  return (
    
    <>
    <div className='container my-5'>

        {/* START - FIRST SECTION WITH IMAGES AND WELCOME MESSAGE */}
        <div className="d-flex justify-content-start align-items-center py-3">
            <div className="img-cont">
                <img src="/images/pfp.png" alt="profile picture EduVerse" className='w-100 h-100'/>
            </div>
            <div className="text-cont ps-4">
                <h2>Welcome back, User!</h2>
                <Link to=''>add occupations and interest</Link>
            </div>
        </div>

        <div className="py-5 position-relative">
            <div className="w-100 h-100">
                <img src="/images/1.jpg" alt="EduVerse" className='w-100 h-100' />
            </div>
            <div className="img-1-text-content">
                <h2 className='mb-3 fw-bold'>Learning that gets you</h2>
                <h3 className='h5'>Skills for your present (and your future). Get started with us.</h3>
            </div>
        </div>
        {/* END - FIRST SECTION WITH IMAGES AND WELCOME MESSAGE */}

        {/* START - SECOND SECTION WITH MY LEARNINGS */}
        <div className="">
            <div className="d-flex justify-content-between align-items-center py-5">
                <h2 className='fw-bold'>Let's start learning!</h2>
                <a href="">My learning</a>
            </div>
            <div className="container-fluid p-0">
                <div className="row g-3">

                    <Link to='/course-details' className="col-lg-4 col-md-6 custom-dimensions">
                        <div className="d-flex justify-content-between align-items-center h-100" role='button'>
                            <div className="position-relative w-75 h-100">
                                <div className="overlay"></div>
                                <img src="/images/coursePhoto.jpg" alt="EduVerse frontend course" className='w-100 h-100'/>
                                <button className="play-btn-style d-flex justify-content-center align-items-center"><i className="fa-solid fa-play "></i></button>
                            </div>
                            <div className="course-text-cont">
                                <div className="">
                                    <h3 className='h6 text-muted'>CourseName</h3>
                                    <h4>1. Chapter</h4>
                                </div>
                                <h5 className='h6 text-muted'>Lecture . 6m</h5>
                            </div>
                        </div>
                    </Link>

                    <Link to='/course-details' className="col-lg-4 col-md-6 custom-dimensions">
                        <div className="d-flex justify-content-between align-items-center h-100" role='button'>
                            <div className="position-relative w-75 h-100">
                                <div className="overlay"></div>
                                <img src="/images/coursePhoto.jpg" alt="EduVerse frontend course" className='w-100 h-100'/>
                                <button className="play-btn-style d-flex justify-content-center align-items-center"><i className="fa-solid fa-play "></i></button>
                            </div>
                            <div className="course-text-cont">
                                <div className="">
                                    <h3 className='h6 text-muted'>CourseName</h3>
                                    <h4>1. Chapter</h4>
                                </div>
                                <h5 className='h6 text-muted'>Lecture . 6m</h5>
                            </div>
                        </div>
                    </Link>

                    <Link to='/course-details' className="col-lg-4 col-md-6 custom-dimensions">
                        <div className="d-flex justify-content-between align-items-center h-100" role='button'>
                            <div className="position-relative w-75 h-100">
                                <div className="overlay"></div>
                                <img src="/images/coursePhoto.jpg" alt="EduVerse frontend course" className='w-100 h-100'/>
                                <button className="play-btn-style d-flex justify-content-center align-items-center"><i className="fa-solid fa-play "></i></button>
                            </div>
                            <div className="course-text-cont">
                                <div className="">
                                    <h3 className='h6 text-muted'>CourseName</h3>
                                    <h4>1. Chapter</h4>
                                </div>
                                <h5 className='h6 text-muted'>Lecture . 6m</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        {/* END - SECOND SECTION WITH MY LEARNINGS */}

        {/* START - HEADER */}
        <div className="pt-5 pb-4">
            <h2 className='fw-bold'>What to learn next</h2>
        </div>
        {/* END - HEADER */}
        
        {/* START - THIRD SECTION WITH COURSE CARDS */}
        <div className="container p-0">
            <CourseCards />
        </div>
        {/* END - THIRD SECTION WITH COURSE CARDS */}

    </div>
    </>
  )
}

