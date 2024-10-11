import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../store/actions/orderAction";
// import GeneralLoading from "../Loading/GeneralLoading/GeneralLoading";

function PurchseRow({orders}) {

    // const dispatch = useDispatch();
    // const {orders,loading} = useSelector((state)=>state.orders);

    // const [courses, setCourses] = useState([]);

    // // Fetch the JSON file using axios
    // useEffect(() => {
    //     axios.get('/data/coursesList.json') // Adjust the path if necessary
    //         .then(response => {
    //             setCourses(response.data);
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching courses:", error);
    //         });
    // }, []);
    const formatDate = (apiDate) =>{
        const date = new Date(apiDate);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
        return formattedDate;
    }
    // useEffect(()=>{
    //     dispatch(getOrders());
    //     console.log(orders.results);
    // },[])
    
    return (
        <tbody>
            {orders.results.map((order,i)=>(
                <tr key={i}>
                <th scope="row"><i className="fa-solid fa-cart-shopping"></i></th>
                <td>{order.courseName}</td>
                <td>{formatDate(order.created_at)}</td>
                <td>{order.total_price}</td>
                <td>{order.payment_method}</td>
                <td><button className="btn btn-light">Receipt</button></td>
                <td>Invoice unavailable</td>
            </tr>
            ))}
        </tbody>
        
    );
}

export default PurchseRow;