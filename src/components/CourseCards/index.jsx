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
                    <div className='overlay-for-course-cards'></div>
                    <i class={`${addedToWishlist ? 'fa-regular' : 'fa-solid'} fa-heart add-to-wishlist-icon`} onClick={addToWishlist}></i>
                    <Link to={`/course-details/`}>
                        <img
                            src="/images/coursePhoto.jpg"
                            className="w-100 h-100"
                            alt="EduVerse frontend course"
                        />
                    </Link>
                </div>
                <div className="course-card">
                    <Link className='text-decoration-none text-dark' to='/course-details'>
                        <h3 className='mb-2 text-truncate'>{course?.title}</h3>
                        <h4 className='text-muted h6 mb-2 text-truncate'>Course instructor</h4>
                        <div className="d-flex flex-row mb-2 align-items-center">
                            <span className='pe-1'>5</span>
                            <i className="fa-solid fa-star star-icon"></i>
                            <i className="fa-solid fa-star star-icon"></i>
                            <i className="fa-solid fa-star star-icon"></i>
                            <i className="fa-solid fa-star star-icon"></i>
                            <span className='ps-1'>(1,200)</span>
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