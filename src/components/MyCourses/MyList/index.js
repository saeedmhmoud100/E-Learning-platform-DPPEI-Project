import CourseProgressCard from "../Cards/CourseProgressCard";
import {MyListItem} from "./MyListItem";
import {useSelector} from "react-redux";
import GeneralLoading from "../../Loading/GeneralLoading/GeneralLoading";
import React from "react";

export const MyList = () => {

    const { userData:{courses_enrolled:courses},loading } = useSelector((state) => state.user);


    return (
        <div className='container'>
            {
                loading ? <GeneralLoading></GeneralLoading> :
                    courses?.length > 0 ?<MyListItem title='All Courses' title2='To learn and improve skills' courses={courses} />
                        : <h3 align='center'>No courses enrolled</h3>
            }

        </div>
    )
}
