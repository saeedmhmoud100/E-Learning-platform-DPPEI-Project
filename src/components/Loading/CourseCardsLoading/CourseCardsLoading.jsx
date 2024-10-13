import React from 'react';
import './CourseCardsLoading.css';

export default function CourseCardsLoading() {
  return (
    <div>
      <div className="col-12 col-sm-6 col-lg-4 card-hover">
            <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
                <div className="position-relative w-100 h-50">
                    <div>
                        <img
                            src="/images/coursecards-placeholder-img.webp"
                            className="w-100 h-100"
                            alt="placeholder course card image"
                        />
                    </div>
                </div>
                <div className="course-card">
                    <div className='text-decoration-none text-dark'>
                        <h3 className='mb-2 empty-fill w-25'></h3>
                        <h4 className='text-muted h6 mb-2 empty-fill w-50'></h4>
                        <div className="d-flex flex-row mb-2 align-items-center">
                            <div className='empty-fill w-75'></div>
                        </div>
                        <div className='mb-2 empty-fill w-50'></div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}
