import React, { useState,useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import{getAllCourses}  from "../../../../store/actions/coursesAction.js"

export default function StudentAlsoBoughtCard({ title, price, thumbnail, instructor, rating ,hours,priceBeforeDiscount}) {
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
        src={thumbnail}
        alt="course-img" 
        className="studentCourse-img me-3"  
      />
     <div className="cousresCard-body w-100">
     <div className="course-info d-flex justify-content-between  ">
        <h5 className="mb-1 ">
          {title}

        </h5>
        <div className="">
          <span className="rating me-2">{rating}</span>
          <i className="fa fa-star text-warning"></i>
        </div>
        <div className="">
          <i className="fa-solid fa-user-group me-2"></i>
          <span>{instructor}</span>
        </div>
        <div className="course-price ">
          <span className="fw-bold">{price}</span>
          <span className="text-muted text-decoration-line-through">{priceBeforeDiscount}</span>
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
        <span className=' text-info me-3'>{hours}  total hours</span>
        <span>Updated 11/2024</span>
      </div>

     </div>
    </div>
   </Link>
    <hr />
   </>
  );
}
