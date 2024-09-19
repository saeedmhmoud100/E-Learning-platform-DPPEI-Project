import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function CourseCards() {

    const [addedToWishlist, setAddToWishlist] = useState(false);

    function addToWishlist(){
        setAddToWishlist(!addedToWishlist);
    }

  return (
    <div className='row'>

      <div className="col-12 col-sm-6 col-lg-4 card-hover" role='button'>
            <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
                <div className="position-relative w-100 h-50">
                    <div className='overlay-for-course-cards'></div>
                    <i class={`${addedToWishlist ? 'fa-regular' : 'fa-solid'} fa-heart add-to-wishlist-icon`} onClick={addToWishlist}></i>
                    <img src="/images/coursePhoto.jpg" alt="EduVerse frontend course" className='w-100 h-100'/>
                </div>
                <div className="course-card">
                    <Link className='text-decoration-none text-dark' to='/course-details'>
                        <h3 className='mb-2'>CourseName</h3>
                        <h4 className='text-muted h6 mb-2'>Course instructor</h4>
                        <div className="d-flex flex-row mb-2 align-items-center">
                            <span className='pe-1'>5</span>
                            <i className="fa-solid fa-star star-icon"></i>
                            <i className="fa-solid fa-star star-icon"></i>
                            <i className="fa-solid fa-star star-icon"></i>
                            <i className="fa-solid fa-star star-icon"></i>
                            <span className='ps-1'>(1,200)</span>
                        </div>
                        <h5 className='mb-2'>1500 L.E.</h5>
                        <h6 className='mb-2 bg-warning text-white w-auto p-2'>Bestseller</h6>
                    </Link>
                </div>
            </div>
      </div>

    </div>
  )
}
