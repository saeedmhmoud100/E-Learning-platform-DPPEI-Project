
import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import InstructorSection from './components/InstructorSection';
import  CourseCards from '../../components/CourseCards/index.jsx'
import CourseReviewCard from './components/CourseReviewCard';
import   StudentAlsoBoughtCard from "./components/StudentsAlsoBoughtCard/index.jsx"
import {useDispatch, useSelector} from "react-redux";
import { getCourseWhatYouWillLearn,getCourseIncludes,getCourseDetails,getCourseRequirments,getAllCourses,getCourseReviews} from '../../store/actions/coursesAction.js';
import { getInstructorProfile } from '../../store/actions/instructorAction.js';

export default function CourseDetails() {
  const [showFullDescription, setShowFullDescription] = useState(false);
 
  
  // Function to handle "Show More" and "Show Less" button clicks
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);

  };

    const dispatch = useDispatch()
  
  const {
    course,
    courses,
    whatYouWillLearnData,
    courseIncludesData,
    requirments,reviews
  } = useSelector(state => state.allCourses);
  const{instructor}=useSelector(state => state.instructor)
  let courseRating = course?.rating_count || 0;
  let starsCount = new Array(courseRating).fill(0);
 //to use in this-course-includes-section
  const iconArray = [
    "fa-solid fa-file",
    "fa-solid fa-mobile-screen",
 
    "fa-solid fa-video",
    "fa-solid fa-file-arrow-down",
    "fa-solid fa-code",
    "fa-solid fa-trophy"
  ];
  const firstResources = courseIncludesData?.slice(0, 3); // First 3 items
  const secondResources = courseIncludesData?.slice(3,6);   // Remaining items
    useEffect(() => {
      dispatch (getAllCourses(1))
      dispatch(getCourseWhatYouWillLearn(6));
      dispatch(getCourseIncludes(6));
      dispatch(getCourseDetails(6));
      dispatch(getCourseRequirments(6));
      dispatch(getCourseReviews(6));
      dispatch(getInstructorProfile(1));
      
        
  },[])
  return (
    <>
      <div className="container-fluid bg-dark py-5">
        <header className="row">
          <div className="col-lg-8 col-md-10 col-sm-12 text-white p-4">
            <h1 className="mb-3">{course?.title}</h1>
            <h2 className="h5">
             {course?.brief_description}
            </h2>

            <div className="selling mt-4">
              <div className="ratings d-flex align-items-center">
                <i className="me-1">{course?.rating_count}</i>
                <div className="stars me-2 mb-1">
                  { starsCount.map((star,i)=>( <i  className="fa-solid fa-star text-warning" key={i}></i>))}
                </div>
                <Link className="text-secondary me-2" to="#">
                  ({course?.rating_count} ratings)
                </Link>
                <span className="me-2">{course?.students_count} student</span>
              </div>
            </div>
            <p>
              Created By: <Link className='me-1 text-info' to="admin-profile">{}</Link>
            </p>
            <div className='d-flex gap-3'>
              <div className="last-update">
                <i className="fa-solid fa-gear me-1"></i>
                <span>Last Updated</span>
              </div>
              <div className="first-lang">
                <i className="fa-solid fa-globe me-1"></i>
                <span>{course?.main_language?.name}</span>
              </div>
              <div className="subtitles">
         <i className="fa-regular fa-closed-captioning me-1"></i>

          {course?.languages?.map((language, i) => (
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
            whatYouWillLearnData?.map((item,index)=>(
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
                {requirments?.map((requirment,i)=>(<li className="mb-2"key={i}>{requirment.description} </li>))}
              
              </ul>
            </div>

            {/* Description Section */}
            <div className="description  my-5 p-2">
              <h3 className="mb-4">Description</h3>
              {showFullDescription ? (
                <>
                <div>
                  {course?.description}
                </div>
                </>
              ) : (
                <>
                  {/* Truncated version of the description */}
                 <div>
                  {course?.brief_description}
                 </div>
                </>
              )}

              {/* Show More / Show Less Button */}
              <button className="btn btn-link p-0" onClick={toggleDescription}>
                {showFullDescription ? 'Show Less' : 'Show More'}
              </button>
            </div>

            {/* Who This Course is For Section */}
            {showFullDescription && (
              <div className="who-this-course-is-for  my-5 p-2">
                <h3 className="mb-4">Who this course is for</h3>
                <ul className="ps-4">
                  <li className="mb-2">Web Designers looking to improve their skill set</li>
                  <li className="mb-2">Programmers who need to learn Javascript for their web applications</li>
                  <li className="mb-2">People looking to start programming and need a first programming language to learn</li>
                  <li className="mb-2">Students who want to learn Javascript</li>
                  <li className="mb-2">People who manage a website as a volunteer or as a hobby</li>
                  <li className="mb-2">Bloggers—even if you use Wordpress or another CMS!</li>
                  <li className="mb-2">Anyone else who wants to learn Javascript</li>
                </ul>
              </div>
            )}
            {/* students also bought section */}
            <h4 className="mb-4 fw-bold">Students also bought</h4>
            {courses.slice(0,3)?.map((course) => (
            <div  key={course.id}>
              <StudentAlsoBoughtCard
                title={course?.title}
                price={course?.price}
                thumbnail={course?.thumbnail_link}
                instructor={course?.instructor}
                rating={course?.rating_count}
                priceBeforeDiscount={course?.price_before_discount}
                hours={course?.total_duration}
              />
            </div>
          ))}
              
            
            {/* instructor section */}

            <InstructorSection/>
            {/* course Review */}
         
            <div className="row g-3">
<div className=' fw-bolder d-flex '>
  <div className="course-ratings">
  <i className="fa-solid fa-star text-warning me-2" ></i>
  <span className='fs-4 me-3'>{course?.rating_avg}course rating
  </span>
  </div>
  <div className="overall-ratings">
  <i className="fa-solid fa-circle fa-xs text-secondary"></i> 
  <span className='fs-4'> {course?.rating} ratings

  </span>
  </div>
  </div>   
  <div className="conatiner">
  <div className="row">
  {reviews.map((review,i)=>(
    <div className="col-md-6">
    <CourseReviewCard review={review} key={i} className/>
    </div>
   ))}
   </div>  
   </div>
             </div>
              <button className="btn btn-info my-2 ">Show All Reviews</button>

     
             {/* moreCourses by instructor */}

             <h6 className='fs-4 fw-bolder my-3'> More Courses by <Link to="/inst-profile" className='text-decoration-none'> SkillSprints Inc.</Link></h6> 
             
             <div className="container">
               <div className="row">
               {courses?.slice(0,3).map((course, index) => {
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
  src={course?.thumbnail_link}
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
    <h3 className="text-center">{course?.price} EGP</h3>
    <button className="btn btn-outline-dark w-100 mb-3 btn-info">Add to cart</button>
   
  </div>
</div>
           </div>
        </div>
      </div>
    </>
  );


}