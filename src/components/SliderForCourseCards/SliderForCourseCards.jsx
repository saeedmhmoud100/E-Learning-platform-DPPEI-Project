import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseCardsLoading from '../../components/Loading/CourseCardsLoading/CourseCardsLoading.jsx';
import CourseCards from '../../components/CourseCards';
import Carousel from 'react-multi-carousel';
import { getAllCourses } from '../../store/actions/coursesAction.js';
import { Link } from 'react-router-dom';
import './SliderForCourseCards.css'

export default function SliderForCourseCards() {

    const { courses, loading } = useSelector((state) => state.allCourses);

    const responsive = {
        large: {
          breakpoint: { max: 4000, min: 992 },
          items: 3
        },
        small: {
          breakpoint: { max: 991, min: 576 },
          items: 2
        },
        xsmall: {
          breakpoint: { max: 575, min: 0 },
          items: 1
        },
    };
    
    const [addedToWishlist, setAddToWishlist] = useState(false);
    function addToWishlist(){
        setAddToWishlist(!addedToWishlist);
    }

  return (
    <div>
        <Carousel 
                responsive={responsive} 
                keyBoardControl={true}
                containerClass="carousel-container" 
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    loading 
                    ? <CourseCardsLoading /> 
                    : courses?.map((course, index) => (
                        <div key={index} className={`d-flex justify-content-center align-items-center flex-column w-100 h-100 px-4`}>
                        <div className="position-relative w-100 h-50">
                            <div className='overlay-for-course-cards'></div>
                            <i class={`${addedToWishlist ? 'fa-regular' : 'fa-solid'} fa-heart add-to-wishlist-icon`} onClick={addToWishlist}></i>
                            <div className='course-img-cont'>
                                <Link to={`/course-details/`}>
                                    <img
                                        src={course?.thumbnail_link}
                                        className="w-100 h-100"
                                        alt={`EduVerse ${course?.title} course`}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="course-card">
                            <Link className='text-decoration-none text-dark' to={`/course-details/${course?.id}`}>
                                <h3 className='mb-2 text-truncate'>{course?.title}</h3>
                                <h4 className='text-muted h6 mb-2 text-truncate'>{course?.instructor_data?.title}</h4>
                                <div className="d-flex flex-row mb-2 align-items-center">
                                    <span className='pe-1'>{course.rating_avg ? course.rating_avg : 0}</span>
                                    {Array(5).fill(0).map((star, index) => {
                                        if (index < Math.floor(course?.rating_avg)) {
                                            return <i key={index} className="fa-solid fa-star star-icon"></i>;
                                        } else if (index < course?.rating_avg) {
                                            return <i key={index} className="fa-regular fa-star-half-stroke star-icon"></i>;
                                        } else {
                                            return <i key={index} className="fa-regular fa-star star-icon"></i>; // Empty star
                                        }
                                    })}
                                </div>
                                <h5 className='mb-2'>{course?.price} L.E.</h5>
                                <h6 className='mb-2 bg-warning text-white w-auto p-2'>Bestseller</h6>
                            </Link>
                        </div>
                    </div>
                    ))
                }
            </Carousel>
    </div>
  )
}
