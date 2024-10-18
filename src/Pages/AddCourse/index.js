import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import {createCourse} from "../../store/actions/coursesAction";
import {useDispatch} from "react-redux";
import {successNotification} from "../../hooks/Notification";

function AddCourses() {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const thumbnailLinkRef = useRef();
    const briefDescriptionRef = useRef();
    const priceBeforeDiscountRef = useRef();
    const [submitData, setSubmitData] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        if(submitData?.title) {
            dispatch(createCourse(submitData));
            successNotification('Course added successfully');
        }
    }, [submitData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
            thumbnail_link: thumbnailLinkRef.current.value,
            brief_description: briefDescriptionRef.current.value,
            price_before_discount: priceBeforeDiscountRef.current.value,
        };

        setSubmitData(data);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container my-5 p-3"
        >
            <h2 className="text-center mb-4">Add New Course</h2>
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <motion.input
                        type="text"
                        ref={titleRef}
                        required
                        className="form-control"
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <motion.input
                        type="text"
                        ref={descriptionRef}
                        required
                        className="form-control"
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <motion.input
                        type="text"
                        ref={priceRef}
                        required
                        className="form-control"
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Thumbnail Link</label>
                    <motion.input
                        type="text"
                        ref={thumbnailLinkRef}
                        required
                        className="form-control"
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Brief Description</label>
                    <motion.input
                        type="text"
                        ref={briefDescriptionRef}
                        required
                        className="form-control"
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price Before Discount</label>
                    <motion.input
                        type="text"
                        ref={priceBeforeDiscountRef}
                        required
                        className="form-control"
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <motion.button
                    type="submit"
                    className="btn btn-primary w-100"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Add Course
                </motion.button>
            </form>
        </motion.div>
    );
}

export default AddCourses;
