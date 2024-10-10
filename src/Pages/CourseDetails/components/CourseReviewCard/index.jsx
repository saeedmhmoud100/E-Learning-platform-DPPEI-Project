import React from "react";



export default function  CourseReviewCard ({review}) {
  let courseReview = review?.rating || 0;
  let ReviewStars = new Array(courseReview).fill(0);
  return (
  
          <>
          <hr  />
     
      <div className="review-card p-3 my-2 w-100">
       
       {/*  Reviewer Info */}
       <div className="d-flex align-items-center">
         <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}>
           MZ
         </div>
         <div className="ms-3">
           <h6 className="mb-0 fw-bolder">{review?.user?.username}</h6>
           <div className="text-warning">
           { ReviewStars.map((star,i)=>( <i  className="fa-solid fa-star text-warning" key={i}></i>))}
           </div>
         </div>
       </div>
     
    

     {/* Review Text */}
     <div className="mt-3">
       <p>{review?.review}</p>
     </div>

     {/* Helpful Section */}
     <div className="d-flex align-items-center mt-2 ">
       <small className="text-muted me-3">Helpful?</small>
       <i className="fa-solid fa-thumbs-up me-3" role="button"></i>
       <i className="fa-solid fa-thumbs-down me-3" role="button"></i>
       
     </div>
   </div>
     
        </>
      );
  
};
