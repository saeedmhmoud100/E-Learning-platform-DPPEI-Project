import axios from "axios";
import React, {useEffect, useState} from "react";
import "./style.css";

export default function Courses({courses}) {



    return (
        <div className="container m-3">
            <div className="row ">
                {courses?.map((course) => {
                    return (
                        <div key={course.id} className="w-50 mb-2 ">
                            <div className="card">
                                <img src={course.imgPath} className="card-img-top h-75" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{course.courseName}</h5>
                                    <p className="card-text">{course.courseDesc}</p>
                                </div>
                            </div>
                            {<div className="card bg-info p-5 m-1 ">
                                <h4>Course Name : {course.courseName}</h4>
                                <h4>instructor Name : {course.instructorName}</h4>
                                <h4>desc Name : {course.courseDesc}</h4>
                                <h4>Course price : {course.coursePrice}</h4>
                            </div>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
