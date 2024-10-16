import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {createOrders, getOrders} from '../../store/actions/orderAction';
import { useEffect,useState } from 'react';
import GeneralLoading from '../../components/Loading/GeneralLoading/GeneralLoading';
import {useNavigate} from "react-router-dom";
export default function Checkout() {
  const {orders,loading}=useSelector(state=>state.orders);
  const dispatch=useDispatch();
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    // Only dispatch getOrders if orders are not already fetched
    if (!orders || !orders.results || orders.results.length === 0) {
      dispatch(getOrders());
    }
  }, []);


  const orderItems = orders?.results?.[0] || [];

    const handleCheckout = async () => {
      await dispatch(createOrders())
      setSuccessMessage('You have successfully checked out!');
      navigate('/my-courses')
    };

  return (
    (loading ) ? (
      <GeneralLoading />
    ) :
    <div className="container mt-5">
      <div className="row">
        {/* Left Column: Billing Address and Payment Method */}
        <div className="col-md-8">
          <h1 className='my-3'>Checkout</h1>
       {/* Success Message */}
            {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}

          {/* Billing Address */}
          <div className="mb-5">
            <h5 className='mb-3'>Billing address</h5>
            <label htmlFor="country " className="form-label mb-1">Country</label>
            <select id="country" className="form-select " >
              <option>Egypt</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Germany</option>
              <option>France</option>
              <option>India</option>
              <option>China</option>
              <option>Japan</option>
          
            </select>
            <small className="form-text text-muted">
              Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.
            </small>
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <h5>Payment method</h5>
            <div className="form-check mb-2 ">
              
            <div className="creditCards d-flex align-items-center  gap-3 w-75 ">
            <input className="form-check-input" type="radio" name="paymentMethod" id="creditCard" />
            <i className="fa-regular fa-credit-card"></i>
            <label className="form-check-label" htmlFor="creditCard">
                Credit/Debit Card
              </label>
              <div className="mt-2 d-flex gap-2">
                <img src="https://img.icons8.com/color/36/000000/amex.png" alt="Amex" />
                <img src="https://img.icons8.com/color/36/000000/discover.png" alt="Discover" />
                <img src="https://img.icons8.com/color/36/000000/mastercard.png" alt="MasterCard" />
                <img src="https://img.icons8.com/color/36/000000/visa.png" alt="Visa" />
                <img src="https://img.icons8.com/color/36/000000/jcb.png" alt="JCB" />
              </div>
            </div>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="paypal" />
              <img className="ms-2" src="https://img.icons8.com/color/36/000000/paypal.png" alt="PayPal" />
              <label className="form-check-label" htmlFor="paypal">
                PayPal
              </label>
            
            </div>
          </div>

          {/* Order Details */}
          <div className="mb-4">
            <h5>Order details</h5>
            <ul className="list-group">
         {
          orderItems?.items?.map((order,i)=>(
            <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src={order?.course?.thumbnail_link} className="checkout-course-img me-2 " />
              <h6 className="mb-0 fw-bolder">  {order?.course?.title}</h6>
            </div>
             
              <span>{order?.price} L.E</span>
            </li>
          ))
         }
             
            </ul>
          </div>
        </div>

        {/* Right Column: Summary */}
   
        <div className="col-lg-4 div.col-md-12">
        <div className="priceDetails d-flex flex-column my-3  ">
   <p className='fs-3 fw-bold'> Summary</p>          
   <p className=" d-flex justify-content-between">
                <strong>Original Price:</strong>
                <span> {orderItems?.total_price}L.E</span>
              </p>
              <hr />
              <p className=" d-flex justify-content-between">
                <strong>Total:</strong>
                <span> {orderItems?.total_price}L.E</span>
              </p>
              <small className="form-text text-muted my-3">
                By completing your purchase you agree to these <a href="#">Terms of Service</a>.
              </small>
            
   <button type='submit' className='w-100 btn  btn-primary btn-lg  checkout-btn' onClick={handleCheckout} > Complete Checkout</button>
   <p className="mt-2 text-center">30-Day Money-Back Guarantee</p>



         </div>
        </div>
 


      </div>
    </div>
  );
}
