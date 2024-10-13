import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCards from '../../components/CourseCards';
import Footer from '../../components/Footer/index.jsx';
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoursesPage } from '../../store/actions/coursesAction.js';
import CourseCardsLoading from '../../components/Loading/CourseCardsLoading/CourseCardsLoading.jsx';
import { Slide } from 'react-toastify';
import SliderForCourseCards from '../../components/SliderForCourseCards/SliderForCourseCards.jsx';

export default function Home() {

    const dispatch = useDispatch()
    const {courses} = useSelector((state) => state.allCourses);
    const {userData} = useSelector(state=>state.user);

  return (
    
    <>
    <div className='container my-5'>

        {/* START - FIRST SECTION WITH IMAGES AND WELCOME MESSAGE */}
        <div className="d-flex justify-content-start align-items-center py-3">
            <div className="img-cont">
            <img src={userData.profile_image} alt="user picture" className='w-100 h-100 rounded-circle' />
            </div>
            <div className="text-cont ps-4">
                <h2>Welcome back, {userData.username}</h2>
                {/* <a href='#'>add occupations and interest</a> */}
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
                    {
                        userData?.courses_enrolled?.length > 0 ? (
                            userData.courses_enrolled.map((course)=>{
                                return(
                                <>
                                <div className="d-flex justify-content-between align-items-center py-5">
                                    <h2 className='fw-bold'>Resume your learning!</h2>
                                    <Link to='/my-courses/*'>My learning</Link>
                                </div>
                                <div className="container-fluid p-0">
                                <div className="row g-3">
                                <div key={course.id} className="col-12 col-md-6 col-lg-4 custom-dimensions">
                                    <div className="d-flex justify-content-between align-items-center h-100">
                                        <div className="position-relative w-75 h-100">
                                            <div className="overlay-for-home"></div>
                                            <Link to={`/course-details/${course.id}`}>
                                                <img
                                                    src={course?.thumbnail_link}
                                                    className="w-100 h-100"
                                                    alt={`EduVerse ${course?.title} course`}
                                                />
                                            </Link>
                                            <button className="play-btn-style d-flex justify-content-center align-items-center"><i className="fa-solid fa-play "></i></button>
                                        </div>
                                        <div className="course-text-cont">
                                            <div className="">
                                                <h3 className='h6 text-muted'>{course.title}</h3>
                                                <h4>1. Chapter</h4>
                                            </div>
                                            <h5 className='h6 text-muted'>Lecture . 6m</h5>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                </>  
                            )})
                        ):(
                            <h3 className='text-center p-4'>It seems you have yet to explore our courses.<Link to='/courses' className='my-learning-btn'> Start learning!</Link></h3>
                        )
                    }
        </div>
        {/* END - SECOND SECTION WITH MY LEARNINGS */}

        {/* START - HEADER */}
        <div className="pt-5 pb-4">
            <h2 className='fw-bold'>Recommended for you</h2>
        </div>
        {/* END - HEADER */}
        
        {/* START - THIRD SECTION WITH COURSE CARDS */}
        <div className="container-fluid position-relative p-0">
            <SliderForCourseCards/>
        </div>
        {/* END - THIRD SECTION WITH COURSE CARDS */}

    </div>

    </>
  )
}

