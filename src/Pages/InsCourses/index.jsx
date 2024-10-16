import {LineChart} from "../../components/Charts/LineChart";
import {useEffect, useState} from "react";
import {BarChart} from "../../components/Charts/barChart";
import InsCoursesCard from "../../components/InsCourses/InsCoursesCard";
import {useSelector} from "react-redux";


export default function InsCourses() {
    const {instructor} = useSelector(state => state.instructor)

    return(
        <div className='container'>
            <h1 className='text-center'>Your Courses</h1>

            <div className="courses row">
                {
                    instructor?.courses?.map((course, index) => {
                        return (
                            <div className="course ">
                                <InsCoursesCard course={course} key={index}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}