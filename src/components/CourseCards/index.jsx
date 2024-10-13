import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function CourseCards({course}) {

    const [addedToWishlist, setAddToWishlist] = useState(false);
    function addToWishlist(){
        setAddToWishlist(!addedToWishlist);
    }

  return (
      <>
    
    <div className="col-12 col-sm-6 col-lg-4 card-hover" role='button'>
            <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
                <div className="position-relative w-100 h-50">
                    
                    
                    <div className='course-img-cont'>
                    <i class={`${addedToWishlist ? 'fa-regular' : 'fa-solid'} fa-heart add-to-wishlist-icon`} onClick={addToWishlist}></i>
                        <Link to={`/course-details/${course?.id}`}>
                        <div className='overlay-for-course-cards'></div>
                      
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
                            <span className='pe-1'>{course?.rating_avg ? course.rating_avg : 0}</span>
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
      </div>
      </>

      
  )
}