import {useEffect, useState} from "react";
import {BarChart} from "../../Charts/barChart";

export const CoursesOrdered = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/data/admin/barChartData.json')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className={'w-100 '}>
            <h4 >Courses Ordered:</h4>
            <div className="overflow-auto" style={{maxHeight:'800px'}}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Price</th>
                        <th>Order Date</th>
                        <th>Order Status</th>
                        <th>User who ordered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>React</td>
                        <td>100</td>
                        <td>2021-09-01</td>
                        <td>Delivered</td>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <td>Angular</td>
                        <td>150</td>
                        <td>2021-09-01</td>
                        <td>Delivered</td>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <td>Vue</td>
                        <td>200</td>
                        <td>2021-09-01</td>
                        <td>Delivered</td>
                        <td>John Doe</td>
                    </tr>
                </tbody>
            </table>
            </div>


            <div className="col-12 mt-5">
                <h4>Orders Analysis</h4>
                <BarChart data={data}/>
            </div>

        </div>
    )
}
