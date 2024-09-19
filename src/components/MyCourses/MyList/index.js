import CourseProgressCard from "../Cards/CourseProgressCard";
import {MyListItem} from "./MyListItem";

export const MyList = () => {

    const courses = [
        { courseName: 'React Basics', instructorName: 'John Doe', progress: 20 },
        { courseName: 'Advanced React', instructorName: 'Jane Smith', progress: 50 },
        { courseName: 'JavaScript Essentials', instructorName: 'Mark Lee', progress: 80 },
        { courseName: 'CSS Mastery', instructorName: 'Sarah Jones', progress: 95 },
        { courseName: 'HTML for Beginners', instructorName: 'Emily White', progress: 40 },
        { courseName: 'Bootstrap Basics', instructorName: 'Chris Brown', progress: 60 },
        ]

    return (
        <div className='container'>
            <MyListItem title='Ethical Hacking' title2='To learn ethical hacking' courses={courses} />
            <MyListItem title='My python course' title2='To become a python developer' courses={courses} />
        </div>
    )
}
