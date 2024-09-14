import {Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {AllCourses} from "../../components/MyCourses/AllCourses";
import {MyList} from "../../components/MyCourses/MyList";
import Wishlist from "../../components/MyCourses/Wishlist";
import {Archived} from "../../components/MyCourses/Archived";
import {LearningTools} from "../../components/MyCourses/LearningTools";
import UserCourses from "../UserCourses/UserCourses";

export const MyCourses = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();


    const sections = [
        {
            title: 'All Courses',
            path: 'all-courses',
            fullPath: '/my-courses/all-courses',
            component: UserCourses
        },
        {
            title: 'My List',
            path: 'my-list',
            fullPath: '/my-courses/my-list',
            component: MyList
        },
        {
            title: 'Wishlist',
            path: 'wishlist',
            fullPath: '/my-courses/wishlist',
            component: Wishlist
        },
        {
            title:'Archived',
            path: 'archived',
            fullPath: '/my-courses/archived',
            component: Archived
        },
        {
            title: 'Learning Tools',
            path: 'learning-tools',
            fullPath: '/my-courses/learning-tools',
            component: LearningTools
        }
    ]


    useEffect(() => {
        if(sections.findIndex(section => section.fullPath === pathname) === -1){
            navigate('/my-courses/all-courses')
        }
    },[pathname, navigate])


    return (
        <>
            <div className='bg-dark mb-5 text-white'>
                <div className='container pt-5 pb-2'>
                    <div className="row">
                        <div className="col-12">
                            <h1 className='fw-bold mb-5'>My Courses</h1>
                        </div>
                        <div className="row px-0 gy-3">
                            {
                                sections.map((section, index) => (
                                    <div key={index} className="w-fit-content px-2">
                                        <Link className={`text-white pb-2 fs-6 text-decoration-none fw-bold ${pathname === section.fullPath ? 'border-4 border-bottom' : '' }  d-inline`} to={section.fullPath}> {section.title}</Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <Routes>
                    {
                        sections.map((section, index) => (
                            <Route key={index} path={section.path} element={<section.component/>}/>
                        ))
                    }
                </Routes>
            </div>

        </>
    )
}
