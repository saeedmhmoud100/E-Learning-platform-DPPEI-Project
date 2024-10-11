import { useDispatch, useSelector } from 'react-redux';
import PurchseRow from '../../components/PurchaseRow';
import './style.css'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { getOrders } from '../../store/actions/orderAction';

function PurchaseHistory() {

    const dispatch = useDispatch();
    const {orders} = useSelector((state)=>state.orders);

    // useEffect(()=>{
    //     dispatch(getOrders());
    //     },[dispatch])

    return (
        <div className="container my-5">
            <h1>Purchase History</h1>
            <div className="row">
                <ul className="nav nav-underline">
                    <li className="me-2 nav-item">
                        <Link className="listLink nav-link active" aria-current="page">Courses</Link>
                    </li>
                    <li className="me-2 nav-item">
                        <Link className="listLink nav-link">Subscriptions</Link>
                    </li>
                    <li className="me-2 nav-item">
                        <Link className="listLink nav-link">Refunds</Link>
                    </li>
                </ul>
            </div>
            <div className="row mt-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Total Price</th>
                            <th scope="col">Payment Type</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    {/* <PurchseRow/> */}
                    <tbody>
            {/* {orders.results.map((course,i)=>(
                <tr key={i}>
                <th scope="row"><i className="fa-solid fa-cart-shopping"></i></th>
                <td>{course.courseName}</td>
                <td>Aug 11, 2024</td>
                <td>0.00EGP</td>
                <td>Free Coupon</td>
                <td><button className="btn btn-light">Receipt</button></td>
                <td>Invoice unavailable</td>
            </tr>
            ))} */}
        </tbody>
                </table>
            </div>
        </div>
    );
}

export default PurchaseHistory;