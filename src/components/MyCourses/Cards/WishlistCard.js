import {useState} from "react";
import {Link} from "react-router-dom";

export const WishlistCard = () => {
    const [addedToWishlist, setAddToWishlist] = useState(false);

    function addToWishlist(){
        setAddToWishlist(!addedToWishlist);
    }
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">

            <div className="card custom-card">
                <div className="wishlist-icon" onClick={addToWishlist}>
                    <i className={`${addedToWishlist ? 'fa-regular' : 'fa-solid'} fa-heart`}></i>
                </div>
                <Link to={'/course-details'}>
                <img
                    src="/images/coursePhoto.jpg"
                    className="card-img-top custom-card-img"
                    alt="React - The Complete Guide"
                />
                </Link>
                <div className="card-body lh-sm p-2">
                    <h6 className="card-title lh-sm custom-card-title">React - The Complete Guide 2024
                        (incl. Next.js, Redux)</h6>
                    <p className="card-text lh-sm custom-card-text">Academind by Maximilian
                        Schwarzmüller</p>
                    <p className="card-text lh-sm custom-card-text">4.6 (217,520)</p>
                    <p className="card-text lh-sm custom-card-text">68.5 total hours • 697 lectures</p>
                    <p className="text-muted lh-sm custom-card-text">£299.99 <span
                        className="custom-price">£1,799.99</span></p>
                </div>
            </div>
        </div>
    )
}
