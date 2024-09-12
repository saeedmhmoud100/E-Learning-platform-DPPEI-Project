import React from 'react'
import './index.css';
import { useState } from 'react';

export default function Courses() {

  const [displayDropdown, setDisplayDropdown] = useState(false);
  return (
    <div className='mt-5'>
      <div className="container">
        <h1 className='py-3'>1,000 Results for 'search term'</h1>
          <div className="row">
              <div className="col-lg-6 ">
                  <div className="container">
                      <div className="row">

                          <div className="col-12 p-0 mb-3">
                              <div className='position-relative'>
                                <button className='btn btn-outline-dark p-3 w-50' onClick={()=>{setDisplayDropdown(!displayDropdown)}}>Sort by Most Relevant <i class="fa-solid fa-chevron-down ms-2"></i></button>
                                {displayDropdown && (<ul className='dropdown-style'>
                                    <li>Most relevant</li>                                                                                                                                                                                                                                      
                                    <li>Most viewed</li>
                                    <li>Highest rated</li>
                                    <li>Newest</li>
                                </ul>)}
                              </div>
                          </div>

                          <hr />
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

              <div className="col-lg-6">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-lg-4">
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
