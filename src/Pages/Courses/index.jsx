import React from 'react'
import './index.css';
import { useState } from 'react';
import CourseCards from '../../components/CourseCards';
import FilterCourseSection from '../../components/FilterCourseSection';

export default function Courses() {

  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [sortType, setSortType] = useState('Most Relevant');

  return (
    <div className='mt-5 mb-5'>
      <div className="container">
        <h1 className='py-4 text-center'>1,000 Results for 'search term'</h1>
        <div className='position-relative'>
            <button className={`button-style p-3 w-25 ${displayDropdown && 'change-btn-style'}`} onClick={()=>{
                setDisplayDropdown(!displayDropdown)}}>
                    Sort by {sortType}
                    <i class="fa-solid fa-chevron-down ms-2"></i></button>
            
            {/* DISPLAY DROPDOWN CONDITION */}
            {displayDropdown && (<ul className='dropdown-style'>
                <li className='list-style-none p-2 text-center w-100' onClick={()=>{
                    setSortType('Most relevant');
                    setDisplayDropdown(!displayDropdown);
                    }}>Most relevant</li>                                                                                                                                                                                                                                      
                <li className='list-style-none p-2 text-center w-100' onClick={()=>{
                    setSortType('Most viewed');
                    setDisplayDropdown(!displayDropdown);
                    }}>Most viewed</li>
                <li className='list-style-none p-2 text-center w-100' onClick={()=>{
                    setSortType('Highest rated');
                    setDisplayDropdown(!displayDropdown);
                    }}>Highest rated</li>
                <li className='list-style-none p-2 text-center w-100' onClick={()=>
                    {setSortType('Newest');
                    setDisplayDropdown(!displayDropdown);
                    }}>Newest</li>
            </ul>)}
        </div>
        <hr />
        <div className="row">
              <div className="col-lg-4 p-0">
                  <div className="container-fluid">
                      <FilterCourseSection filterType={'Ratings'}/>
                      <hr className='m-0'/>
                      <FilterCourseSection filterType={'Price'}/>
                      <hr className='m-0'/>
                      <FilterCourseSection filterType={'Categories'}/>
                      <hr className='m-0'/>
                      <FilterCourseSection filterType={'Video Duration'}/>
                      <hr className='m-0'/>
                  </div>
              </div>

              <div className="col-lg-8 py-4">
                  <div className="container-fluid">
                        <CourseCards />
                    </div>
              </div>
          </div>
      </div>
    </div>
  )
}
