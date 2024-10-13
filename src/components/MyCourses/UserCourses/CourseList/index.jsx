import React, { useState } from 'react';
import CourseProgressCard from '../../Cards/CourseProgressCard';
import {useSelector} from "react-redux";
import GeneralLoading from "../../../Loading/GeneralLoading/GeneralLoading";

function CoursesList() {
    const { userData:{courses_enrolled:courses},loading } = useSelector((state) => state.user);

    return (
        <div>
            <div className="row g-4 my-4">

                {

                    loading ? <GeneralLoading></GeneralLoading> :
                        courses?.length > 0 ?courses.map((course, index) => (
                            <CourseProgressCard
                                key={index}
                                course={course}
                                progress={Math.trunc(Math.random() * 101)}
                            />
                        )) : <h3 align='center'>No courses enrolled</h3>

                }
            </div>
        </div>
    );
}

export default CoursesList;
