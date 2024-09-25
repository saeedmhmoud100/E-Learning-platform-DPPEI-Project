import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
export default function StudentAlsoBoughtCard() {
  const [isWishlisted, setIsWishlisted] = useState(false);

  function addToWishlit() {
    setIsWishlisted(!isWishlisted);
    console.log("added to wishlist");
  }

  return (
    <>
   <Link to={"/course-details"}>
   <div className="d-flex align-items-start mb-3">
      <img 
        src="/images/coursePhoto.jpg" 
        alt="Parametric Design with Grasshopper FULL BEGINNER TO ADVANCED" 
        className="studentCourse-img me-3"  
      />
     <div className="cousresCard-body w-100">
     <div className="course-info d-flex justify-content-between  ">
        <h5 className="mb-1 ">
          Parametric Design with Grasshopper<br/>
          Beginner To Advanced

        </h5>
        <div className="">
          <span className="rating me-2">4.6</span>
          <i className="fa fa-star text-warning"></i>
        </div>
        <div className="">
          <i className="fa-solid fa-user-group me-2"></i>
          <span>116</span>
        </div>
        <div className="course-price ">
          <span className="fw-bold">£249.99</span>
          <span className="text-muted text-decoration-line-through">£1,099.99</span>
        </div>
        <div className="heart-container d-flex justify-content-center align-items-center">
          <i 
          className={`${isWishlisted ? 'fa-solid fa-heart text-dark' : 'fa-regular fa-heart text-dark'}fs-4` }
           
            role="button" 
            onClick={addToWishlit}
          ></i>
        </div>
      </div>
      <div className='more-info '>
        <span className=' text-info me-3'>8 total hours</span>
        <span>Updated 11/2024</span>
      </div>

     </div>
    </div>
   </Link>
    <hr />
   </>
  );
}
