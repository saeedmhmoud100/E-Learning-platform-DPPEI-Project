export const CoursesOrdered = () => {
    return (
        <div className={'w-100 overflow-x-auto'}>
            <h4 >Courses Ordered:</h4>
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
    )
}
