import {BarChart} from "../Charts/barChart";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export default function InsCoursesCard({course}){

    const [barChartData, setBarChartData] = useState([])


    useEffect(() => {
        // Fetch data from the API
        fetch('/data/admin/barChartData.json')
            .then(response => response.json())
            .then(data => {
                setBarChartData(data)
            })
    },[])


    const TimeAgo = ({ timestamp }) => {
        const timeAgo = (timestamp) => {
            const now = new Date();
            const past = new Date(timestamp);

            const yearsDifference = now.getFullYear() - past.getFullYear();
            const monthsDifference = now.getMonth() - past.getMonth() + (yearsDifference * 12);
            const daysDifference = Math.floor((now - past) / (1000 * 60 * 60 * 24));

            if (monthsDifference > 0) {
                return `Last updated ${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
            } else if (daysDifference > 0) {
                return `Last updated ${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
            } else {
                return 'Just now';
            }
        };

        return <div>{timeAgo(timestamp)}</div>;
    };

    return(
        <div className="card w-100 h-auto mb-3 col-12 " style={{cursor:"default"}}>
            <div className="row g-0 flex-column flex-lg-row">
                <div className="col-lg-3 col-12 d-flex align-items-center justify-content-center justify-content-lg-start">
                    <img src={course.thumbnail_link} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-lg-4 col-12 d-flex align-items-center text-center text-lg-start">
                    <div className="card-body">
                        <h5 className="card-title mb-4">{course.title}</h5>
                        <p className="card-text my-1">No. Students: {course.students.length}.</p>
                        <p className="card-text my-1">No. Videos: {Math.trunc(Math.random() * 96)}.</p>
                        <p className="card-text"><small className="text-body-secondary"><TimeAgo timestamp={course.updated_at}/> </small>
                        </p>

                        <div className="buttons d-flex justify-content-center justify-content-lg-start">
                            <Link to='/course-details' className='text-decoration-none'><button className="btn btn-primary">View Course</button></Link>
                            <button className="btn btn-danger mx-2">Delete Course</button>
                            <button className="btn btn-warning">Edit Course</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-12 d-flex align-items-center justify-content-center justify-content-lg-start">
                    <div className="card-body">
                        <h5 className="card-title">Statistics</h5>
                        <BarChart data={barChartData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}