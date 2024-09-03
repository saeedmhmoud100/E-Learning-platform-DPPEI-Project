export const PublishedCourses = () => {
    return (
        <div className='w-100 overflow-x-auto'>
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
    )
}
