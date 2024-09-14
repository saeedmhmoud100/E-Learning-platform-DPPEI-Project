import React from 'react';
import './index.css';

export default function CourseCards() {
  return (
    <div className='row'>

      <div className="col-12 col-sm-6 col-lg-4 card-hover" role='button'>
        <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
            <div className="position-relative w-100 h-50">
                <div className='overlay-for-course-cards'></div>
                <i class="fa-solid fa-heart add-to-wishlist-icon"></i>
                <img src="/images/coursePhoto.jpg" alt="EduVerse frontend course" className='w-100 h-100'/>
            </div>
            <div className="course-card">
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
            </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4 card-hover" role='button'>
        <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
            <div className="position-relative w-100 h-50">
                <div className='overlay-for-course-cards'></div>
                <i class="fa-solid fa-heart add-to-wishlist-icon"></i>
                <img src="/images/coursePhoto.jpg" alt="EduVerse frontend course" className='w-100 h-100'/>
            </div>
            <div className="course-card">
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
            </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4 card-hover" role='button'>
        <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
            <div className="position-relative w-100 h-50">
                <div className='overlay-for-course-cards'></div>
                <i class="fa-solid fa-heart add-to-wishlist-icon"></i>
                <img src="/images/coursePhoto.jpg" alt="EduVerse frontend course" className='w-100 h-100'/>
            </div>
            <div className="course-card">
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
            </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4 card-hover" role='button'>
        <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
            <div className="position-relative w-100 h-50">
                <div className='overlay-for-course-cards'></div>
                <i class="fa-solid fa-heart add-to-wishlist-icon"></i>
                <img src="/images/coursePhoto.jpg" alt="EduVerse frontend course" className='w-100 h-100'/>
            </div>
            <div className="course-card">
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
            </div>
        </div>
      </div>

    </div>
  )
}
