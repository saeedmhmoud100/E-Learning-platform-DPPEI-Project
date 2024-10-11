import { Link } from 'react-router-dom';
import CourseProgressCard from '../../components/MyCourses/Cards/CourseProgressCard';
import './style.css'
import ImageSlider from '../../components/ImageSlider';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileData } from '../../store/actions/profileAction';
import GeneralLoading from '../../components/Loading/GeneralLoading/GeneralLoading';
function UserProfile() {

    const dispatch = useDispatch();
    const {profile,loading} = useSelector((state)=>state.profile);

    const images = [
        '/images/certificate.png',
        '/images/certificate.png',
        '/images/certificate.png',
        '/images/certificate.png',
        '/images/certificate.png',
        '/images/certificate.png',
        '/images/certificate.png',
        '/images/certificate.png',
        '/images/certificate.png',
        '/images/certificate.png',
        '/images/certificate.png',
    ]
    useEffect(()=>{
        dispatch(getProfileData(16));
        console.log(profile);
    },[])
    return (
        <>{loading==false?<><div className="container my-5">
            <div className="header d-flex justify-content-between align-items-center">
                <h1 className='text-center mb-4'>Public Profile</h1>
                <div className="edit">
                <Link className='editBtn' to={'/profile/edit'} >Edit</Link>
                </div>
            </div>
            <div className="row justify-content-center align-items-center border-bottom border-black pb-5">
                <div className="col-md-3">
                    <div className="img rounded-pill">
                        <img src={profile.profile_image} alt="user picture" className='w-100 rounded-pill ' />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="userName">
                        <h2>{profile.username}</h2>
                        <p>{profile.description}</p>
                        <div className='socialLinks'>
                            <i className="socialIcon fa-brands fa-linkedin"></i>
                            <i className="socialIcon fa-brands fa-github"></i>
                            <i className="socialIcon fa-solid fa-globe"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-4 mt-5">
                <div className="header d-flex justify-content-between">
                    <h1 className='text-center mb-4'>My Courses</h1>
                    <Link className='seeAll' to={'/profile/courses'}>See All<i className="fa-solid fa-chevron-right fs-6"></i></Link>
                </div>
                {profile.courses_enrolled.map((course,i)=>(<CourseProgressCard key={i} courseName={course.title} instructorName={course.instructor} image={course.thumbnail_link} />))}
                {/* <CourseProgressCard courseName={'Advanced React'} instructorName={'Jane Smith'} progress={50} />
                <CourseProgressCard courseName={'JavaScript Essentials'} instructorName={'Mark Lee'} progress={80} />
                <CourseProgressCard courseName={'CSS Mastery'} instructorName={'Sarah Jones'} progress={95} /> */}
            </div>
            <div className="row g-4 mt-5">
                <h1 className='mb-4'>My Certificates</h1>
                <div className="col-md-12">
                    <ImageSlider images={images} />
                </div>
            </div>
        </div></>:<GeneralLoading/>}</>
    );
}

export default UserProfile;