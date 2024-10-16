import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseSections } from '../../../../store/actions/courseSectionsActions'; // Update the import path as needed
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const bgColor = {
    backgroundColor: "#1abc9c",
}

function CourseSidebar({ courseId }) {
    const dispatch = useDispatch();
    const { results: sections } = useSelector((state) => state.sections.sections || []);

    useEffect(() => {
        if (!sections) {
            const fetchSections = async () => {
                console.log('Fetching sections for course:', courseId);
                if (courseId) {
                    await dispatch(getCourseSections(courseId));
                }
            };

            fetchSections();
        }

    }, [courseId, dispatch, sections]);

    return (
        <>
            {sections && sections.length > 0 && (
                sections.map((section, index) => (
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={"section" + section.id}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target={"#collapseSection"+ section.id} aria-expanded="true" aria-controls={"collapseSection"+ section.id}>
                                Section {index +1}: {section.title}
                            </button>
                        </h2>
                        <div id={"collapseSection"+ section.id} className="accordion-collapse collapse show" aria-labelledby={"section"+ section.id}
                             data-bs-parent="#courseAccordion">
                            <div className="accordion-body">
                                <ul className="list-group">

                                    {section?.lectures?.length ? section?.lectures?.map((lecture, index) => (
                                        <li className="list-group-item" key={index}>
                                            <Link to={`/videopage/${courseId}/section/${section.id}/lecture/${lecture.id}`}>{lecture.title}</Link>
                                        </li>
                                    )) : (
                                        <li className="list-group-item">No lectures found</li>
                                    )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>



    );
}

export default CourseSidebar;
