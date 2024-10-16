
import React, { useState ,useEffect} from 'react';
import { Link , useParams} from 'react-router-dom';
import "./style.css"
import {useNavigate} from "react-router-dom";
import GeneralLoading from "../../components/Loading/GeneralLoading/GeneralLoading.jsx"
import InstructorSection from './components/InstructorSection';
import  CourseCards from '../../components/CourseCards/index.jsx'
import CourseReviewCard from './components/CourseReviewCard';
import   StudentAlsoBoughtCard from "./components/StudentsAlsoBoughtCard/index.jsx"
import {useDispatch, useSelector} from "react-redux";
import { getCourseWhatYouWillLearn,getCourseIncludes,getCourseDetails,getCourseRequirments,getAllCourses,getCourseReviews} from '../../store/actions/coursesAction.js';
import { getInstructorProfile } from '../../store/actions/instructorAction.js';
import {addtoCart}  from '../../store/actions/cartAction.js';
export default function CourseDetails({coursesWithDetails}) {

  let {id}=useParams();
  const dispatch=useDispatch();
  const navigate = useNavigate()
  const [showFullDescription, setShowFullDescription] = useState(false);
 
  
  // Function to handle "Show More" and "Show Less" button clicks
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);

  };
  
    
  const {
    loading
    
  } = useSelector(state => state.allCourses);

  
 
//state to handle reviews button
const [showAllReviews, setShowAllReviews] = useState(false)
  const handleReviewsButton=()=>{
    setShowAllReviews(!showAllReviews)
 
  }


const [loadingPage, setloadingPage] = useState(true)

 //to use in this-course-includes-section

  const iconArray = [
    "fa-solid fa-file",
    "fa-solid fa-mobile-screen",
 
    "fa-solid fa-video",
    "fa-solid fa-file-arrow-down",
    "fa-solid fa-code",
    "fa-solid fa-trophy"
  ];
 
 
 const [CurrentCourse, setCurrentCourse] = useState({})
  useEffect(() => {
    
    if(coursesWithDetails.length!=0){
      setloadingPage(false)
      console.log(coursesWithDetails)
      coursesWithDetails.map((course,i)=>{
        if(course?.id==id){
          setCurrentCourse(course);
        }
      })

    }
    else{
     setloadingPage(true)

    }
          
    
  }, [coursesWithDetails]);
  let courseIncludesData=CurrentCourse?.this_course_includes;
  let firstResources = courseIncludesData?.slice(0, 3); // First 3 items
  let secondResources = courseIncludesData?.slice(3,6);   // Remaining items
  const visibleReviews = showAllReviews ? CurrentCourse?.reviews :  CurrentCourse?.reviews?.slice(0, 4);
  let instructor=CurrentCourse?.instructor_data;
  let courseRating = CurrentCourse?.rating_count || 0;
  let starsCount = new Array(courseRating).fill(0);
  let review=CurrentCourse?.review
  const handleCart = async () => {
    await dispatch(addtoCart({ course_id: id }));
    navigate('/cart')
  };
  return (
    (loading || loadingPage) ? (
      <GeneralLoading />
    ) :
    <>
  
      <div className="container-fluid bg-dark py-5">
        <header className="row">
          <div className="col-lg-8 col-md-10 col-sm-12 text-white p-4">
            <h1 className="mb-3">{CurrentCourse?.title}</h1>
            <h2 className="h5">
             {CurrentCourse?.brief_description}
            </h2>

            <div className="selling mt-4">
              <div className="ratings d-flex align-items-center">
                <i className="me-1">{CurrentCourse?.rating_count}</i>
                <div className="stars me-2 mb-1">
                  { starsCount.map((star,i)=>( <i  className="fa-solid fa-star text-warning" key={i}></i>))}
                </div>
                <Link className="text-secondary me-2" to="#">
                  ({CurrentCourse?.rating_count} ratings)
                </Link>
                <span className="me-2">{CurrentCourse?.students_count} student</span>
              </div>
            </div>
            <p>
              Created By: <Link to={"/inst-profile/" + instructor.id} className='text-decoration-none text-primary'>{CurrentCourse?.instructor_data?.title}</Link>
            </p>
            <div className='d-flex gap-3'>
              <div className="last-update">
                <i className="fa-solid fa-gear me-1"></i>
                <span>Last Updated</span>
              </div>
              <div className="first-lang">
                <i className="fa-solid fa-globe me-1"></i>
                <span>{CurrentCourse?.main_language?.name}</span>
              </div>
              <div className="subtitles">
         <i className="fa-regular fa-closed-captioning me-1"></i>

          {CurrentCourse?.languages?.map((language, i) => (
            <span key={language.id}>{language.name} [auto],</span>
          ))}
        </div>

            </div>
          </div>
        </header>
      </div>

      <div className="container my-5  position-relative">
        <div className="row">
          <div className="col-md-8 col-sm-12 ">
          {/* what you will learn */}
          
            <div className="learn  my-5 p-2">
  <h2 className="mb-4">What you'll learn</h2>

  <div className="row ">
    <div className="col-md-8 ">
      <ul className="list-unstyled">
        {
            CurrentCourse?.what_you_will_learn?.map((item,index)=>(
              <li className="mb-2" key={index}>
                <i className="fa-solid fa-check"></i> {item.description}
              </li>
            ))
        }


      </ul>
    </div>
  
  </div>
</div>


            {/* Course resources */}
            <div className="resources  my-5 p-2">
              <h2 className="me-5">This course includes:</h2>
              <div className="d-flex align-items-start">
                {/* Resource lists */}
                <div className="first-resources me-4 ms-0">
                  <ul className=" list-unstyled">
                 { firstResources ?.map((item,i)=>(
                  <li className="my-2" key={i}>
                  <i className={`${iconArray[i]} me-2 fs-5`}></i>
                 {item.description}
                </li>
                 ))} 
                  </ul>
                </div>
               

                <div className="second-resources">
                  <ul className=" list-unstyled">
                   {secondResources?.map((item,i)=>(
                  <li className="my-2" key={i + firstResources.length}>
                  <i className={`${iconArray[i + firstResources.length]} me-2 fs-5`}></i>
                 {item.description}
                </li>
                 ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Requirements Section */}
            <div className="requirements  my-5 p-2">
              <h3 className="mb-4">Requirements</h3>
              <ul>
                {CurrentCourse?.requirements?.map((requirment,i)=>(<li className="mb-2"key={i}>{requirment.description} </li>))}
              
              </ul>
            </div>

            {/* Description Section */}
            <div className="description  my-5 p-2">
              <h3 className="mb-4">Description</h3>
              {showFullDescription ? (
                <>
                <div>
                  {CurrentCourse?.description}
                </div>
                </>
              ) : (
                <>
                  {/* Truncated version of the description */}
                 <div>
                  {CurrentCourse?.brief_description}
                 </div>
                </>
              )}

              {/* Show More / Show Less Button */}
              <button className="btn btn-link p-0" onClick={toggleDescription}>
                {showFullDescription ? 'Show Less' : 'Show More'}
              </button>
            </div>

          
            {/* students also bought section */}
            <h4 className="mb-4 fw-bold">Students also bought</h4>
            {coursesWithDetails?.slice(0,3)?.map((course) => (
            <div  key={course.id}>
              <StudentAlsoBoughtCard
                title={course?.title}
                price={course?.price}
                thumbnail={course?.thumbnail_link}
                // instructor={course?.instructor}
                rating={course?.rating_count}
                priceBeforeDiscount={course?.price_before_discount}
                hours={course?.total_duration}
              />
            </div>
          ))}
              
            
            {/* instructor section */}
 
            <InstructorSection instructor={instructor}/>
           {/* course Review */}
         
            <div className="row g-3">
<div className=' fw-bolder d-flex '>
  <div className="course-ratings">
  <i className="fa-solid fa-star text-warning me-2" ></i>
  <span className='fs-4 me-3'>{CurrentCourse?.rating_avg} course rating
  </span>
  </div>
  <div className="overall-ratings">
  <i className="fa-solid fa-circle fa-xs text-secondary"></i> 
  <span className='fs-4'> {CurrentCourse?.rating_count} ratings

  </span>
  </div>
  </div>   
  <div className="conatiner">
  <div className="row">
  {visibleReviews?.map((review,i)=>(
    <div className="col-md-6">
    <CourseReviewCard review={review} key={i} className/>
    </div>
   ))}
   </div>  
   </div>
             </div>
   {CurrentCourse?.reviews?.length > 4 && (
      <button className="btn btn-info my-2" onClick={handleReviewsButton}>
        {showAllReviews ? "Show Less" : "Show All Reviews"}
      </button>
    )}

     
             {/* moreCourses by instructor */}

             <h6 className='fs-4 fw-bolder my-3'> More Courses by <Link to={"/inst-profile/" + instructor.id} className='text-decoration-none'> {instructor.title}</Link></h6>
             
             <div className="container">
               <div className="row">
               {instructor?.courses?.slice(0,3).map((course, index) => {
                 return <CourseCards key={index} course={course} />;//we should display courses to that specific instructor (ageb el coursses array beta3 el constructor we howa da ely a3mel map 3aleh)
            })}
                  
               </div>  
             </div>      
           

            <div className='end-of-sidebar'></div>
          </div>
 
          <div className="col-lg-4 col-md-12   ">
<div className="p-3 border rounded bg-light sidebar" 
   >
  <img
  src={CurrentCourse?.thumbnail_link}
  alt="Course Preview"
  className="w-100 mb-3"
/>
<hr />

  
  <div className="mt-3">
    <h4>Subscribe to Eduverse's top courses</h4>
    <p>
      Get this course, plus 12,000+ of our top-rated courses. 
      <Link to="">Learn more</Link>
    </p>
   
    <p className="text-muted">Starting at 200.00 EGP per month after trial</p>
    <hr />
    <p className="text-center">or</p>
    <h3 className="text-center">{CurrentCourse?.price} EGP</h3>
    <button type="submit" className="btn btn-outline-dark w-100 mb-3 btn-info"onClick={handleCart}>Add to cart</button>
   
  </div>
</div>
           </div>
        </div>
      </div>
    </>
  );


}