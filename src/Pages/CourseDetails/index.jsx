
import React from 'react';
import { Link } from 'react-router-dom';

export default function CourseDetails() {
  return (
    <>
    {/* header */}
    <div className="container-fluid bg-dark py-5">
      <div className="row ">
        <div className="col-lg-8 col-md-10 col-sm-12 text-white p-4 ">
          <h1 className="mb-3">Javascript for Beginners</h1>
          <h2 className="h5">
            Learn javascript online and supercharge your web design with this
            Javascript for beginners training course.
          </h2>

          <div className="selling mt-4">
            <div className="ratings d-flex align-items-center">
              <i className="me-1">4.7</i>
              <div className="stars me-2 mb-1">
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star-half-stroke text-warning"></i>
              </div>
              <Link className="text-secondary me-2" to="#">
                (87,214 ratings)
              </Link>
              <span className="me-2">24,980 students</span>
            </div>
          </div>
          <p>Created By   :<Link className='me-1' to="admin-profile">Mark Lassof</Link>, <Link to="admin-profile">SprintsInc</Link></p>
          <div className='d-flex gap-3'>
            <div className="last-update ">
            <i className="fa-solid fa-gear me-1"></i>
            <span>Last Udpdated</span>
            </div>
            
           <div className="first-lang">
           <i className="fa-solid fa-globe me-1"></i>
           <span>English</span>
           </div>
           <div className="subtitles">
           <i className="fa-regular fa-closed-captioning me-1"></i>
           <span>English [auto], Portuguese [Auto]
, 
Spanish [Auto] </span>
           </div>
          </div>
        </div>
      </div>
    </div>
    {/* what you will learn */}
    <div className="container py-5">
      <h2 className="mb-4">What you'll learn</h2>
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <ul className="list-unstyled">
            <li className="mb-2">
            <i className="fa-solid fa-check"></i>
              Extensive, informative and interesting video lecture
            </li>
            <li className="mb-2">
            <i className="fa-solid fa-check"></i>
              Lab Exercises
            </li>
            <li className="mb-2">
            <i className="fa-solid fa-check"></i>
              All PowerPoint Demonstrations Used in Course
            </li>
            <li className="mb-2">
            <i className="fa-solid fa-check"></i>
              Coverage of all important primary Javascript concepts
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <ul className="list-unstyled">
            <li className="mb-2">
            <i className="fa-solid fa-check"></i>
              Complete Code demonstrated in lecture
            </li>
            <li className="mb-2">
            <i className="fa-solid fa-check"></i>
              Lab Solution Sets
            </li>
            <li className="mb-2">
            <i className="fa-solid fa-check"></i>
              Instructor contact Email for questions and clarifications
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
    
  );
}
