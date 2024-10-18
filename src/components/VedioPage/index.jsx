import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Route, Routes, useParams } from "react-router-dom";
import CourseSidebar from "./component/CourseSidebar/CourseSidebar";
import { LearningTools } from "./component/LearningTools";
import Overview from "./component/OverView";
import Questions from "./component/Questions";
import Search from "./component/Search";
import CourseReviewCard from "../../Pages/CourseDetails/components/CourseReviewCard";
import Announcements from "./component/Announcement";
import { useSelector, useDispatch } from "react-redux";
import { getCourseReviews, getCourseDetails } from '../../store/actions/coursesAction';
import Video from "./component/Video";

export default function VideoPage() {
    const [selectedTab, setSelectedTab] = useState("Overview");

    const { id } = useParams();
    const review = useSelector(state => state.allCourses.reviews);
    const course = useSelector(state => state.allCourses.course);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!review) {
            dispatch(getCourseReviews(id));
        }
    }, [id, review, dispatch]);

    useEffect(() => {
        if (!course) {
            dispatch(getCourseDetails(id));
        }
    }, [id, course, dispatch]);

    const tabs = [
        { label: "Search", icon: <i className="fa-solid fa-magnifying-glass"></i> },
        { label: "Overview", icon: "📄" },
        { label: "Q&A", icon: "❓" },
        { label: "Announcements", icon: "📢" },
        { label: "Reviews", icon: "⭐" },
        { label: "Learning Tools", icon: "🛠️" },
    ];

    return (
        <div className="container-fluide mb-5">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <Routes>
                        <Route path="/section/:section_id/lecture/:lecture_id" element={<Video />} />
                    </Routes>

                    <div className="window">
                        <nav>
                            <ul className="nav nav-tabs text-dark ms-5 mt-3">
                                {tabs.map((item) => (
                                    <li
                                        key={item.label}
                                        className={`nav-item ${item.label === selectedTab ? "selected" : ""}`}
                                        onClick={() => setSelectedTab(item.label)}
                                    >
                                        <span className="nav-link">
                                            {item.icon} {item.label}
                                        </span>
                                        {item.label === selectedTab ? (
                                            <motion.div
                                                className="underline"
                                                layoutId="underline"
                                                style={{ backgroundColor: "blue", height: "3px", width: "100%" }}
                                            />
                                        ) : null}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <main>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedTab}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {selectedTab === "Q&A" && <Questions />}
                                    {selectedTab === "Search" && <Search />}
                                    {selectedTab === "Overview" && <Overview course={course} />}
                                    {selectedTab === "Announcements" && <Announcements />}
                                    {selectedTab === "Learning Tools" && <LearningTools />}
                                    {selectedTab === "Reviews" && review?.map((review, i) => (
                                        <CourseReviewCard review={review} key={i} />
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </main>
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
    );
}
