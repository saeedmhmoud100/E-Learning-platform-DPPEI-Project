import React from 'react'
import './index.css';
import { useState, useEffect } from 'react';
import CourseCards from '../../components/CourseCards';
import FilterCourseSection from '../../components/FilterCourseSection';
import {useSelector} from "react-redux";

export default function Courses() {

    // FADEL:
    // 1- displaying courses according to filters
    // 2- fixing radio in FilterCourseSection
    // 3- implementing search

  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [sortType, setSortType] = useState('Most Relevant');
  const [displayFilterMenu, setDisplayFilterMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filterTypes, setFilterTypes] = useState([])
  const {courses, course, loading} = useSelector(state => state.allCourses);

  const filters = [
    {type:'radio',label:'Ratings',options:['4.5','4.0 & Up','3.5 & Up','3.0 & Up']},
    {type:'radio',label:'Price',options:['400 & Up','300 & Up']},
    {type:'checkbox',label:'Categories',options:['Java','Python','JavaScript']},
    {type:'radio',label:'Video Duration',options:['0-1 Hour','1-3 Hours','3-6 Hours','6+ Hours']}
  ]

  // FUNCTION THAT ADDS FILTERS CHOSEN BY USER TO ARRAY OF FILTERS
  const handleUserFilterInput = (option)=>{
    setFilterTypes(prev => {
        if (prev.includes(option)) {
            return prev.filter(filter => filter !== option);
        } else {
            return [...prev, option];
        }
    });
  }

  // FUNCTION HANDLES WINDOW RESIZE FOR RESPONSIVE FILTER MENU
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // EVENT LISTENER THAT DYNAMICALLY LISTENS TO WINDOW WIDTH AND ADJUSTS windowWidth
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // FUNCTION HANDLES CLOSING OF FILTER MENU
  function handleFilterMenuClose(){
      setDisplayFilterMenu(false);
  }

  return (
    <div className='mt-5 mb-5'>
      <div className="container">
        <h1 className='py-4 text-center'>1,000 Results for 'search term'</h1>
        <div className='position-relative'>
            <div className='d-flex align-items-center'>
                <button className={`sort-button-style ${displayDropdown && 'change-btn-style'}`} onClick={()=>{
                    setDisplayDropdown(!displayDropdown)}}>
                        Sort by {sortType}
                        <i class="fa-solid fa-chevron-down ms-2"></i></button>
                <button className={`filter-button-style d-lg-none ${displayFilterMenu && 'change-btn-style'}`} onClick={()=>{
                    setDisplayFilterMenu(!displayFilterMenu)}}>
                        Filter</button>
            </div>
            
            
            {/* DISPLAY DROPDOWN CONDITION */}
            {displayDropdown && (<ul className='dropdown-style'>
                <li className='list-style-none p-2 text-center w-100' role='button' onClick={()=>{
                    setSortType('Most relevant');
                    setDisplayDropdown(!displayDropdown);
                    }}>Most relevant</li>                                                                                                                                                                                                                                      
                <li className='list-style-none p-2 text-center w-100' role='button' onClick={()=>{
                    setSortType('Most viewed');
                    setDisplayDropdown(!displayDropdown);
                    }}>Most viewed</li>
                <li className='list-style-none p-2 text-center w-100' role='button' onClick={()=>{
                    setSortType('Highest rated');
                    setDisplayDropdown(!displayDropdown);
                    }}>Highest rated</li>
                <li className='list-style-none p-2 text-center w-100' role='button' onClick={()=>
                    {setSortType('Newest');
                    setDisplayDropdown(!displayDropdown);
                    }}>Newest</li>
            </ul>)}
        </div>
        <hr />

        {windowWidth <= 992 ? (
            <>
            <div className={`overlay-for-courses ${displayFilterMenu ? 'd-block' : 'd-none'}`} onClick={()=>{
            handleFilterMenuClose()
            }}></div>
            <div className={` ${displayFilterMenu ? 'show-filter-menu-to-side' : 'd-none'}`}>
                <div className="container-fluid">
                        <FilterCourseSection filterType={'Ratings'} filters={filters} handleUserFilterInput={handleUserFilterInput}/>
                        <button className='btn btn-dark p-3 w-100 mb-3 align-self-center' onClick={()=>{
                            handleFilterMenuClose()
                            }}>Done</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 py-4">
                    <div className="container-fluid">
                        <div className="row">
                        {
                            courses.map((course, index) => {
                                return <CourseCards key={index} course={course} />
                            })
                        }
                        </div>  
                    </div>
                </div>
            </div>
            </>
        ):
        (
            <div className="row">
               {windowWidth > 992 && (
                   <div className='col-lg-3 p-0'>
                    <div className="container-fluid">
                       <FilterCourseSection filterType={'Ratings'} filters={filters} handleUserFilterInput={handleUserFilterInput}/>
                    </div>
                   </div>
               )}

              <div className="col-lg-9 py-4">
                    <div className="container-fluid">
                        <div className="row">
                            {
                                courses.map((course, index) => {
                                    return <CourseCards key={index} course={course} />
                                })
                            }
                        </div>
                    </div>
              </div>
          </div>
        )}
        
      </div>
    </div>
  )
}
