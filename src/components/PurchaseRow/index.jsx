import { useEffect, useState } from "react";
import axios from "axios";

function PurchseRow() {
    const [courses, setCourses] = useState([]);

    // Fetch the JSON file using axios
    useEffect(() => {
        axios.get('/data/coursesList.json') // Adjust the path if necessary
            .then(response => {
                setCourses(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching courses:", error);
            });
    }, []);
    return (
        <tbody>
            {courses.map((course,i)=>(
                <tr key={i}>
                <th scope="row"><i className="fa-solid fa-cart-shopping"></i></th>
                <td>{course.courseName}</td>
                <td>Aug 11, 2024</td>
                <td>0.00EGP</td>
                <td>Free Coupon</td>
                <td><button className="btn btn-light">Receipt</button></td>
                <td>Invoice unavailable</td>
            </tr>
            ))}
        </tbody>
        
    );
}

export default PurchseRow;