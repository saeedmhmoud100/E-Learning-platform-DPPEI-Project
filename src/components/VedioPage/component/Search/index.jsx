    import React from "react";

    export default function Search() {
    return (
        <>
        <div className="d-flex justify-content-center">
            <form class="d-flex mt-5 w-75 ">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
                Search
            </button>
            </form>
        </div>
        <div className="mt-5">
            <p className="h4 fw-bold text-center">Start a new search</p>
            <p className=" text-center">To find captions, lectures or resources</p>
        </div>
        </>
    );
    }
