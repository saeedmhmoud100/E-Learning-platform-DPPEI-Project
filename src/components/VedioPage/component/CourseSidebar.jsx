    import React, { useState } from 'react';
    import  "./style.css"
    import 'bootstrap/dist/css/bootstrap.min.css';

    // Course data
    const courseData = [
    {
        title: 'Section 1: Installing Vue.JS',
        progress: '0/3',
        duration: '15min',
        items: [
        'What is VueJS',
        'Introduction to VueJS'
        ]
    },
    // ... other sections
    ];

    function CourseSidebar() {
    return (
        <div className="course-sidebar">
        {courseData.map((section, index) => (
            <Section key={index} {...section} />
        ))}
        </div>
    );
    }

    function Section({ title, progress, duration, items }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="section dropdownUl pb-3">
        <h3 className="section-title " onClick={toggleDropdown}>
            {title} <span className="caret">{isOpen ? '▼' : '▲'}</span>
        </h3>
        <p className="section-progress">{progress} | {duration}</p>
        {isOpen && <Dropdown items={items} />}
        </div>
    );
    }

    function Dropdown({ items }) {
    return (
        <ul className="section-items dropdown bg-light">
            <li>lesson 1</li>
            <li>lesson 2</li>
            <li>lesson 3</li>
  {/*       {items.map((item, index) => (
            <SectionItem key={index}>{item}</SectionItem>
        )) */}
        </ul>
    );
    }

  /*   function SectionItem({ title }) {
    return <li className="section-item">{title}</li>;
    } */

    export default CourseSidebar;