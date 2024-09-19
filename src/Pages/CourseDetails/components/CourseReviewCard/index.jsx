import React from "react";


const reviews = [
  {
    name: "Dibia E.",
    rating: 5,
    time: "3 weeks ago",
    comment:
      "It was Amazing. I understood a lot more than I even thought I would do.",
  },
  {
    name: "Frederic E.",
    rating: 5,
    time: "2 months ago",
    comment:
      "Amazing!! Detailed, simple and well-structured course to understand which test to choose in hypothesis testing.",
  },
  {
    name: "Saurabh W.",
    rating: 4,
    time: "3 months ago",
    comment: "good",
  },
  {
    name: "Helena R.",
    rating: 5,
    time: "4 months ago",
    comment:
      "Course was an ideal match. Provided a high level review of statistical concepts I have already garnered. Lecturer was really engaging - giving explicit explanations where needed.",
  },
];



export default function  CourseReviewCard () {
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
                <h6 className="mb-0">Mary Joy Z.</h6>
                <small className="text-muted">4 months ago</small>
                <div className="text-warning">
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star-half-stroke text-warning"></i>

                </div>
              </div>
            </div>
          
         
    
          {/* Review Text */}
          <div className="mt-3">
            <p>It is s very informative and smooth learning. So far so good.</p>
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
