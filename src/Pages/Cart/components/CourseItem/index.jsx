import React from 'react'
import { Link } from 'react-router-dom'
export default function CourseItem({cartcourse}) {
  let CartcourseRating = cartcourse?.course.rating_avg || 0;
  let starsCount = new Array(CartcourseRating).fill(0);
  return (
    <>
        <div className='cartcourse d-flex  align-items-start row g-2'>
             <div className="cartcourseimg   col-md-3">
              <img className=" cartimg h-100 img-fluid" src={cartcourse?.course.thumbnail_link}alt="reactCourse" />
            </div>
              <div className="courseDetails   mx-auto col-md-9 ">
              <div className='d-flex  justify-content-between align-items-center '>
                <p className='fs-4  mt-0 '>{cartcourse?.course.title}</p>
                <Link className="remove-link mt-0" to="">Remove</Link>
              </div>
              
                <div className="author d-flex justify-content-between align-items-center ">
                <div class="prices">
                <p className="fs-6 mb-1">Price Before Discount : <del>{cartcourse?.course.price_before_discount}</del></p>
                <span className="fs-6 mb-1">Price  After Discount:  <b>{cartcourse?.course.price}</b></span>
                </div>
                <Link className="" to="">Save For Later</Link>
                </div>
                 <div className="selling d-flex justify-content-between">
                 <div className="ratings d-flex justify-content-between  ">
                 <b className='me-3 px-1 bg-warning  border  d-inline d-sm-block mt-1 '>Best Seller </b>
                 <i className='me-2  '>{cartcourse?.course.rating_avg}</i>
                 <div className="stars me-1 mb-1">
                 {starsCount.map((star,i)=>(    <i className="fa-solid fa-star text-warning "key={i}></i>))}
             
                
                 </div>
                 <i className='text-info '> (average rating)</i>
                 </div>
                  <Link className="" to="">Move To Wishlist</Link>
                 </div>
                 <div className="d-flex text-secondary   ">
                
                <li className='me-4 '>{cartcourse?.course.total_duration} total hours</li>
                  <li  className='me-2'>all levels</li>
                
                
                 </div>
                
              </div>
              
        </div>
            
              <hr className='text-secondary'/>
    </>
  )
}