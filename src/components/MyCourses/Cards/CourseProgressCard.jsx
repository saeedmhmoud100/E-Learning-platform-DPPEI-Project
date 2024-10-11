import './style.css';
import {Link} from "react-router-dom";

function CourseProgressCard({ course, progress }) {
    console.log(course);

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card bg-transparent h-100" style={{width:90+'%'}}>
                <Link to={'/course-details'}>
                    <div className="img">
                        <img src={course.thumbnail_link} className="w-100" alt="Course" />
                    </div>
                </Link>
                <div className="content p-2">
                    <h5>{course.title}</h5>
                    <div className="progress mt-2" role="progressbar" aria-label="Progress" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{ height: '5px' }}>
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p>{progress}% completed</p>
                </div>
            </div>
        </div>
    );
}

export default CourseProgressCard;
