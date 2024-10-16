import React, { useState } from 'react';
import CourseProgressCard from '../../Cards/CourseProgressCard';
import {useSelector} from "react-redux";
import GeneralLoading from "../../../Loading/GeneralLoading/GeneralLoading";
import {Link} from "react-router-dom";

function CoursesList() {
    const { userData:{courses_enrolled:courses},loading } = useSelector((state) => state.user);

    return (
        <div>
            <div className="row g-4 my-4">

                {

                    loading ? <GeneralLoading></GeneralLoading> :
                        courses?.length > 0 ?courses.map((course, index) => (
                            <Link to={`/videopage/${course.id}`} className={'col-sm-6 col-md-4 col-lg-3'}>
                            <CourseProgressCard
                                key={index}
                                course={course}
                                instructorName={course.instructor_data.username}
                                courseName={course.title}
                                image={course.thumbnail_link}
                                courseDescription={course.description}
                                progress={Math.trunc(Math.random() * 101)}
                                l={false}
                            />
                            </Link>
                        )) : <h3 align='center'>No courses enrolled</h3>

                }
            </div>
        </div>
    );
}

export default CoursesList;
