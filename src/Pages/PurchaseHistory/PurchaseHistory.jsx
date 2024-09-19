import PurchseRow from '../../components/PurchaseRow';
import './style.css'
import { Link } from "react-router-dom";

function PurchaseHistory() {
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
                    <PurchseRow/>
                </table>
            </div>
        </div>
    );
}

export default PurchaseHistory;