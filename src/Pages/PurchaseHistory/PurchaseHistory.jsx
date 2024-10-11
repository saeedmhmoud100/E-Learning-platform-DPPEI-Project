import { useDispatch, useSelector } from 'react-redux';
import GeneralLoading from '../../components/Loading/GeneralLoading/GeneralLoading';
import PurchseRow from '../../components/PurchaseRow';
import './style.css'
import { Link } from "react-router-dom";
import { getOrders } from '../../store/actions/orderAction';
import { useEffect } from 'react';

function PurchaseHistory() {
    const dispatch = useDispatch();
    const { orders, loading } = useSelector((state) => state.orders);
    const formatDate = (apiDate) => {
        const date = new Date(apiDate);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
        return formattedDate;
    }
    useEffect(()=>{
        dispatch(getOrders());
        console.log(orders);
    },[])
    return (
        <>{loading === false ? <><div className="container my-5">
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
                    {/* <PurchseRow orders={orders}/> */}
                    <tbody>
                        {orders.results.map((order, i) => (
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
                </table>
            </div>
        </div></> : <GeneralLoading />}</>
    );
}

export default PurchaseHistory;