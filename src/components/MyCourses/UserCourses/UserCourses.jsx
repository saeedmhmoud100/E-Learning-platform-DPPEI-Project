import CourseList from './CourseList';
import './style.css'
function UserCourses() {
    return (
        <div className="container my-5">
            <h1>My Courses</h1>

            <div className="row mt-5">
                <div className="col-md-2">
                    <label className="form-label" htmlFor="sort">Sort by:</label>
                    <select className="form-select" name="sort" id="sort">
                        <option value="access">Recently Accessed</option>
                        <option value="enroll">Recently Enrolled</option>
                        <option value="a-z">Title: A-to-Z</option>
                        <option value="z-a">Title: Z-to-A</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label mx-2" htmlFor="sort">Filter by:</label>
                    <div className="d-flex justify-content-between">
                        <select className="form-select mx-2" name="categories" id="categories">
                            <option selected value="">Categories</option>
                            <option value="web">Web Development</option>
                            <option value="cyber">Cyber Security</option>
                            <option value="machine">Machine Learning</option>
                        </select>
                        <select className="form-select mx-2" name="progress" id="progress">
                            <option selected value="">Progress</option>
                            <option value="inProgress">In Progress</option>
                            <option value="notStarted">Not Started</option>
                            <option value="completed">Completed</option>
                        </select>
                        <select className="form-select mx-2" name="instructor" id="instructor">
                            <option selected value="">Instructor</option>
                            <option value="">Instructor Name</option>
                            <option value="">Instructor Name</option>
                        </select>
                        <button className="btn fw-bold" disabled>Reset</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <label className="form-label" htmlFor="sort">Search by:</label>
                    <input className="form-control ps-5" type="search" aria-label="Search" />
                    <i className="iconSearchBar fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <CourseList />
        </div>);
}

export default UserCourses;