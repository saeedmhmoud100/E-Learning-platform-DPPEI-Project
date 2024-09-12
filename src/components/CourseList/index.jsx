import React, { useState } from 'react';
import MyCourses from '../MyCourses';

function CoursesList() {
    const courses = [
        { courseName: 'React Basics', instructorName: 'John Doe', progress: 20 },
        { courseName: 'Advanced React', instructorName: 'Jane Smith', progress: 50 },
        { courseName: 'JavaScript Essentials', instructorName: 'Mark Lee', progress: 80 },
        { courseName: 'CSS Mastery', instructorName: 'Sarah Jones', progress: 95 },
        { courseName: 'HTML for Beginners', instructorName: 'Emily White', progress: 40 },
        { courseName: 'Bootstrap Basics', instructorName: 'Chris Brown', progress: 60 },
        { courseName: 'Node.js Fundamentals', instructorName: 'Michael King', progress: 100 },
        { courseName: 'Python for Data Science', instructorName: 'Emma Wilson', progress: 0 },
        { courseName: 'Django for Beginners', instructorName: 'Sophia Green', progress: 25 },
        { courseName: 'Introduction to SQL', instructorName: 'James Black', progress: 100 },
        { courseName: 'Machine Learning with Python', instructorName: 'Olivia White', progress: 0 },
        { courseName: 'Data Visualization with D3.js', instructorName: 'Ethan Scott', progress: 100 },
        { courseName: 'Introduction to AI', instructorName: 'Mia Clark', progress: 100 },
        { courseName: 'Java Programming', instructorName: 'Liam Harris', progress: 75 },
        { courseName: 'Angular Fundamentals', instructorName: 'Ava Lewis', progress: 0 },
        { courseName: 'Vue.js Basics', instructorName: 'Noah Robinson', progress: 100 },
        { courseName: 'Full Stack Web Development', instructorName: 'Isabella Martinez', progress: 100 },
        { courseName: 'Digital Marketing', instructorName: 'Jacob Young', progress: 50 },
        { courseName: 'Cloud Computing with AWS', instructorName: 'Mason Lee', progress: 100 },
        { courseName: 'UX/UI Design Principles', instructorName: 'Charlotte King', progress: 70 },
        { courseName: 'Introduction to Cyber Security', instructorName: 'Landon Wright', progress: 60 },
        { courseName: 'DevOps Practices', instructorName: 'Amelia Carter', progress: 100 },
        { courseName: 'Blockchain Basics', instructorName: 'Logan Martinez', progress: 100 },
        { courseName: 'Git and GitHub', instructorName: 'Harper Evans', progress: 95 },
        { courseName: 'Introduction to Big Data', instructorName: 'Ella Adams', progress: 0 },
        { courseName: 'Web Scraping with Python', instructorName: 'Oliver Miller', progress: 100 },
        { courseName: 'Building RESTful APIs', instructorName: 'Avery Nelson', progress: 45 },
        { courseName: 'Computer Vision with OpenCV', instructorName: 'Lily Baker', progress: 55 },
        { courseName: 'Algorithm Design', instructorName: 'Jack Harris', progress: 100 },
        { courseName: 'Game Development with Unity', instructorName: 'Sofia Brown', progress: 30 },
    ];
    
    
    

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const totalPages = Math.ceil(courses.length / itemsPerPage);

    const currentCourses = courses.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="row g-4 my-4">
                {currentCourses.map((course, index) => (
                    <MyCourses
                    key={index}
                    courseName={course.courseName}
                    instructorName={course.instructorName}
                    progress={course.progress}
                    // image={course.image}
                    />
                ))}
            </div>

            <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default CoursesList;
