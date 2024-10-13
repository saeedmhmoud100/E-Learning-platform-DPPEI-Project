import React from 'react'
import './index.css';
import { useState, useEffect } from 'react';
import CourseCards from '../../components/CourseCards';
import FilterCourseSection from '../../components/FilterCourseSection';
import {useDispatch, useSelector} from "react-redux";
import { getCourseDetails } from '../../store/actions/coursesAction';
import CourseCardsLoading from '../../components/Loading/CourseCardsLoading/CourseCardsLoading.jsx';

export default function Courses({coursesWithDetails, categoryInput, updateCategory}) {

<<<<<<< HEAD
  const {searchTerm} = useSelector(state => state.searchTerm);
  const {userData} = useSelector(state=>state.user);
  const {courses, loading} = useSelector(state => state.allCourses);
=======
  const dispatch = useDispatch();
  const {searchTerm} = useSelector(state => state.searchTerm);
  const {courses, loading} = useSelector(state => state.allCourses);
  const [coursesWithDetails,setCoursesWithDetails] = useState([])
>>>>>>> origin/instructor-information
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [sortType, setSortType] = useState('Most Relevant');
  const [displayFilterMenu, setDisplayFilterMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filtersCleared, setFiltersCleared] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [ratings, setRatings] = useState(0);
  const [price, setPrice] = useState([]);
  const [categories, setCategories] = useState('');
  const [video_Duration, setVideo_Duration] = useState([]);

<<<<<<< HEAD
  // HANDLING WHEN USER CHOOSES FILTER
=======

>>>>>>> origin/instructor-information
  const handleUserFilterInput = (option, filterName, index)=>{
    switch(filterName){
      case 'Ratings':
        setRatings(Number(option.substring(0,2)));
        break;
      case 'Price':
        let newPrice = [...price];
        newPrice = option.match(/\d+/g);
        setPrice(newPrice);
        break;
      case 'Categories':
        setCategories(option);
        break;
      case 'Video Duration':
        const updatedVideoDuration = [...video_Duration];
        updatedVideoDuration[0] = option.substring(0,1);
        updatedVideoDuration[1] = option.substring(2,3);
        setVideo_Duration(updatedVideoDuration);
        break;
      default:
        return
    }
  }

<<<<<<< HEAD
=======
  // WHEN COMPONENT FIRST MOUNTS, FOR EACH COURSE IT GETS ITS DETAILS AND STORES IT IN ARRAY
  useEffect(() => {
    const fetchCourseDetails = async () => {
      if (courses?.length > 0) {
        const promises = courses.map(async (item) => {
          const courseDetails = await dispatch(getCourseDetails(item.id));
          return courseDetails;
        });
        const updatedCourses = await Promise.all(promises);
        setCoursesWithDetails(updatedCourses);
      }
    };
    fetchCourseDetails();
  }, [courses, dispatch]);

>>>>>>> origin/instructor-information
  // FUNCTION THAT FILTERS COURSES WHEN DATA IS LOADED
  const updateFilteredCourses = () => {
    if (loading || coursesWithDetails.length === 0) {
      return;
    }
    let updatedArray = [...coursesWithDetails];
    if (searchTerm) {
      updatedArray = updatedArray.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (ratings || price.length > 0 || categories || video_Duration.length > 0) {
<<<<<<< HEAD
      updatedArray = updatedArray.filter(course => {
        let matchesFilters = true;
        if(ratings && matchesFilters){
          matchesFilters = course.rating_avg >= ratings;
        }
        if(price.length>0 && matchesFilters){
          matchesFilters = course.price >= price[0] && course.price <= price[1];
        }
        if(categories && matchesFilters){
          const courseCategory = course.categories.map((cat)=>{return cat.name.toLowerCase()});
=======
      console.log(categories)
      updatedArray = updatedArray.filter(course => {
        let matchesFilters = true;
        if(ratings && matchesFilters){
          console.log(":)")
          matchesFilters = course.rating >= ratings;
        }
        if(price.length>0 && matchesFilters){
          console.log(":)")
          console.log(price)
          matchesFilters = course.price >= price[0] && course.price <= price[1];
        }
        if(categories && matchesFilters){
          console.log(":)")
          const courseCategory = course.categories.map((cat)=>{return cat.name.toLowerCase()});
          console.log(courseCategory);
>>>>>>> origin/instructor-information
          matchesFilters = courseCategory.includes(categories.toLowerCase());
        }
        if (video_Duration.length && matchesFilters){
          matchesFilters = course.total_duration >= video_Duration[0] && course.total_duration <= video_Duration[1]
        }
        return matchesFilters;
      });
    }
    setFilteredCourses(updatedArray);
  };

  // FILTERED COURSES ARRAY ALWAYS UPDATES WHENEVER FILTERS ARE TRIGGERED OR LOADING STATE CHANGES
  useEffect(() => {
<<<<<<< HEAD
    if (!loading && coursesWithDetails?.length == courses?.length) {
      if(categoryInput){
        setCategories(categoryInput.toLowerCase());
        updateFilteredCourses();
      }else{
        updateFilteredCourses();
      }
    }
  }, [searchTerm, ratings, price, categories, video_Duration, loading, coursesWithDetails,categoryInput]);
=======
    if (!loading && coursesWithDetails.length > 0) {
      updateFilteredCourses();
    }
  }, [searchTerm, ratings, price, categories, video_Duration, loading, coursesWithDetails]);
>>>>>>> origin/instructor-information
  
  // FUNCTION THAT CLEARS FILTERS
  const handleClearFilters = ()=>{
    setFiltersCleared(!filtersCleared);
    setRatings(0);
    setPrice([]);
    setCategories('');
    setVideo_Duration([]);
    updateFilteredCourses();
<<<<<<< HEAD
    updateCategory('');
=======
>>>>>>> origin/instructor-information
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
        {
          searchTerm && (<h1 className='py-4'>{filteredCourses.length} results for {searchTerm}</h1> )
        }
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
                        <div className="row row gy-2">
                        {
<<<<<<< HEAD
                          loading || coursesWithDetails.length == 0 ? (
=======
                          loading  ? (
>>>>>>> origin/instructor-information
                            <CourseCardsLoading />
                          ) : (
                            filteredCourses.length > 0 ? (
                              filteredCourses.map((course, index) => {
                                return <CourseCards key={index} course={course} />;
                              })
                            ) : (
                              <div>Course not Found</div>
                            )
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
                        <div className="row gy-2">
                        {
<<<<<<< HEAD
                          loading || coursesWithDetails.length == 0 ? (
=======
                          loading ? (
>>>>>>> origin/instructor-information
                            <CourseCardsLoading />
                          ) : (
                            filteredCourses.length > 0 ? (
                              filteredCourses.map((course, index) => {
                                return <CourseCards key={index} course={course} />;
                              })
                            ) : (
                              <div>Course not Found</div>
                            )
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
