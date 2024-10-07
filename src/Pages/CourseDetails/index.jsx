
// import React, { useState ,useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import "./style.css"
// import InstructorSection from './components/InstructorSection';
// import  CourseCards from '../../components/CourseCards/index.jsx'
// import CourseReviewCard from './components/CourseReviewCard';
// import   StudentAlsoBoughtCard from "./components/StudentsAlsoBoughtCard/index.jsx"


// export default function CourseDetails() {
//   const [showFullDescription, setShowFullDescription] = useState(false);
 
  
//   // Function to handle "Show More" and "Show Less" button clicks
//   const toggleDescription = () => {
//     setShowFullDescription(!showFullDescription);
//   };

 


//   return (
//     <>
//       <div className="container-fluid bg-dark py-5">
//         <header className="row">
//           <div className="col-lg-8 col-md-10 col-sm-12 text-white p-4">
//             <h1 className="mb-3">Javascript for Beginners</h1>
//             <h2 className="h5">
//               Learn javascript online and supercharge your web design with this
//               Javascript for beginners training course.
//             </h2>

//             <div className="selling mt-4">
//               <div className="ratings d-flex align-items-center">
//                 <i className="me-1">4.7</i>
//                 <div className="stars me-2 mb-1">
//                   <i className="fa-solid fa-star text-warning"></i>
//                   <i className="fa-solid fa-star text-warning"></i>
//                   <i className="fa-solid fa-star text-warning"></i>
//                   <i className="fa-solid fa-star text-warning"></i>
//                   <i className="fa-solid fa-star-half-stroke text-warning"></i>
//                 </div>
//                 <Link className="text-secondary me-2" to="#">
//                   (87,214 ratings)
//                 </Link>
//                 <span className="me-2">24,980 students</span>
//               </div>
//             </div>
//             <p>
//               Created By: <Link className='me-1 text-info' to="admin-profile">SprintsInc</Link>
//             </p>
//             <div className='d-flex gap-3'>
//               <div className="last-update">
//                 <i className="fa-solid fa-gear me-1"></i>
//                 <span>Last Updated</span>
//               </div>
//               <div className="first-lang">
//                 <i className="fa-solid fa-globe me-1"></i>
//                 <span>English</span>
//               </div>
//               <div className="subtitles">
//                 <i className="fa-regular fa-closed-captioning me-1"></i>
//                 <span>English [auto], Portuguese [Auto], Spanish [Auto]</span>
//               </div>
//             </div>
//           </div>
//         </header>
//       </div>

//       <div className="container my-5 ">
//         <div className="row">
//           <div className="col-md-8 col-sm-12 ">
//           {/* what you will learn */}
          
//             <div className="learn border border-2 border-info-subtle my-5 p-2">
//   <h2 className="mb-4">What you'll learn</h2>
//   <div className="row">
//     <div className="col-md-6">
//       <ul className="list-unstyled">
//         <li className="mb-2">
//           <i className="fa-solid fa-check"></i> Understand the basics of Ajax interactions
//         </li>
//         <li className="mb-2">
//           <i className="fa-solid fa-check"></i> To Update the Browser Window's HTML content dynamically through the DOM
//         </li>
//         <li className="mb-2">
//           <i className="fa-solid fa-check"></i> To Monitor Server Response for Process Completion
//         </li>
//         <li className="mb-2">
//           <i className="fa-solid fa-check"></i> To Receive and Process XML Objects in the DOM
//         </li>
//         <li className="mb-2">
//           <i className="fa-solid fa-check"></i> To Understand the Role of a Web Server in Ajax
//         </li>
//       </ul>
//     </div>
//     <div className="col-md-6">
//       <ul className="list-unstyled">
//         <li className="mb-2">
//           <i className="fa-solid fa-check"></i> To Understand and use the XMLHttpRequest() object in Javascript
//         </li>
//         <li className="mb-2">
//           <i className="fa-solid fa-check"></i> To Dynamically Create and Send Parameterized Queries to a Server
//         </li>
//         <li className="mb-2">
//           <i className="fa-solid fa-check"></i> To Display Server Response in Plain Text
//         </li>
//         <li className="mb-2">
//           <i className="fa-solid fa-check"></i> To Receive and Parse JSON Objects in the DOM
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>


//             {/* Course resources */}
//             <div className="resources  my-5 p-2">
//               <h2 className="me-5">This course includes:</h2>
//               <div className="d-flex align-items-start">
//                 {/* Resource lists */}
//                 <div className="first-resources me-4 ms-0">
//                   <ul className=" list-unstyled">
//                     <li className="my-2">
//                       <i className="fa-solid fa-video me-2 fs-5"></i>
//                       3 hours on-demand video
//                     </li>
//                     <li className="my-2">
//                       <i className="fa-solid fa-mobile-screen me-2 fs-5"></i>
//                       Access on mobile and TV
//                     </li>
//                     <li className="my-2">
//                       <i className="fa-solid fa-file me-2 fs-5"></i>
//                       1 article
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="second-resources">
//                   <ul className=" list-unstyled">
//                     <li className="my-2">
//                       <i className="fa-solid fa-file-arrow-down me-2 fs-5"></i>
//                       24 downloadable resources
//                     </li>
//                     <li className="my-2">
//                       <i className="fa-solid fa-code me-2 fs-5"></i>
//                       6 coding exercises
//                     </li>
//                     <li className="my-2">
//                       <i className="fa-solid fa-trophy me-2 fs-5"></i>
//                       Certificate of completion
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Requirements Section */}
//             <div className="requirements  my-5 p-2">
//               <h3 className="mb-4">Requirements</h3>
//               <ul>
//                 <li className="mb-2">No prior programming experience is needed.</li>
//                 <li className="mb-2">A computer with internet access.</li>
//                 <li className="mb-2">Willingness to learn and practice.</li>
//               </ul>
//             </div>

//             {/* Description Section */}
//             <div className="description  my-5 p-2">
//               <h3 className="mb-4">Description</h3>
//               {showFullDescription ? (
//                 <>
//                   <p>
//                     Take this Javascript training course and start learning Javascript today.
//                   </p>
//                   <p>
//                     "As a business person, I have no place in programming."
//                   </p>
//                   <p>
//                     Ten years ago you could have gotten away with that statement. Today you say that to your colleagues and they scoff at you before they go back to their computers to fix real problems and do real work.
//                   </p>
//                   <p>
//                     If you want to do something useful, start by learning Javascript. These days, when the browser is central to all computer use, knowing "the language of the browser" is the most important step. A few years ago, Javascript's potential was uncertain and many programmers considered it useless. However, competent programmers have identified Javascript's real potential, and it has gone from a toy language to the main language of the browser. It has become one of the most useful languages of this era. Every developer needs at least a basic understanding of Javascript. A developer who knows Javascript is the rockstar of the company and is in constant demand by employers.
//                   </p>
//                   <p>
//                     Our online Javascript course will get you started by teaching you all the essential aspects of coding in Javascript. So... what's it gonna be? Do you want to supercharge your career and be in constant demand by employers? Do you want to learn how to create dynamic and innovative Javascript documents? Start programming today with our Javascript course for Beginners and take control of your career.
//                   </p>
//                   <p>
//                     <strong>Bonus:</strong> When you enroll in this course, you will receive access to my all-new book, <em>JavaScript Development Workbook</em>. This book will give you even more practice coding in JavaScript!
//                   </p>
//                 </>
//               ) : (
//                 <>
//                   {/* Truncated version of the description */}
//                   <p>
//                     Take this Javascript training course and start learning Javascript today.
//                   </p>
//                   <p>
//                     "As a business person, I have no place in programming."
//                   </p>
//                 </>
//               )}

//               {/* Show More / Show Less Button */}
//               <button className="btn btn-link p-0" onClick={toggleDescription}>
//                 {showFullDescription ? 'Show Less' : 'Show More'}
//               </button>
//             </div>

//             {/* Who This Course is For Section */}
//             {showFullDescription && (
//               <div className="who-this-course-is-for  my-5 p-2">
//                 <h3 className="mb-4">Who this course is for</h3>
//                 <ul className="ps-4">
//                   <li className="mb-2">Web Designers looking to improve their skill set</li>
//                   <li className="mb-2">Programmers who need to learn Javascript for their web applications</li>
//                   <li className="mb-2">People looking to start programming and need a first programming language to learn</li>
//                   <li className="mb-2">Students who want to learn Javascript</li>
//                   <li className="mb-2">People who manage a website as a volunteer or as a hobby</li>
//                   <li className="mb-2">Bloggers—even if you use Wordpress or another CMS!</li>
//                   <li className="mb-2">Anyone else who wants to learn Javascript</li>
//                 </ul>
//               </div>
//             )}
//             {/* students also bought section */}
//             <h4 className="mb-4 fw-bold">Students also bought</h4>
//                <StudentAlsoBoughtCard/>
//                <StudentAlsoBoughtCard/>
//                <StudentAlsoBoughtCard/>
//                <StudentAlsoBoughtCard/>         

            
//             {/* instructor section */}

//             <InstructorSection/>
//             {/* course Review */}
         
//             <div className="row g-3">
// <div className=' fw-bolder d-flex '>
//   <div className="course-ratings">
//   <i className="fa-solid fa-star text-warning me-2" ></i>
//   <span className='fs-4 me-3'>4.5 course rating
//   </span>
//   </div>
//   <div className="overall-ratings">
//   <i className="fa-solid fa-circle fa-xs text-secondary"></i> 
//   <span className='fs-4'> 1K ratings

//   </span>
//   </div>
//   </div>     
//     <div className="col-md-6">
//    <CourseReviewCard/>
//     </div>
//     <div className="col-md-6 ">
//     <CourseReviewCard/>
//     </div>
//     <div className="col-md-6">
//    <CourseReviewCard/>
//     </div>
//     <div className="col-md-6">
//    <CourseReviewCard/>
//     </div>
//              </div>
//               <button className="btn btn-info my-2 ">Show All Reviews</button>

     
//              {/* moreCourses by instructor */}

//              <h6 className='fs-4 fw-bolder my-3'> More Courses by <Link to="/inst-profile" className='text-decoration-none'> SkillSprints Inc.</Link></h6>       
//           <CourseCards/>
       


//             <div className='end-of-sidebar'></div>
//           </div>


 
//           <div className="col-lg-4 col-md-12 sidebar  ">
// <div className="p-3 border rounded bg-light " 
//    >
//   <img
//     src="https://via.placeholder.com/350x150"
//     alt="Course Preview"
//     className="w-100 mb-3"
//   />
//   <div className="d-flex justify-content-between">
//     <button className="btn btn-outline-secondary active">Personal</button>
//     <button className="btn btn-outline-secondary">Teams</button>
//   </div>
//   <div className="mt-3">
//     <h4>Subscribe to Udemy's top courses</h4>
//     <p>
//       Get this course, plus 12,000+ of our top-rated courses, with Personal Plan. 
//       <Link to="">Learn more</Link>
//     </p>
   
//     <p className="text-muted">Starting at £204.00 per month after trial</p>
//     <hr />
//     <p className="text-center">or</p>
//     <h3 className="text-center">£999.99</h3>
//     <button className="btn btn-outline-dark w-100 mb-3 btn-info">Add to cart</button>
   
//   </div>
// </div>
// </div>
//         </div>
//       </div>
//     </>
//   );


// }

import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import InstructorSection from './components/InstructorSection';
import  CourseCards from '../../components/CourseCards/index.jsx'
import CourseReviewCard from './components/CourseReviewCard';
import   StudentAlsoBoughtCard from "./components/StudentsAlsoBoughtCard/index.jsx"
import {useDispatch, useSelector} from "react-redux";
import {getCourseWhatYouWillLearn} from "../../store/actions/coursesAction";


export default function CourseDetails() {
  const [showFullDescription, setShowFullDescription] = useState(false);
 
  
  // Function to handle "Show More" and "Show Less" button clicks
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  //   console.log('Handle Scroll:', scrollY);
  //   const endOfSidebarElement = document.querySelector('.end-of-sidebar');
  //   const threshold = endOfSidebarElement ? endOfSidebarElement.offsetTop -300 : 0;
  //   console.log('thresholsScroll:', threshold);
    
  //   if (scrollY >= threshold) {
  //    console.log("done")
    
  //   } else {
    
  //   }
  
  // };
  

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
    const dispatch = useDispatch()
  const {course_what_you_will_learn} = useSelector(state => state.allCourses)

    useEffect(() => {
        dispatch(getCourseWhatYouWillLearn(2))
    },[])
  return (
    <>
      <div className="container-fluid bg-dark py-5">
        <header className="row">
          <div className="col-lg-8 col-md-10 col-sm-12 text-white p-4">
            <h1 className="mb-3">Javascript for Beginners</h1>
            <h2 className="h5">
              Learn javascript online and supercharge your web design with this
              Javascript for beginners training course.
            </h2>

            <div className="selling mt-4">
              <div className="ratings d-flex align-items-center">
                <i className="me-1">4.7</i>
                <div className="stars me-2 mb-1">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star-half-stroke text-warning"></i>
                </div>
                <Link className="text-secondary me-2" to="#">
                  (87,214 ratings)
                </Link>
                <span className="me-2">24,980 students</span>
              </div>
            </div>
            <p>
              Created By: <Link className='me-1 text-info' to="admin-profile">SprintsInc</Link>
            </p>
            <div className='d-flex gap-3'>
              <div className="last-update">
                <i className="fa-solid fa-gear me-1"></i>
                <span>Last Updated</span>
              </div>
              <div className="first-lang">
                <i className="fa-solid fa-globe me-1"></i>
                <span>English</span>
              </div>
              <div className="subtitles">
                <i className="fa-regular fa-closed-captioning me-1"></i>
                <span>English [auto], Portuguese [Auto], Spanish [Auto]</span>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="container my-5  position-relative">
        <div className="row">
          <div className="col-md-8 col-sm-12 ">
          {/* what you will learn */}
          
            <div className="learn border border-2 border-info-subtle my-5 p-2">
  <h2 className="mb-4">What you'll learn</h2>
  <div className="row">
    <div className="col-md-6">
      <ul className="list-unstyled">
        {
            course_what_you_will_learn?.map((item,index)=>(
              <li className="mb-2">
                <i className="fa-solid fa-check"></i> {item.description}
              </li>
            ))
        }


      </ul>
    </div>
    <div className="col-md-6">
      <ul className="list-unstyled">
        <li className="mb-2">
          <i className="fa-solid fa-check"></i> To Understand and use the XMLHttpRequest() object in Javascript
        </li>
        <li className="mb-2">
          <i className="fa-solid fa-check"></i> To Dynamically Create and Send Parameterized Queries to a Server
        </li>
        <li className="mb-2">
          <i className="fa-solid fa-check"></i> To Display Server Response in Plain Text
        </li>
        <li className="mb-2">
          <i className="fa-solid fa-check"></i> To Receive and Parse JSON Objects in the DOM
        </li>
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
                    <li className="my-2">
                      <i className="fa-solid fa-video me-2 fs-5"></i>
                      3 hours on-demand video
                    </li>
                    <li className="my-2">
                      <i className="fa-solid fa-mobile-screen me-2 fs-5"></i>
                      Access on mobile and TV
                    </li>
                    <li className="my-2">
                      <i className="fa-solid fa-file me-2 fs-5"></i>
                      1 article
                    </li>
                  </ul>
                </div>

                <div className="second-resources">
                  <ul className=" list-unstyled">
                    <li className="my-2">
                      <i className="fa-solid fa-file-arrow-down me-2 fs-5"></i>
                      24 downloadable resources
                    </li>
                    <li className="my-2">
                      <i className="fa-solid fa-code me-2 fs-5"></i>
                      6 coding exercises
                    </li>
                    <li className="my-2">
                      <i className="fa-solid fa-trophy me-2 fs-5"></i>
                      Certificate of completion
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Requirements Section */}
            <div className="requirements  my-5 p-2">
              <h3 className="mb-4">Requirements</h3>
              <ul>
                <li className="mb-2">No prior programming experience is needed.</li>
                <li className="mb-2">A computer with internet access.</li>
                <li className="mb-2">Willingness to learn and practice.</li>
              </ul>
            </div>

            {/* Description Section */}
            <div className="description  my-5 p-2">
              <h3 className="mb-4">Description</h3>
              {showFullDescription ? (
                <>
                  <p>
                    Take this Javascript training course and start learning Javascript today.
                  </p>
                  <p>
                    "As a business person, I have no place in programming."
                  </p>
                  <p>
                    Ten years ago you could have gotten away with that statement. Today you say that to your colleagues and they scoff at you before they go back to their computers to fix real problems and do real work.
                  </p>
                  <p>
                    If you want to do something useful, start by learning Javascript. These days, when the browser is central to all computer use, knowing "the language of the browser" is the most important step. A few years ago, Javascript's potential was uncertain and many programmers considered it useless. However, competent programmers have identified Javascript's real potential, and it has gone from a toy language to the main language of the browser. It has become one of the most useful languages of this era. Every developer needs at least a basic understanding of Javascript. A developer who knows Javascript is the rockstar of the company and is in constant demand by employers.
                  </p>
                  <p>
                    Our online Javascript course will get you started by teaching you all the essential aspects of coding in Javascript. So... what's it gonna be? Do you want to supercharge your career and be in constant demand by employers? Do you want to learn how to create dynamic and innovative Javascript documents? Start programming today with our Javascript course for Beginners and take control of your career.
                  </p>
                  <p>
                    <strong>Bonus:</strong> When you enroll in this course, you will receive access to my all-new book, <em>JavaScript Development Workbook</em>. This book will give you even more practice coding in JavaScript!
                  </p>
                </>
              ) : (
                <>
                  {/* Truncated version of the description */}
                  <p>
                    Take this Javascript training course and start learning Javascript today.
                  </p>
                  <p>
                    "As a business person, I have no place in programming."
                  </p>
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
               <StudentAlsoBoughtCard/>
               <StudentAlsoBoughtCard/>
               <StudentAlsoBoughtCard/>
               <StudentAlsoBoughtCard/>         

            
            {/* instructor section */}

            <InstructorSection/>
            {/* course Review */}
         
            <div className="row g-3">
<div className=' fw-bolder d-flex '>
  <div className="course-ratings">
  <i className="fa-solid fa-star text-warning me-2" ></i>
  <span className='fs-4 me-3'>4.5 course rating
  </span>
  </div>
  <div className="overall-ratings">
  <i className="fa-solid fa-circle fa-xs text-secondary"></i> 
  <span className='fs-4'> 1K ratings

  </span>
  </div>
  </div>     
    <div className="col-md-6">
   <CourseReviewCard/>
    </div>
    <div className="col-md-6 ">
    <CourseReviewCard/>
    </div>
    <div className="col-md-6">
   <CourseReviewCard/>
    </div>
    <div className="col-md-6">
   <CourseReviewCard/>
    </div>
             </div>
              <button className="btn btn-info my-2 ">Show All Reviews</button>

     
             {/* moreCourses by instructor */}

             <h6 className='fs-4 fw-bolder my-3'> More Courses by <Link to="/inst-profile" className='text-decoration-none'> SkillSprints Inc.</Link></h6> 
             
             <div className="container">
               <div className="row">
                  <CourseCards/>
               </div>  
             </div>      


            <div className='end-of-sidebar'></div>
          </div>
 
          <div className="col-lg-4 col-md-12   ">
<div className="p-3 border rounded bg-light sidebar" 
   >
  <img
    src="https://via.placeholder.com/350x150"
    alt="Course Preview"
    className="w-100 mb-3"
  />
  <div className="d-flex justify-content-between">
    <button className="btn btn-outline-secondary active">Personal</button>
    <button className="btn btn-outline-secondary">Teams</button>
  </div>
  <div className="mt-3">
    <h4>Subscribe to Udemy's top courses</h4>
    <p>
      Get this course, plus 12,000+ of our top-rated courses, with Personal Plan. 
      <Link to="">Learn more</Link>
    </p>
   
    <p className="text-muted">Starting at £204.00 per month after trial</p>
    <hr />
    <p className="text-center">or</p>
    <h3 className="text-center">£999.99</h3>
    <button className="btn btn-outline-dark w-100 mb-3 btn-info">Add to cart</button>
   
  </div>
</div>
           </div>
        </div>
      </div>
    </>
  );


}