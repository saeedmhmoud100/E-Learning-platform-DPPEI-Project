import React from 'react'
import './index.css';
import { useState } from 'react';
import CourseCards from '../../components/CourseCards';

export default function Courses() {

  const [displayDropdown, setDisplayDropdown] = useState(false);
  return (
    <div className='mt-5 mb-5'>
      <div className="container">
        <h1 className='py-4 text-center'>1,000 Results for 'search term'</h1>
        <div className='position-relative'>
            <button className='btn btn-outline-dark p-3 w-25 btn-hover-style' onClick={()=>{setDisplayDropdown(!displayDropdown)}}>Sort by Most Relevant <i class="fa-solid fa-chevron-down ms-2"></i></button>
            {displayDropdown && (<ul className='dropdown-style'>
                <li className='list-style-none'>Most relevant</li>                                                                                                                                                                                                                                      
                <li className='list-style-none'>Most viewed</li>
                <li className='list-style-none'>Highest rated</li>
                <li className='list-style-none'>Newest</li>
            </ul>)}
        </div>
        <hr />
        <div className="row py-5">
              <div className="col-lg-4">
                  <div className="container">
                      <div className="row">

                          <div className="col-12">
                              <div className="">
                                  <h2>Rating</h2>
                              </div>
                          </div>
                          <div className="col-12">

                          </div>
                          <div className="col-12">

                          </div>
                          <div className="col-12">

                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-8">
                  <div className="container-fluid">
                        <CourseCards />
                    </div>
              </div>
          </div>
      </div>
    </div>
  )
}
