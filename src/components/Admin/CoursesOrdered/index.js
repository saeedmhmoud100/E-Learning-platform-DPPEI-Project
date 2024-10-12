import {useEffect, useState} from "react";
import {BarChart} from "../../Charts/barChart";
import {useSelector} from "react-redux";

export const CoursesOrdered = () => {
    const [data, setData] = useState([])
    const {orders} = useSelector(state => state.admin)
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
                {
                    orders?.results?.map((order, index) => (
                        <tr key={index}>
                            <td>{order.course.title}</td>
                            <td>{order.price}</td>
                            <td>{order.created_at}</td>
                            <td>{order.orderStatus}</td>
                            <td>{order.user}</td>
                        </tr>
                    ))
                }

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
