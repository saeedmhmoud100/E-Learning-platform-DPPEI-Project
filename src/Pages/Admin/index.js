import {Route, Routes} from "react-router-dom";
import {Profile} from "./Profile";
import {CoursesOrdered} from "./CoursesOrdered";
import {CourseAnalysis} from "./CourseAnalysis";
import {PublishedCourses} from "./PublishedCourses";
import {AdminSidebar} from "../../components/Admin/AdminSidebar";

export const AdminDashboard = () => {
    return (
        <div className='container pt-4'>
            <h1 className={'text-center mb-3'}>Admin Dashboard</h1>
            <div className="row">
                <div className="col-md-3">
                    <div className="">
                        <AdminSidebar />
                    </div>
                </div>

                <div className="col-md-9">
                        <Routes>
                            <Route path="/profile" element={<Profile />} />
                            <Route path="*" element={<></>} />
                            <Route path="courses-ordered" element={<CoursesOrdered />} />
                            <Route path="published-courses" element={<PublishedCourses />} />
                            <Route path="course-analysis" element={<CourseAnalysis />} />
                        </Routes>
                </div>
            </div>

        </div>
    )
}
