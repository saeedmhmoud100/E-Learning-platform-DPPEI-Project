import { Link } from 'react-router-dom';
import MyCourses from '../../components/MyCourses';
import './style.css'
import ImageSlider from '../../components/ImageSlider';
function UserProfile() {
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
    return (
        <div className="container my-5">
            <div className="header d-flex justify-content-between align-items-center">
                <h1 className='text-center mb-4'>Public Profile</h1>
                <div className="edit">
                <Link className='editBtn' to={'/profile/edit'} >Edit</Link>
                </div>
            </div>
            <div className="row justify-content-center align-items-center border-bottom border-black pb-5">
                <div className="col-md-3">
                    <div className="img">
                        <img src="/images/pfp.png" alt="user picture" className='w-75' />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="userName">
                        <h2>John Doe</h2>
                        <h3>Software Engineer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolorum consequuntur aliquid architecto culpa beatae.</p>
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
                <MyCourses courseName={'React Basics'} instructorName={'John Doe'} progress={20} />
                <MyCourses courseName={'Advanced React'} instructorName={'Jane Smith'} progress={50} />
                <MyCourses courseName={'JavaScript Essentials'} instructorName={'Mark Lee'} progress={80} />
                <MyCourses courseName={'CSS Mastery'} instructorName={'Sarah Jones'} progress={95} />
            </div>
            <div className="row g-4 mt-5">
                <h1 className='mb-4'>My Certificates</h1>
                <div className="col-md-12">
                    <ImageSlider images={images} />
                </div>
            </div>
        </div>
    );
}

export default UserProfile;