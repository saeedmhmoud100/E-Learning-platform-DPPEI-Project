import {Link, useLocation} from "react-router-dom";

export const AdminSidebar = () => {
    const location = useLocation()

    const adminPages = [
        {
            name: 'dashboard',
            url: '/admin/profile'
        },
        {
            name: 'Courses Ordered',
            url: '/admin/courses-ordered'
        },
        {
            name: 'Course Analysis',
            url: '/admin/course-analysis'
        },
        {
            name: 'Published Courses',
            url: '/admin/published-courses'
        },
    ]


    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
            <span className="fs-4">Sidebar</span>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                {
                    adminPages.map((page, index) => {
                        return (
                            <li key={index} className={`my-2 border-bottom     ${location.pathname === page.url ? 'nav-item' : null}`}>
                                {
                                    location.pathname === page.url ?
                                        <Link to={page.url} className="nav-link active" aria-current="page">
                                            {page.name}
                                        </Link>
                                        :
                                        <Link to={page.url} className="nav-link link-dark">
                                            {page.name}
                                        </Link>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>


    )
}
