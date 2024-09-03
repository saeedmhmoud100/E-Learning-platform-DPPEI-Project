export const CourseAnalysis = () => {
    return (
        <div className='w-100 overflow-x-auto'>
            <h4>Course Analysis</h4>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Course Name</th>
                    <th scope='col'>Total Orders</th>
                    <th scope='col'>Total Revenue</th>
                    <th scope='col'>Views</th>
                    <th scope='col'>Rating</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope='row'>1</th>
                    <td>Course 1</td>
                    <td>100</td>
                    <td>10000</td>
                    <td>1000</td>
                    <td>4.5</td>
                </tr>
                <tr>
                    <th scope='row'>2</th>
                    <td>Course 2</td>
                    <td>200</td>
                    <td>20000</td>
                    <td>2000</td>
                    <td>4.5</td>
                </tr>
                <tr>
                    <th scope='row'>3</th>
                    <td>Course 3</td>
                    <td>300</td>
                    <td>30000</td>
                    <td>3000</td>
                    <td>4.5</td>
                </tr>
                <tr>
                    <th scope='row'>4</th>
                    <td>Course 4</td>
                    <td>400</td>
                    <td>40000</td>
                    <td>4000</td>
                    <td>4.5</td>
                </tr>
                <tr>
                    <th scope='row'>5</th>
                    <td>Course 5</td>
                    <td>500</td>
                    <td>50000</td>
                    <td>5000</td>
                    <td>4.5</td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}
