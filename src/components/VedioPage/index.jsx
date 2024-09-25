    import React, { useState } from "react";
    import myVideo from "./images/video1.mp4";
    import CourseSidebar from "./component/CourseSidebar/CourseSidebar";
    import { LearningTools } from "./component/LearningTools";
    import Overview from "./component/OverView";
    import Questions from "./component/Questions";
    import Search from "./component/Search";
import Announcements from "./component/Announcement";
import Review from "./component/Review";

    export default function VideoPage() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOverViewOpen, setIsOverViewOpen] = useState(true);
    const [isQ_A_Open, setIsQ_A_Open] = useState(false);
    const [isNotesOpen, setIsNotesOpen] = useState(false);
    const [isAnnouncementsOpen, setIsAnnouncementsOpen] = useState(false);
    const [isReviewOpen, setIsReviewOpen] = useState(false);
    const [isLearningToolOpen, setIsLearningToolOpen] = useState(false);
    return (
        <>
        <div className="container-fluide mb-5">
            <div className="row ">
            <div className="col-md-8 col-sm-12 ">
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
                    <button
                    className="nav-link"
                    onClick={() => {
                        setIsAnnouncementsOpen(false);
                        setIsSearchOpen(false);
                        setIsLearningToolOpen(false);
                        setIsNotesOpen(false);
                        setIsQ_A_Open(true);
                        setIsOverViewOpen(false);
                        setIsReviewOpen(false);
                    }}
                    >
                    Q&A
                    </button>
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
                    <button className="nav-link" onClick={() => {
                        setIsAnnouncementsOpen(false);
                        setIsSearchOpen(false);
                        setIsLearningToolOpen(false);
                        setIsNotesOpen(false);
                        setIsQ_A_Open(false);
                        setIsOverViewOpen(false);
                        setIsReviewOpen(true);
                    }}>Reviews</button>
                </li>
                <li className="nav-item">
                    <button
                    className="nav-link"
                    onClick={() => {
                        setIsAnnouncementsOpen(false);
                        setIsSearchOpen(false);
                        setIsLearningToolOpen(true);
                        setIsNotesOpen(false);
                        setIsQ_A_Open(false);
                        setIsOverViewOpen(false);
                        setIsReviewOpen(false);
                    }}
                    >
                    Learning Tools
                    </button>
                </li>
                </ul>
                <div>
                    {isQ_A_Open && <Questions />}
                    {isSearchOpen && <Search />}
                    {isOverViewOpen && <Overview />}
                    {isAnnouncementsOpen && <Announcements />}
                    {isLearningToolOpen && <LearningTools />}
                    {isReviewOpen &&<Review />}
                </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-2 vh-100">
                <CourseSidebar />
            </div>
            </div>
        </div>
        </>
    );
    }
