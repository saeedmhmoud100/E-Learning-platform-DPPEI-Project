import MyCourses from "../index";

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
            <div className="row my-3 g-3">
                <h2 className='text-dark fs-3 fw-bold mb-0'>Ethical Hacking</h2>
                <p className="my-0">
                    To learn ethical hacking
                </p>
                {
                    courses.map((course, index) => (
                        <MyCourses courseName={course.courseName} instructorName={course.instructorName} progress={course.progress} />
                    ))
                }
            </div>
            <div className="row my-3 g-3">
                <h2 className='text-dark fs-3 fw-bold mb-0'>My python course</h2>
                <p className="my-0">
                    To become a python developer
                </p>
                {
                    courses.map((course, index) => (
                        <MyCourses courseName={course.courseName} instructorName={course.instructorName} progress={course.progress} />
                    ))
                }
            </div>
        </div>
    )
}
