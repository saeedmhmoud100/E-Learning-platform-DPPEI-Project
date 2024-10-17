import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import SliderForCourseCards from '../../components/SliderForCourseCards/SliderForCourseCards.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    const {userData} = useSelector(state=>state.user);

  return (<>
    <motion.div
    initial={{ x: -100, opacity: 0 }}  
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className='container my-5'>

        {/* START - FIRST SECTION WITH IMAGES AND WELCOME MESSAGE */}
        <motion.div
        initial={{ x: -100, opacity: 0 }}  
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="d-flex justify-content-start align-items-center py-3">
            <div className="img-cont">
            <img src={userData.profile_image} alt="user picture" className='w-100 h-100 rounded-circle' />
            </div>
            <div className="text-cont ps-4">
            <TypeAnimation
            sequence={[
                `Welcome back, ${userData.username}`,
                1000,
            ]}
            speed={50}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
            />
            </div>
        </motion.div>

        <motion.div
        initial={{ x: -100, opacity: 0 }}  
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-5 position-relative">
            <div className="w-100 h-100">
                <img src="/images/1.jpg" alt="EduVerse" className='w-100 h-100' />
            </div>
            <div className="img-1-text-content">
                <h2 className='mb-3 fw-bold'>Learning that gets you</h2>
                <h3 className='h5'>Skills for your present (and your future). Get started with us.</h3>
            </div>
        </motion.div>
        {/* END - FIRST SECTION WITH IMAGES AND WELCOME MESSAGE */}

        {/* START - SECOND SECTION WITH MY LEARNINGS */}
        <motion.div
        initial={{ x: -100, opacity: 0 }}  
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="">
                    {
                        userData?.courses_enrolled?.length > 0 ? (<>
                            <div className="d-flex justify-content-between align-items-center py-5">
                                    <h2 className='fw-bold'>Resume your learning!</h2>
                                    <Link to='/my-courses/*'>My learning</Link>
                            </div>
                            <div className="container-fluid p-0">
                            <div className="row g-3">
                            {userData.courses_enrolled.slice(0,2).map((course)=>{
                                return(
                                <>
                                <motion.div
                                initial={{ x: -100, opacity: 0 }}  
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true,amount: 0.5 }}
                                transition={{ duration: 1 }}
                                key={course.id} className="col-12 col-md-6 col-lg-4 custom-dimensions">
                                    <div className="d-flex justify-content-between align-items-center h-100">
                                        <div className="position-relative w-75 h-100">
                                            <div className="overlay-for-home"></div>
                                            <Link to={`/videopage/${course?.id}`}>
                                                <img
                                                    src={course?.thumbnail_link}
                                                    className="w-100 h-100"
                                                    alt={`EduVerse ${course?.title} course`}
                                                />
                                            </Link>
                                            <Link to={`/videopage/${course?.id}`}><button className="play-btn-style d-flex justify-content-center align-items-center"><i className="fa-solid fa-play "></i></button></Link>
                                        </div>
                                        <div className="course-text-cont">
                                            <div className="">
                                                <h3 className='h6 text-muted'>{course.title}</h3>
                                                <h4>1. Chapter 1</h4>
                                            </div>
                                            <h5 className='h6 text-muted'>Lecture . {course?.total_duration}</h5>
                                        </div>
                                    </div>
                                </motion.div>
                                </>  
                            )})}
                            </div>
                            </div>
                            </>
                        ):(
                            <motion.h3 initial={{ scale:0.5 }}  
                            whileInView={{ scale:1 }}
                            viewport={{ once: true,amount: 0.5 }}
                            transition={{ duration: 1 }}
                            className='text-center p-4'>It seems you have yet to explore our courses.<Link to='/courses' className='my-learning-btn'> Start learning!</Link></motion.h3>
                        )
                    }
        </motion.div>
        {/* END - SECOND SECTION WITH MY LEARNINGS */}

        {/* START - HEADER */}
        <motion.div
        initial={{ x: -100, opacity: 0 }}  
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-5 pb-4">
            <h2 className='fw-bold'>Recommended for you</h2>
        </motion.div>
        {/* END - HEADER */}
        
        {/* START - THIRD SECTION WITH COURSE CARDS */}
        <div
        className="container-fluid position-relative p-0">
            <SliderForCourseCards/>
        </div>
        {/* END - THIRD SECTION WITH COURSE CARDS */}
    </motion.div>

    </>
  )
}

