import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseSections } from '../../../../store/actions/courseSectionsActions'; // Update the import path as needed
import 'bootstrap/dist/css/bootstrap.min.css';

function CourseSidebar({ courseId }) {
    const dispatch = useDispatch();
    const {results:sections} = useSelector((state) => state.sections.sections || []);

    useEffect(() => {
        const fetchSections = async () => {
            console.log('Fetching sections for course:', courseId);
            if (courseId) {
                await dispatch(getCourseSections(courseId));
            }
        };

        fetchSections();
    }, [courseId, dispatch]);

    return (
        <div className="course-sidebar">
            {sections && sections.length > 0 && (
                sections.map((section, index) => (
                    <Section key={index} {...section} />
                ))
            )}
        </div>
    );
}

function Section({ title, total_duration, lectures }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="section dropdownUl pb-3">
            <h3 className="section-title" onClick={toggleDropdown}>
                {title} <span className="caret">{isOpen ? '▼' : '▲'}</span>
            </h3>
            <p className="section-progress"> {total_duration}</p>
            {isOpen && <Dropdown items={lectures} />}
        </div>
    );
}

function Dropdown({ items }) {
    return (
        <ul className="section-items dropdown bg-light">
            {items.map((item, index) => (
                <SectionItem key={index}>{item.title}</SectionItem>
            ))}
        </ul>
    );
}

function SectionItem({ children }) {
    return <li className="section-item">{children}</li>;
}

export default CourseSidebar;
