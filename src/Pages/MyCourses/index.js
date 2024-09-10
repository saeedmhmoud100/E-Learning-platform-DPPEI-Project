import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const MyCourses = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();


    const sections = [
        {
            title: 'All Courses',
            path: '/my-courses/all-courses'
        },
        {
            title: 'My List',
            path: '/my-courses/my-list'
        },
        {
            title: 'Wishlist',
            path: '/my-courses/wishlist'
        },
        {
            title:'archived',
            path: '/my-courses/archived'
        },
        {
            title: 'Learning Tools',
            path: '/my-courses/learning-tools'
        }
    ]


    useEffect(() => {
        if(sections.findIndex(section => section.path === pathname) === -1){
            navigate('/my-courses/all-courses')
        }
    },[pathname, navigate])


    return (
        <div className='bg-dark mb-5 text-white'>
            <div className='container pt-5 pb-2'>
                <div className="row">
                    <div className="col-12">
                        <h1 className='fw-bold mb-5'>My Courses</h1>
                    </div>
                    <div className="row px-0">
                        {
                            sections.map((section, index) => (
                                <div key={index} className="w-fit-content px-2">
                                    <Link className={`text-white pb-2 fs-5 fw-bold ${pathname === section.path ? 'border-4 border-bottom' : '' }  d-inline`} to={section.path}> {section.title}</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
