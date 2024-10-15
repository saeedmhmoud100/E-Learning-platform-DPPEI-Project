    import React from "react";

    export default function Overview({course}) {
    return (
        <div className="mt-3 ms-5">
        <p className="  fs-5">
           {/*  A super pack course for JavaScript enthusiast who wants to learn the
            whole process of <br /> building your Apps with Vue */}
            {course.brief_description}
        </p>
        <div className="d-flex">
            <p>
            
            <span className="fw-bold">{course.rating_count / 20} </span>
            <i className="text-info fa fa-star" aria-hidden="true"></i> <br />
            <span className="text-sm fs-6">{course.rating_count} ratings</span>
            </p>
            <p className="ms-5">
            
            <span className="fw-bold">45,342 </span>
            <br />
            <span className="text-sm fs-6">Students</span>
            </p>
            <p className="ms-5">
            
            <span className="fw-bold">{course.total_duration} hours</span>
            <br />
            <span className="text-sm fs-6">Total</span>
            </p>
        </div>
        <p>
            <i class="fa-solid fa-circle-exclamation"></i> Last updated January 2024
        </p>
        <p>
            <i class="fa-solid fa-globe"></i>&nbsp; English&nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-keyboard"></i>&nbsp; English [Auto]
        </p>
        <hr />
        <div className="d-flex">
        <div className="container-flouid">
            <div className="row g-5">
            <div className="col-12 col-md-4  ">
            <p className="me-5">By the numbers</p>
            </div>
            <div className="col-12 col-md-4  ">
            <p className="">
            Skill level: Beginner Level <br />
            Students: {course.students_count} <br />
            Languages:{/*  {course?.languages?.map((language,i)=>{
                return(<span key={i}>{language}</span>)
            })} */} <br />
            Captions: Yes <br />
            </p>
            </div>
            <div className="col-12 col-md-4  ">
            <p >
            Lectures: {course.lectures_count} <br />
            Video: {course.total_duration} total hours <br />
            </p>
            </div>
            </div>
        </div>
            
         
        </div>
        <hr />
        <div className="container-flouid">
            <div className="row">
            <div className="col-md-4 col-12 ">
                <p>Certificates</p>
            </div>
            <div className="col-md-8 col-12 ">
                <p className="ms-5">
                Get Udemy certificate by completing entire course
                </p>
                <button className=" btn btn-outline-info w-75 display">
                Udemy Certificate
                </button>
            </div>
            </div>
        </div>
        <hr />
        <div className="container-flouid">
            <div className="row">
            <div className="col-12  col-md-4">
                <p>Features</p>
            </div>
            <div className="col-12  col-md-8">
                <p className="ms-5">Available on iOS and Android</p>
            </div>
            </div>
        </div>
        <hr />
        <div className="container-flouid">
            <div className="row">
            <div className="col-12  col-md-4">
                <p>Description</p>
            </div>
            <div className="col-12  col-md-8">
                <p className="ms-5">
                {course.description}
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    }
