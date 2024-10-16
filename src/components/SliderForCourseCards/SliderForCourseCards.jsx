import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseCardsLoading from '../../components/Loading/CourseCardsLoading/CourseCardsLoading.jsx';
import CourseCards from '../../components/CourseCards';
import Carousel from 'react-multi-carousel';
import { getAllCourses } from '../../store/actions/coursesAction.js';
import { Link } from 'react-router-dom';
import './SliderForCourseCards.css'
import { addToWishlist, getWishlist, removeFromWishlist } from '../../store/actions/userActions';
import { motion } from 'framer-motion';

export default function SliderForCourseCards() {

    const { courses, loading } = useSelector((state) => state.allCourses);
    const {userData:{wishlist}} = useSelector(state=>state.user);
    const dispatch = useDispatch()
    const [heartloading,setHeartLoading] = useState(false)

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
        setHeartLoading(true)
        if(e.target.classList.contains('fa-solid')){
            // e.target.classList.replace('fa-solid','fa-regular');
            try {
                await dispatch(removeFromWishlist(id));
                setHeartLoading(false) 
            } catch (error) {
                console.error("Error removing wishlist:", error);
            }
        }else{
            // e.target.classList.replace('fa-regular','fa-solid');
            try {
                await dispatch(addToWishlist(id)); 
                setHeartLoading(false) 
            } catch (error) {
                console.error("Error adding to wishlist:", error);
            }
        }
    }

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}>
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
                 {courses?.slice(0,4).map((product, index) => (
                        <div key={index} className={`d-flex justify-content-center align-items-center flex-column w-100 h-100 px-4`}>
                        <div className="position-relative w-100 h-50">
                        <div className='course-img-cont'>
                            <div
                            className={`${heartloading ? 'heart-icon-circle-loading' : 'heart-icon-circle'}`}>
                                <span></span>
                            </div>
                            <i class={`${wishlist?.some(item => item.course.id == product.id) ? 'fa-solid' : 'fa-regular'} fa-heart add-to-wishlist-icon`} onClick={(e)=>handleWishlistBtn(e,product.id)}></i>
                                <Link to={`/course-details/${product?.id}`}>
                                <div className='overlay-for-course-cards'></div>
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
    </motion.div>
  )
}
