import React, { useState } from 'react';
import './index.css'

export default function FilterCourseSection({filterType, filters, updateCheckOfFilter}) {

  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (filterLabel) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [filterLabel]: !prev[filterLabel], 
    }));
  };


  return (
    <div className="row px-3">
      {filters.map((filter, i) => (
        <>
        <div key={i} className="col-12 px-0 py-4">
          <div
            role="button"
            onClick={() => toggleDropdown(filter.label)} 
          >
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="m-0">{filter.label}</h2>
              <i
                className={`fa-solid fa-angle-up ${
                  openDropdowns[filter.label] ? 'rotate-animation' : 'rotate-back'
                }`}
              ></i>
            </div>
          </div>

          {openDropdowns[filter.label] && ( 
            <form className="py-2 px-0 d-flex flex-column justify-content-center form-check">
              {filter.label === 'Ratings' ? (
                filter.options.map((option, j) => (
                  <div className="py-2 form-check" key={j}>
                    <input
                      className="form-check-input radio-style"
                      type={filter.type}
                      name="flexRadioDefault"
                      id={`flexRadioDefault${j}`}
                      onChange={()=>updateCheckOfFilter(i)}
                    />
                    <i className="text-warning ms-2 fa-solid fa-star"></i>
                    <i className="text-warning ms-2 fa-solid fa-star"></i>
                    <i className="text-warning ms-2 fa-solid fa-star"></i>
                    <i className="text-warning ms-2 fa-solid fa-star-half-stroke"></i>
                    <label className="form-check-label ms-2" htmlFor={`flexRadioDefault${j}`}>
                      {option}
                    </label>
                  </div>
                ))
              ) : (
                filter.options.map((option, j) => (
                  <div className="py-2 form-check" key={j}>
                    <input
                      className="form-check-input radio-style"
                      type={filter.type}
                      name={filter.type === 'checkbox' ? 'flexCheckDefault' : `flexRadioDefault${j}`}
                      id={filter.type === 'checkbox' ? 'flexCheckDefault' : `flexRadioDefault${j}`}
                      onChange={()=>updateCheckOfFilter(i)}
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor={filter.type === 'checkbox' ? 'flexCheckDefault' : `flexRadioDefault${j}`}
                    >
                      {option}
                    </label>
                  </div>
                ))
              )}
            </form>
          )}
        </div>
        {i!=filters.length-1 && (<hr className='m-0'/>)}
        </>
        
      ))}
    </div>
  );

}
