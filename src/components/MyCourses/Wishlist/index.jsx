import React from 'react'
import Footer from  "../../Footer/index.jsx"
import "./style.css"
export default function Wishlist() {
  const RemoveFromWishlist = () => {
   
    console.log("Course removed from wishlist");
  };
  

    return (
      <>
        <div className="container mt-3 ">        
            {/* serach Bar */}
            <div className="row mt-4 p-2">
        <div className="col-12 col-lg-3 d-flex ms-auto">
            <input 
                type="text" 
                className="form-control me-2 w-100" 
                placeholder="Search my courses"
            />
            <button className="btn btn-outline-dark">
                <i className="fas fa-search"></i>
            </button>
        </div>
            </div>
            <div className="row my-4 g-2">
  <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
 
    <div className="card custom-card">
    <div className="wishlist-icon" onClick={RemoveFromWishlist}>
      <i className="fas fa-heart"></i> 
    </div>
      <img 
        src="/images/coursePhoto.jpg" 
        className="card-img-top custom-card-img" 
        alt="React - The Complete Guide"
      />
      <div className="card-body lh-sm p-2">
        <h6 className="card-title lh-sm custom-card-title">React - The Complete Guide 2024 (incl. Next.js, Redux)</h6>
        <p className="card-text lh-sm custom-card-text">Academind by Maximilian Schwarzmüller</p>
        <p className="card-text lh-sm custom-card-text">4.6  (217,520)</p>
        <p className="card-text lh-sm custom-card-text">68.5 total hours • 697 lectures</p>
        <p className="text-muted lh-sm custom-card-text">£299.99 <span className="custom-price">£1,799.99</span></p>
      </div>
    </div>
  </div>

  <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
 
    <div className="card custom-card">
    <div className="wishlist-icon" onClick={RemoveFromWishlist}>
      <i className="fas fa-heart"></i> 
    </div>
      <img 
        src="/images/coursePhoto.jpg" 
        className="card-img-top custom-card-img" 
        alt="React - The Complete Guide"
      />
      <div className="card-body lh-sm p-2">
        <h6 className="card-title lh-sm custom-card-title">React - The Complete Guide 2024 (incl. Next.js, Redux)</h6>
        <p className="card-text lh-sm custom-card-text">Academind by Maximilian Schwarzmüller</p>
        <p className="card-text lh-sm custom-card-text">4.6  (217,520)</p>
        <p className="card-text lh-sm custom-card-text">68.5 total hours • 697 lectures</p>
        <p className="text-muted lh-sm custom-card-text">£299.99 <span className="custom-price">£1,799.99</span></p>
      </div>
    </div>
  </div>

</div>


        </div>
     <Footer/>
      
     </>
    );
};


