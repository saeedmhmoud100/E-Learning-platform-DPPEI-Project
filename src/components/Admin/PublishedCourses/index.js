import {BarChart} from "../../Charts/barChart";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {motion} from "framer-motion";
export const PublishedCourses = () => {
    const [barChartData, setBarChartData] = useState({})
    const {loading, courses} = useSelector(state => state.admin)
    useEffect(() => {
        fetch('/data/admin/barChartData.json')
            .then(response => response.json())
            .then(data => {
                setBarChartData(data)
            })

    },[])

    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='row g-3'
        >





            <div className='w-100  col-12'>
                <h4>Published Courses</h4>
                <div className="overflow-auto" style={{maxHeight:'800px'}}>
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
                    {
                        courses?.results?.map((course, index) => (
                            <tr key={index}>
                                <th scope='row'>{index}</th>
                                <td>{course.title}</td>
                                <td>{course.created_at}</td>
                                <td>{course.instructor_data.user.username}</td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
                </div>
            </div>


            <div className="col-12 mt-5">
                <h2>Published Courses Analysis</h2>
                    <BarChart data={barChartData}/>
            </div>



        </motion.div>

    )
}
