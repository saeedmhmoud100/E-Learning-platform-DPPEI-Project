import React from 'react'
import './index.css';
import { useState, useEffect } from 'react';
import CourseCards from '../../components/CourseCards';
import FilterCourseSection from '../../components/FilterCourseSection';
import {useDispatch, useSelector} from "react-redux";
import { getCourseDetails } from '../../store/actions/coursesAction';
import CourseCardsLoading from '../../components/Loading/CourseCardsLoading/CourseCardsLoading.jsx';
import { motion } from 'framer-motion';

export default function Courses({coursesWithDetails, categoryInput, updateCategory}) {

  const {searchTerm} = useSelector(state => state.searchTerm);
  const {courses, loading} = useSelector(state => state.allCourses);
  const [displayFilterMenu, setDisplayFilterMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filtersCleared, setFiltersCleared] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [ratings, setRatings] = useState(0);
  const [price, setPrice] = useState([]);
  const [categories, setCategories] = useState('');
  const [video_Duration, setVideo_Duration] = useState([]);
  let [numberOfPages,setNumberOfPages] = useState(0);
  let [currentPage, setCurrentPage] = useState(1);

  // HANDLING WHEN USER CHOOSES FILTER
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
    if (!loading && coursesWithDetails?.length == courses?.length) {
      if(categoryInput){
        setCategories(categoryInput.toLowerCase());
        updateFilteredCourses();
      }else{
        updateFilteredCourses();
      }
    }
  }, [searchTerm, ratings, price, categories, video_Duration, loading, coursesWithDetails,categoryInput]);
  
  // FUNCTION THAT CLEARS FILTERS
  const handleClearFilters = ()=>{
    setFiltersCleared(!filtersCleared);
    setRatings(0);
    setPrice([]);
    setCategories('');
    setVideo_Duration([]);
    updateFilteredCourses();
    updateCategory('');
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

  // FUNCTION HANDLES PAGINATION
  function handlePagination(btnRef){
    if (btnRef === 'Previous') {
        let newPage = currentPage;
        newPage -= 1;
        setCurrentPage(newPage)
    } else if (btnRef === 'Next'){
      let newPage = currentPage;
      newPage += 1;
      setCurrentPage(newPage)
    } else{
      let newPage = currentPage;
      newPage = btnRef;
      setCurrentPage(newPage);
    }
  }

  // UPDATING NUMBER OF PAGES WHEN FILTEREDCOURSES ARRAY IS UPDATED
  useEffect(()=>{
    if (filteredCourses.length === 0) {
      setNumberOfPages(0);
    } else {
      let newNumberOfPages = Math.ceil(filteredCourses?.length / 3);
      setNumberOfPages(newNumberOfPages);
      setCurrentPage(1)
    }
  },[filteredCourses])

  return (
    <motion.div
    initial={{ x: -100, opacity: 0 }}  
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className='mt-5 mb-5'>
      <motion.div
      initial={{ x: -100, opacity: 0 }}  
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container">
        {
          searchTerm && (<h1 className='py-4'>{filteredCourses.length} results for '{searchTerm}'</h1> )
        }
        <motion.div
         initial={{ x: -100, opacity: 0 }}  
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.5 }}
         className='position-relative'>
            <div className='d-flex flex-wrap align-items-center'>
                <button className={`filter-button-style me-2 d-lg-none ${displayFilterMenu && 'change-btn-style'}`} onClick={()=>{
                    setDisplayFilterMenu(!displayFilterMenu)}}>
                        Filters</button>
                {
                  ratings || price.length > 0 || categories || video_Duration.length > 0 ? (
                    <button className='clear-filter-btn-active me-2' onClick={()=>{handleClearFilters()}}>
                        Clear filters</button>
                  ):(
                    <button className='clear-filter-btn-non-active opacity-25 me-2'>
                        Clear filters</button>
                  )
                }
            </div>
            
        </motion.div>
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
                          loading || coursesWithDetails.length == 0 ? (
                            <CourseCardsLoading />
                          ) : (
                            filteredCourses.length > 0 ? (
                              filteredCourses.slice((currentPage-1)*3,(currentPage-1)*3+3).map((course, index) => {
                                return <CourseCards key={index} course={course} />;
                              })
                            ) : (
                              <div className='text-center fs-2'>Course not Found</div>
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
                          loading || coursesWithDetails.length == 0 ? (
                            <CourseCardsLoading />
                          ) : (
                            filteredCourses.length > 0 ? (
                              filteredCourses.slice((currentPage-1)*3,(currentPage-1)*3+3).map((course, index) => {
                                return <CourseCards key={index} course={course} />;
                              })
                            ) : (
                              <div className='text-center fs-2'>Course not Found</div>
                            )
                          )
                        }
                        </div>
                    </div>
              </div>
          </div>
        )}
        {
          filteredCourses.length!=0  && (
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  {
                    currentPage != 1 ? (
                      <a className="page-btn" aria-label="Previous" onClick={() => handlePagination('Previous')}>
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    ):(
                      <a className="page-btn opacity-25" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    )
                  }
                </li>
                {numberOfPages > 1 && (
                  Array(numberOfPages)
                    .fill().map((page, i) => (
                      <li key={i} className="page-item">
                        <a className={`page-btn ${i+1==currentPage && 'page-btn-active'}`} onClick={()=>{handlePagination(i+1)}}>{i + 1}</a>
                      </li>
                    ))
                )}
                <li class="page-item">
                {
                    currentPage != numberOfPages ? (
                      <a className="page-btn" aria-label="Next" onClick={()=>handlePagination('Next')}>
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    ):(
                      <a className="page-btn opacity-25" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    )
                }
                </li>
              </ul>
            </nav>
          )
        }
      </motion.div>
    </motion.div>
  )
}
