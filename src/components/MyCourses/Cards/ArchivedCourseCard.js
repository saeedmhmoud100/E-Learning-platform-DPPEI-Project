import {useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {addToWishlist, removeFromWishlist} from "../../../store/actions/userActions";
import {useDispatch} from "react-redux";
export const ArchivedCourseCard = ({course,progress}) => {
    const dispatch = useDispatch();

    async function handleWishlistBtn(e){
        await dispatch(removeFromWishlist(e));
    }
    return (
        <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }} className="col-sm-6 col-md-4 col-lg-3 mb-3">

            <div className="card custom-card">
                <div className="wishlist-icon" onClick={_=>handleWishlistBtn(course.id)}>
                    <i className={`fa-solid fa-heart`}></i>
                </div>
                <Link to={'/course-details/' + course.id}>
                <img
                    src={course.thumbnail_link}
                    className="card-img-top custom-card-img"
                    alt={course.title}
                />
                </Link>
                <div className="card-body lh-sm p-2">
                    <h6 className="card-title lh-sm custom-card-title">{course.title}</h6>
                    <p className="card-text lh-sm custom-card-text">{course.instructor_data.user.username}</p>
                    <div className="progress mt-2" role="progressbar" aria-label="Progress" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{ height: '5px' }}>
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p>Continue Course</p>
                </div>
            </div>
        </motion.div>
    )
}
