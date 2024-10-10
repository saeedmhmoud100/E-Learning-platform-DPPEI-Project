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

    // 1- add a json filters to filter course section where it creates each section from that json object
    // 2- create states for each category
    // 3- callback function that updates input of each category from filtercoursesection to courses, this callback function takes two params
    //    the input and a callback function to its respective set state
    // 4- an array of courses that satisfy search term and filters
    // 5- this array is updated everytime a category state changes or search term is updated (useEffect)
    // 6- every time this array of
    // 7- updatedarray = courses.map().filter

  const dispatch = useDispatch();
  const {searchTerm} = useSelector(state => state.searchTerm);
  const {courses, loading} = useSelector(state => state.allCourses);

  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [sortType, setSortType] = useState('Most Relevant');
  const [displayFilterMenu, setDisplayFilterMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filtersCleared, setFiltersCleared] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [ratings, setRatings] = useState('');
  const [price, setPrice] = useState('');
  const [categories, setCategories] = useState('');
  const [video_Duration, setVideo_Duration] = useState('');


  const handleUserFilterInput = (option, callback, index)=>{
    console.log(callback);
  }

  const handleClearFilters = ()=>{
    setFiltersCleared(!filtersCleared);
    if(searchTerm){
      let updatedArray = [...filteredCourses];
      updatedArray = updatedArray.filter((course)=>{return course.title == searchTerm});
      setFilteredCourses(updatedArray);
    }else{
      setFilteredCourses([]);
    }
    
  }

  const updateFilteredCourses = ()=>{
    let updatedArray = [...filteredCourses];
    const Rating = Number(ratings.substring(0,2));
    const Price = Number(price);
    const videoDurationInterval1 = Number(video_Duration.substring(0,1));
    const videoDurationInterval2 = Number(video_Duration.substring(2,3));
    const coursesWithDetails = courses.map((course)=>{
      dispatch(getCourseDetails(course.id));
      return course;
    })
    updatedArray = coursesWithDetails.filter((item)=>{
       return item.title.includes(searchTerm) &&
      (Rating && item.rating>=Rating) && 
      (Price && item.price == Number(Price)) && 
      (categories && item.categories.includes(categories)) && 
      (video_Duration && (item.total_duration>=videoDurationInterval1 || item.total_duration<=videoDurationInterval2))
    });
    setFilteredCourses(updatedArray);
    }

  useEffect(()=>{
    updateFilteredCourses();
  },[ratings,price,categories,video_Duration,searchTerm])

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
                        <FilterCourseSection handleUserFilterInput={handleUserFilterInput} filtersCleared={filtersCleared}/>
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
                       <FilterCourseSection handleUserFilterInput={handleUserFilterInput} filtersCleared={filtersCleared}/>
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
