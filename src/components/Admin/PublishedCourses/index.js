import {BarChart} from "../../Charts/barChart";
import {useEffect, useState} from "react";

export const PublishedCourses = () => {
    const [barChartData, setBarChartData] = useState({})

    useEffect(() => {
        fetch('/data/admin/barChartData.json')
            .then(response => response.json())
            .then(data => {
                setBarChartData(data)
            })
    },[])

    return (
        <>
            <div className='w-100 overflow-auto col-12' style={{maxHeight:"800px"}}>
                <h4>Published Courses</h4>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Course Name</th>
                        <th scope='col'>Published Date</th>
                        <th scope='col'>Published By</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>React</td>
                        <td>2021-10-10</td>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>Node</td>
                        <td>2021-10-10</td>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td>Express</td>
                        <td>2021-10-10</td>
                        <td>John Doe</td>
                    </tr>
                    </tbody>
                </table>
            </div>


            <div className="col-12">
                <h2 className='mt-5'>Published Courses Analysis</h2>
                    <BarChart data={barChartData}/>
            </div>
        </>

    )
}
