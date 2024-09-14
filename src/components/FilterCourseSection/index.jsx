import React, { useState } from 'react';
import './index.css'

export default function FilterCourseSection({filterType}) {


  const [filterDropdown, setFilterDropdown] = useState(false);
  const [arrowRotate, setArrorRotate] = useState(false);

  return (
    <div className="row px-3">

        <div className="col-12 px-0 py-4" role='button' onClick={()=>{
            setFilterDropdown(!filterDropdown);
            setArrorRotate(!arrowRotate);}}>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='m-0'>{filterType}</h2>
                <i class={`fa-solid fa-angle-up ${arrowRotate ? 'rotate-animation': 'rotate-back'}`}></i>
            </div>
        </div>

        {/* FILTER DROPDOWN CONDITION */}
        {filterDropdown && 

        // RATINGS DROPDOWN
        (filterType === 'Ratings' ? (<div className='pb-3 px-0 d-flex flex-column justify-content-center form-check'>
            <div className="py-2 form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <i class="text-warning  ms-2 fa-solid fa-star"></i>
                <i class="text-warning  ms-2 fa-solid fa-star"></i>
                <i class="text-warning  ms-2 fa-solid fa-star"></i>
                <i class="text-warning  ms-2 fa-solid fa-star-half-stroke"></i>
                <label className="form-check-label ms-2" for="flexRadioDefault1">
                    4.5 &amp; Up
                </label>
            </div>

            <div className="py-2 form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <i class="text-warning  ms-2 fa-solid fa-star"></i>
                <i class="text-warning  ms-2 fa-solid fa-star"></i>
                <i class="text-warning  ms-2 fa-solid fa-star"></i>
                <i class="text-warning  ms-2 fa-regular fa-star"></i>
                <label className="form-check-label ms-2" for="flexRadioDefault1">
                    4.0 &amp; Up
                </label>
            </div>

            <div className="py-2 form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <i class="text-warning  ms-2 fa-solid fa-star"></i>
                <i class="text-warning  ms-2 fa-solid fa-star"></i>
                <i class="text-warning  ms-2 fa-solid fa-star-half-stroke"></i>
                <i class="text-warning  ms-2 fa-regular fa-star"></i>
                <label className="form-check-label ms-2" for="flexRadioDefault1">
                    3.5 &amp; Up
                </label>
            </div>

            <div className="py-2 form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <i class="text-warning  ms-2 fa-solid fa-star"></i>
                <i class="text-warning  ms-2 fa-solid fa-star"></i>
                <i class="text-warning  ms-2 fa-regular fa-star"></i>
                <i class="text-warning  ms-2 fa-regular fa-star"></i>
                <label className="form-check-label ms-2" for="flexRadioDefault1">
                    3.0 &amp; Up
                </label>
            </div>
            
        </div>):

        // PRICE DROPDOWN
        filterType === 'Price' ? (<div className='pb-3 px-0 d-flex flex-column justify-content-center form-check'>
            <div className="py-2 form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label ms-2" for="flexRadioDefault1">
                    Paid
                </label>
            </div>
            <div className="py-2 form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label ms-2" for="flexRadioDefault1">
                    Free
                </label>
            </div>
        </div>):

        // CATEGORIES DROPDOWN
        filterType === 'Categories' ? (<div className='pb-3 px-0 d-flex flex-column justify-content-center'>
            <div className="py-2 form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    Java
                </label>
            </div>

            <div className="py-2 form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    Python
                </label>
            </div>

            <div className="py-2 form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    JavaScript
                </label>
            </div>
            
        </div>):

        // VIDEO DURATION DROPDOWN
        filterType === 'Video Duration' && (<div className='pb-3 px-0 d-flex flex-column justify-content-center'>
            <div className="py-2 form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label ms-2" for="flexRadioDefault1">
                    0-1 Hour
                </label>
            </div>

            <div className="py-2 form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label ms-2" for="flexRadioDefault1">
                    1-3 Hours
                </label>
            </div>

            <div className="py-2 form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label ms-2" for="flexRadioDefault1">
                    3-6 Hours
                </label>
            </div>

            <div className="py-2 form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label ms-2" for="flexRadioDefault1">
                    6+ Hours
                </label>
            </div>
        </div>))}

    </div>
  )
}
