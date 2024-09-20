    import React from "react";
    import CourseReviewCard from "../../../../Pages/CourseDetails/components/CourseReviewCard";

    export default function Review() {
    return (
        <>
        <div className="container ms-5">
            <p className=" fs-4">Student Feedbaack</p>
            <div className="row" >
            <>
            <div className=" col-12  col-lg-4 col-xl-2   ">
                <span className="h1 text-warning fw-bolder">3.6</span>
                <div className="text-warning">
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star-half-stroke text-warning"></i>

                </div>
                <p className=" fw-bold text-warning"> Course Rating </p>
            </div>
            <div className=" col-12  col-lg-4 col-xl-7   ">
                <div>
                <div
                className="progress mb-2"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                >
                <div className="progress-bar text-bg-warning w-75" >
                    
                </div>
                </div>
                <div
                className="progress mb-2"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                >
                <div className="progress-bar text-bg-warning w-50" >
                    
                </div>
                </div>
                <div
                className="progress mb-2"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                >
                <div className="progress-bar text-bg-warning w-25" >
                    
                </div>
                </div>
                <div
                className="progress mb-2"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                >
                <div className="progress-bar text-bg-warning w-25" >
                    
                </div>
                
                </div>
                </div>
            </div>
            <div className=" col-12  col-lg-4 col-xl-3   ">
            <div className="text-warning">
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star-half-stroke text-warning"></i>   <span>75%</span> 

                </div> 
                <div className="text-warning">
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star-half-stroke text-warning"></i>  <span>50%</span> 

                </div>
                <div className="text-warning">
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star-half-stroke text-warning"></i> <span>25%</span>  

                </div>
                <div className="text-warning">
                <i className="fa-solid fa-star text-warning" ></i> 
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star text-warning" ></i>
                <i className="fa-solid fa-star-half-stroke text-warning"></i>  <span>25%</span> 

                </div>
            </div>


            </>
            </div>
            <CourseReviewCard />
        </div>
        </>
    );
    }
