import CourseProgressCard from "../Cards/CourseProgressCard";

export const MyListItem = ({title, title2, courses}) => {
    return (
        <div className="row my-3 g-3">
            <h2 className='text-dark fs-3 fw-bold mb-0'>{title}</h2>
            <p className="my-0">
                {title2}
            </p>
            {
                courses.map((course, index) => (
                    <CourseProgressCard courseName={course.courseName} instructorName={course.instructorName} progress={course.progress} />
                ))
            }
        </div>
    )
}
