import React from 'react'
import './index.css';
import { useState } from 'react';
import CourseCards from '../../components/CourseCards';
import FilterCourseSection from '../../components/FilterCourseSection';

export default function Courses() {

  const [displayDropdown, setDisplayDropdown] = useState(false);
  return (
    <div className='mt-5 mb-5'>
      <div className="container">
        <h1 className='py-4 text-center'>1,000 Results for 'search term'</h1>
        <div className='position-relative'>
            <button className='btn btn-outline-dark p-3 w-25 btn-hover-style' onClick={()=>{setDisplayDropdown(!displayDropdown)}}>Sort by Most Relevant <i class="fa-solid fa-chevron-down ms-2"></i></button>
            {displayDropdown && (<ul className='dropdown-style'>
                <li className='list-style-none py-1'>Most relevant</li>                                                                                                                                                                                                                                      
                <li className='list-style-none py-1'>Most viewed</li>
                <li className='list-style-none py-1'>Highest rated</li>
                <li className='list-style-none py-1'>Newest</li>
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
