import {LineChart} from "../../components/Charts/LineChart";
import {useEffect, useState} from "react";
import {BarChart} from "../../components/Charts/barChart";
import InsCoursesCard from "../../components/InsCourses/InsCoursesCard";


export default function InsCourses() {


    return(
        <div className='container'>
            <h1 className='text-center'>Your Courses</h1>

            <div className="courses row">
                <div className="course">
                    <InsCoursesCard />
                </div>
                <div className="course">
                    <InsCoursesCard />
                </div>
                <div className="course">
                    <InsCoursesCard />
                </div>
                <div className="course">
                    <InsCoursesCard />
                </div>
            </div>

        </div>
    )
}