import {useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
export const WishlistCard = ({course}) => {
    const [addedToWishlist, setAddToWishlist] = useState(false);

    function addToWishlist(){
        setAddToWishlist(!addedToWishlist);
    }
    return (
        <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }} className="col-sm-6 col-md-4 col-lg-3 mb-3">

            <div className="card custom-card">
                <div className="wishlist-icon" onClick={addToWishlist}>
                    <i className={`${addedToWishlist ? 'fa-regular' : 'fa-solid'} fa-heart`}></i>
                </div>
                <Link to={'/course-details/' + course.id}>
                <img
                    src={course.thumbnail_link}
                    className="card-img-top custom-card-img"
                    alt="React - The Complete Guide"
                />
                </Link>
                <div className="card-body lh-sm p-2">
                    <h6 className="card-title lh-sm custom-card-title">{course.title}</h6>
                    <p className="card-text lh-sm custom-card-text">{course.brief_description}</p>
                    <p className="card-text lh-sm custom-card-text">{course.rating_avg || 0} ({course.rating_count})</p>
                    <p className="card-text lh-sm custom-card-text">{course.total_duration} total hours • {course.lectures_count} lectures</p>
                    <p className="text-muted lh-sm custom-card-text">£{course.price} <span
                        className="custom-price">{ course.price_before_discount ?  "£" + course.price_before_discount : ""}</span></p>
                </div>
            </div>
        </motion.div>
    )
}
