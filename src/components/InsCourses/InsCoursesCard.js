import {BarChart} from "../Charts/barChart";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export default function InsCoursesCard(){

    const [barChartData, setBarChartData] = useState([])


    useEffect(() => {
        // Fetch data from the API
        fetch('/data/admin/barChartData.json')
            .then(response => response.json())
            .then(data => {
                setBarChartData(data)
            })
    },[])

    return(
        <div className="card w-100 h-auto mb-3 col-12 " style={{cursor:"default"}}>
            <div className="row g-0 flex-column flex-lg-row">
                <div className="col-lg-3 col-12 d-flex align-items-center justify-content-center justify-content-lg-start">
                    <img src="https://placehold.co/337" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-lg-4 col-12 d-flex align-items-center text-center text-lg-start">
                    <div className="card-body">
                        <h5 className="card-title mb-4">Course Name</h5>
                        <p className="card-text my-1">No. Students: 5000.</p>
                        <p className="card-text my-1">No. Videos: 84.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 months ago</small>
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