import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse } from '../../store/actions/coursesAction';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseTable = () => {
    const { courses, loading, error } = useSelector((state) => state.allCourses);
    const dispatch = useDispatch();

    const handleDeleteCourse = (id) => {
        dispatch(deleteCourse(id));
    };

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
            <table className="table table-striped table-bordered mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Price</th>
                        <th>Instructor Id</th>
                        <th>Course Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>${course.price}</td>
                            <td>{course.instructorId}</td>
                            <td>
                                <img
                                    src={course.thumbnail_link}
                                    alt={course.title}
                                    className="img-fluid"
                                    style={{ maxWidth: '100px' }}
                                />
                            </td>
                            <td>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteCourse(course.id)}
                                    disabled={loading}
                                >
                                    Delete
                                </motion.button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CourseTable;
