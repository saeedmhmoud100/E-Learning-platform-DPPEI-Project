import React from 'react'
import Footer from "../../Footer/index.jsx"
import "./style.css"
import {WishlistCard} from "../Cards/WishlistCard";
import {useSelector} from "react-redux";
import GeneralLoading from "../../Loading/GeneralLoading/GeneralLoading";

export default function Wishlist() {
    const { userData:{wishlist},loading } = useSelector((state) => state.user);



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
                    {
                        loading ? <GeneralLoading/> :
                        wishlist?.length > 0 ? wishlist?.map(({course}, index) => (
                            <WishlistCard key={index} course={course}/>
                        )) : <h1>No courses in wishlist</h1>
                    }
                </div>
            </div>
        </>
    );
};


