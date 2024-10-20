import './style.css';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
function CourseProgressCard({ courseName, instructorName, image,course,l=true,progress=20 }) {
    return (
        <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    className={l ? "col-sm-6 col-md-4 col-lg-3" : ""}>
            <div className="card bg-transparent h-100" style={{width:90+'%'}}>
                <Link to={'/course-details/'+course.id}>
                    <div className="img">
                        <img src={image?image:'/images/coursePhoto.jpg'} className="w-100" alt="Course" />
                    </div>
                </Link>
                <div className="content p-2">
                    <h5>{courseName}</h5>
                    <h6>{instructorName}</h6>
                    <div className="progress mt-2" role="progressbar" aria-label="Progress" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{ height: '5px' }}>
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p>{progress}% completed</p>
                </div>
            </div>
        </motion.div>
    );
}

export default CourseProgressCard;
