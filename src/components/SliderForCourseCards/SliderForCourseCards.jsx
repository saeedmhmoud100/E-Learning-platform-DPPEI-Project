import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseCardsLoading from '../../components/Loading/CourseCardsLoading/CourseCardsLoading.jsx';
import CourseCards from '../../components/CourseCards';
import Carousel from 'react-multi-carousel';
import { getAllCourses } from '../../store/actions/coursesAction.js';
import { Link } from 'react-router-dom';
import './SliderForCourseCards.css'
import { addToWishlist, getWishlist, removeFromWishlist } from '../../store/actions/userActions';

export default function SliderForCourseCards() {

    const { courses, loading } = useSelector((state) => state.allCourses);
    const {userData:{wishlist}} = useSelector(state=>state.user);
    const dispatch = useDispatch()

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
    
    async function handleWishlistBtn(e,id){
        if(e.target.classList.contains('fa-solid')){
            try {
                await dispatch(removeFromWishlist(id)); 
            } catch (error) {
                console.error("Error removing wishlist:", error);
            }
        }else{
            try {
                await dispatch(addToWishlist(id)); 
            } catch (error) {
                console.error("Error adding to wishlist:", error);
            }
        }
    }

  return (
    <div>
        {
            loading ? (
                <CourseCardsLoading /> 
            ):(
                <Carousel 
                responsive={responsive} 
                keyBoardControl={true}
                containerClass="carousel-container" 
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                 {courses?.map((product, index) => (
                        <div key={index} className={`d-flex justify-content-center align-items-center flex-column w-100 h-100 px-4`}>
                        <div className="position-relative w-100 h-50">
                            <div className='overlay-for-course-cards'></div>
                            <i class={`${wishlist.some(item => item?.course?.id == product?.id) ? 'fa-solid' : 'fa-regular'} fa-heart add-to-wishlist-icon`} onClick={(e)=>handleWishlistBtn(e,product.id)}></i>
                            <div className='course-img-cont'>
                                <Link to={`/course-details/`}>
                                    <img
                                        src={product?.thumbnail_link}
                                        className="w-100 h-100"
                                        alt={`EduVerse ${product?.title} course`}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="course-card">
                            <Link className='text-decoration-none text-dark' to={`/course-details/${product?.id}`}>
                                <h3 className='mb-2 text-truncate'>{product?.title}</h3>
                                <h4 className='text-muted h6 mb-2 text-truncate'>{product?.instructor_data?.title}</h4>
                                <div className="d-flex flex-row mb-2 align-items-center">
                                    <span className='pe-1'>{product.rating_avg ? product.rating_avg : 0}</span>
                                    {Array(5).fill(0).map((star, index) => {
                                        if (index < product?.rating_avg) {
                                            return <i key={index} className="fa-solid fa-star star-icon"></i>;
                                        } else if (index < product?.rating_avg) {
                                            return <i key={index} className="fa-regular fa-star-half-stroke star-icon"></i>;
                                        } else {
                                            return <i key={index} className="fa-regular fa-star star-icon"></i>;
                                        }
                                    })}
                                </div>
                                <h5 className='mb-2'>{product?.price} L.E.</h5>
                                <h6 className='mb-2 bg-warning text-white w-auto p-2'>Bestseller</h6>
                            </Link>
                        </div>
                    </div>
                    ))}
            </Carousel>
            )
        }
    </div>
  )
}
