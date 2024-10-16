import React, { useEffect, useState } from "react";
import {Route, Routes, useParams} from "react-router-dom";
import CourseSidebar from "./component/CourseSidebar/CourseSidebar";
import { LearningTools } from "./component/LearningTools";
import Overview from "./component/OverView";
import Questions from "./component/Questions";
import Search from "./component/Search";
import CourseReviewCard from "../../Pages/CourseDetails/components/CourseReviewCard";
import Announcements from "./component/Announcement";
import { useSelector, useDispatch } from "react-redux";
import {getCourseReviews, getCourseDetails} from '../../store/actions/coursesAction'
import Video from "./component/Video";
import {getLecture} from "../../store/actions/lecturesAction";

export default function VideoPage() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOverViewOpen, setIsOverViewOpen] = useState(true);
    const [isQ_A_Open, setIsQ_A_Open] = useState(false);
    const [isAnnouncementsOpen, setIsAnnouncementsOpen] = useState(false);
    const [isReviewOpen, setIsReviewOpen] = useState(false);
    const [isLearningToolOpen, setIsLearningToolOpen] = useState(false);

    const { id } = useParams();
    const review = useSelector(state => state.allCourses.reviews)
    const course = useSelector(state => state.allCourses.course)
    const dispatch = useDispatch();
    useEffect(() => {
        if (!review) {
            const fetchCourseReviews = async () => {
                await dispatch(getCourseReviews(id))
            }
            fetchCourseReviews()

        }

    }, [id, review, dispatch])


    useEffect(() => {
        if (!course) {
            const fetchCoursedata = async () => {
                await dispatch(getCourseDetails(id))
            }
            fetchCoursedata()
            // dispatch(getLecture())
        }

    }, [id, course, dispatch])

    return (
        <>
            <div className="container-fluide mb-5">
                <div className="row ">
                    <div className="col-md-8 col-sm-12 ">
                        <div>
                            <Routes>
                                <Route path="/section/:section_id/lecture/:lecture_id" element={<Video />} />
                                {/*<Route path="*" element={<video className=" mt-2 w-100" controls src={myVideo}></video>} />*/}
                            </Routes>
                        </div>
                        <ul className="nav nav-tabs text-dark ms-5 mt-3">
                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    onClick={() => {
                                        setIsSearchOpen(true);
                                        setIsAnnouncementsOpen(false);
                                        setIsLearningToolOpen(false);
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
                                        setIsQ_A_Open(true);
                                        setIsOverViewOpen(false);
                                        setIsReviewOpen(false);
                                    }}
                                >
                                    Q&A
                                </button>
                            </li>
                            {/* <li className="nav-item">
                    <button className="nav-link">Notes</button>
                </li> */}
                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    onClick={() => {
                                        setIsAnnouncementsOpen(true);
                                        setIsSearchOpen(false);
                                        setIsLearningToolOpen(false);
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
                            {isOverViewOpen && <Overview course={course} />}
                            {isAnnouncementsOpen && <Announcements />}
                            {isLearningToolOpen && <LearningTools />}
                            {isReviewOpen && review?.map((review, i) => {
                                return (<CourseReviewCard review={review} key={i} />)
                            })}
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-2 vh-100">
                        <h2>Course Sections</h2>

                        <div className="accordion" id="courseAccordion">
                            <CourseSidebar courseId={id} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
