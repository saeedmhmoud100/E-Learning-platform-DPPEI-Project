import React from 'react';
import './index.css'

export default function FilterCourseSection({filterType}) {
  return (
    <div className="row">

        <div className="col-12 px-0 py-4" role='button'>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='m-0'>{filterType}</h2>
                <i class="fa-solid fa-angle-up"></i>
            </div>
        </div>
        <hr className='m-0'/>

    </div>
  )
}
