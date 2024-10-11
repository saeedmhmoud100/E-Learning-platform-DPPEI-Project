import React, { useEffect, useState } from 'react';
import './index.css'

export default function FilterCourseSection({handleUserFilterInput, filtersCleared}) {

  const [openDropdowns, setOpenDropdowns] = useState({});
  const filters = [
    {label:'Ratings',options:['4.5','4.0 & Up','3.5 & Up','3.0 & Up']},
    {label:'Price',options:['1000-1500','500-1000','100-500']},
    {label:'Categories',options:['Java','Python','JavaScript','C++', 'Web Development']},
    {label:'Video Duration',options:['0-1 Hour','1-3 Hours','3-6 Hours','6-8 Hours']}
  ]

  const toggleDropdown = (filterLabel) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [filterLabel]: !prev[filterLabel], 
    }));
  };

  // FUNCTION OT RESET RADIO BUTTONS
  const resetRadio = ()=>{
    if(filtersCleared){
      const radios = document.querySelectorAll('.radio-style');
      radios.forEach((radio) => {
        radio.checked = false;
      });
    }
  }

  useEffect(()=>{
    resetRadio();
  },[filtersCleared])

  return (
    <div className="row px-3 z-3">
      {filters.map((filter, i) => (
        <div key={i}>
        <div className="col-12 px-0 py-4">
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
                      type='radio'
                      name="flexRadioDefault"
                      id={`flexRadioDefault${j+1}`}
                      onChange={()=>handleUserFilterInput(option, filter.label, i)}
                    />
                    <i className="text-warning ms-2 fa-solid fa-star"></i>
                    <i className="text-warning ms-2 fa-solid fa-star"></i>
                    <i className="text-warning ms-2 fa-solid fa-star"></i>
                    <i className="text-warning ms-2 fa-solid fa-star-half-stroke"></i>
                    <label className="form-check-label ms-2" htmlFor={`flexRadioDefault${j+1}`}>
                      {option}
                    </label>
                  </div>
                ))
              ) : (
                filter.options.map((option, j) => (
                  <div className="py-2 form-check" key={j}>
                    <input
                      className="form-check-input radio-style"
                      type='radio'
                      name='flexRadioDefault'
                      id={`flexRadioDefault${j+1}`}
                      onChange={()=>handleUserFilterInput(option, filter.label, i)}
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor={`flexRadioDefault${j+1}`}
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
        </div>
        
      ))}
    </div>
  );

}
