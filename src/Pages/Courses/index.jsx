import React from 'react'
import './index.css';
import { useState, useEffect } from 'react';
import CourseCards from '../../components/CourseCards';
import FilterCourseSection from '../../components/FilterCourseSection';
import {useDispatch, useSelector} from "react-redux";
import { getCourseDetails } from '../../store/actions/coursesAction';

export default function Courses() {

    // FADEL:
    // 1- displaying courses according to filters

  const {searchTerm} = useSelector(state => state.searchTerm);
  const {courses, course, loading} = useSelector(state => state.allCourses);

  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [sortType, setSortType] = useState('Most Relevant');
  const [displayFilterMenu, setDisplayFilterMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filtersCleared, setFiltersCleared] = useState(false);
  const [filters, setFilters] = useState([
    {type:'radio',label:'Ratings',options:['4.5','4.0 & Up','3.5 & Up','3.0 & Up'], selectedFilter:''},
    {type:'radio',label:'Price',options:['400 & Up','300 & Up'], selectedFilter:''},
    {type:'checkbox',label:'Categories',options:['Java','Python','JavaScript'], selectedFilter:[]},
    {type:'radio',label:'Video Duration',options:['0-1 Hour','1-3 Hours','3-6 Hours','6+ Hours'], selectedFilter:''}
  ]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  // FUNCTION TO UPDATE FILTEREDCOURSES ARRAY
  const updateFilteredArray = ()=>{
    setFilteredCourses((prev)=>{
        return courses.filter((course)=>
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })
  }

  useEffect(()=>{
    updateFilteredArray()
  },[searchTerm])

//   const updateFilteredArray = ()=>{
//     setFilteredCourses((prev)=>{
//         courses.map((course)=>{
//             if((filters[0].selectedFilter && course.price === filters[0].selectedFilter) &
//                (filters[2].selectedFilter && course. === filters[2].selectedFilter) ){
//                 console.log('yes')
//             }
//         })
//         courses.filter((course)=>{

//         })
//     })
//   }

  // FUNCTION THAT ADDS FILTERS CHOSEN BY USER TO ARRAY OF FILTERS
  const handleUserFilterInput = (option, label, index)=>{
    setFilters((prev)=>{
        const updatedFilters = [...prev];
        const typeOfFilter = {...updatedFilters[index]};
        if(label!='Categories'){
            typeOfFilter.selectedFilter = option;
        }else{
            if(typeOfFilter.selectedFilter.includes(option)){
                console.log(label,index,option)
                typeOfFilter.selectedFilter = typeOfFilter.selectedFilter.filter((filter)=>filter!==option);
            }
            else{
                typeOfFilter.selectedFilter = [...typeOfFilter.selectedFilter,option];
            }
        }

        updatedFilters[index] = typeOfFilter;
        return updatedFilters
    })
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

  // FUNCTION THAT CLEARS FILTERS
  function handleClearFilters(){
    setFilters((prev)=>{
        return prev.map((filter)=>{
            if(filter.label == 'Categories'){
                return {...filter,selectedFilter:[]};
            }else{
                return {...filter,selectedFilter:''};
            }
        })
    })
    setFiltersCleared(!filtersCleared);
  }

  return (
    <div className='mt-5 mb-5'>
      <div className="container">
        <h1 className='py-4 text-center'>1,000 Results for 'search term'</h1>
        <div className='position-relative'>
            <div className='d-flex flex-wrap align-items-center'>
                <button className={`sort-button-style mb-2 ${displayDropdown && 'change-btn-style'}`} onClick={()=>{
                    setDisplayDropdown(!displayDropdown)}}>
                        Sort by {sortType}
                        <i class="fa-solid fa-chevron-down ms-2"></i></button>
                <button className={`filter-button-style mb-2 d-lg-none ${displayFilterMenu && 'change-btn-style'}`} onClick={()=>{
                    setDisplayFilterMenu(!displayFilterMenu)}}>
                        Filters</button>
                <button className='clear-filter-btn' onClick={()=>{handleClearFilters()}}>
                        Clear filters</button>
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
                        <FilterCourseSection filters={filters} handleUserFilterInput={handleUserFilterInput} filtersCleared={filtersCleared}/>
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
                                filteredCourses.length === 0 ? (
                                    searchTerm !== '' ? (
                                      <div>Course not found</div>
                                    ) : (
                                      courses.map((course, index) => {
                                        return <CourseCards key={index} course={course} />;
                                      })
                                    )
                                  ) : (
                                    filteredCourses.map((course, index) => {
                                      return <CourseCards key={index} course={course} />;
                                    })
                                  )
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
                       <FilterCourseSection filters={filters} handleUserFilterInput={handleUserFilterInput} filtersCleared={filtersCleared}/>
                    </div>
                   </div>
               )}

              <div className="col-lg-9 py-4">
                    <div className="container-fluid">
                        <div className="row">
                        {
                            filteredCourses.length === 0 ? (
                                searchTerm !== '' ? (
                                    <div>Course not found</div>
                                ) : (
                                    courses.map((course, index) => {
                                        return <CourseCards key={index} course={course} />;
                                    })
                                )
                                ) : (
                                    filteredCourses.map((course, index) => {
                                      return <CourseCards key={index} course={course} />;
                                })
                            )
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
