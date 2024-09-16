import {AdminSidebar} from "../../components/Admin/AdminSidebar";
import {Route, Routes} from "react-router-dom";
import {Profile} from "../../components/Admin/Profile";
import {CoursesOrdered} from "../../components/Admin/CoursesOrdered";
import {PublishedCourses} from "../../components/Admin/PublishedCourses";
import {CourseAnalysis} from "../../components/Admin/CourseAnalysis";

export const AdminPage = () => {
    return (
        <div className='container pt-4'>
            <h1 className={'text-center mb-3'}>Admin Dashboard</h1>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <div className="position-sticky" style={{top:'10px'}}>
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
