    import React, { useState } from "react";
    import myVideo from "./images/video1.mp4";
    import CourseSidebar from "./component/CourseSidebar";
    /*     import "./vedio.sass";
    */ export default function VideoPage() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOverViewOpen, setIsOverViewOpen] = useState(false);
    const [isQ_A_Open, setIsQ_A_Open] = useState(false);
    const [isNotesOpen, setIsNotesOpen] = useState(false);
    const [isAnnouncementsOpen, setIsAnnouncementsOpen] = useState(false);
    const [isReviewOpen, setIsReviewOpen] = useState(false);
    const [isLearningToolOpen, setIsLearningToolOpen] = useState(false);
    return (
        <>
        <div className="container-fluide">
            <div className="row ">
            <div className="col-8 ">
                <div>
                <video className=" mt-2 w-100" controls src={myVideo}></video>
                </div>
                <ul className="nav nav-tabs text-dark ms-5 mt-3">
                <li className="nav-item">
                    <button
                    className="nav-link"
                    onClick={() => {
                        setIsSearchOpen(true);
                        setIsAnnouncementsOpen(false);
                        setIsLearningToolOpen(false);
                        setIsNotesOpen(false);
                        setIsQ_A_Open(false);
                        setIsOverViewOpen(false);
                        setIsReviewOpen(false);
                    }}
                    >
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className="nav-link"
                    onClick={() => {
                        setIsAnnouncementsOpen(false);
                        setIsSearchOpen(false);
                        setIsLearningToolOpen(false);
                        setIsNotesOpen(false);
                        setIsQ_A_Open(false);
                        setIsOverViewOpen(true);
                        setIsReviewOpen(false);
                    }}
                    >
                    Overview
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Q&A</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Notes</button>
                </li>
                <li className="nav-item">
                    <button
                    className="nav-link"
                    onClick={() => {
                        setIsAnnouncementsOpen(true);
                        setIsSearchOpen(false);
                        setIsLearningToolOpen(false);
                        setIsNotesOpen(false);
                        setIsQ_A_Open(false);
                        setIsOverViewOpen(false);
                        setIsReviewOpen(false);
                    }}
                    >
                    Announcements
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Reviews</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link">Learning Tools</button>
                </li>
                </ul>
                <div >
                {isSearchOpen && (
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
                )}
                {isAnnouncementsOpen && (
                    <div className="text-center">
                    <p className="h2 mt-5">No announcements posted yet</p>
                    <p className=" mt-2">
                        The instructor hasn’t added any announcements to this course
                        yet. Announcements <br /> are used to inform you of updates
                        or additions to the course.
                    </p>
                    </div>
                )}
                {isOverViewOpen && (
                    <div>
                    <p className=" mt-3 ms-5 fs-5">A super pack course for JavaScript enthusiast who wants to learn the whole process of <br/> building your Apps with Vue</p>
                    <hr/>
                    </div>
                )}
                </div>
            </div>
            <div className="col-4  mt-2 vh-100">
                <CourseSidebar />
            </div>
            </div>
        </div>
        </>
    );
    }
