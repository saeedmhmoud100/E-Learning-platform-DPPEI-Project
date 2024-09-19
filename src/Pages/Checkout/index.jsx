import React from 'react';
import './style.css';


export default function Checkout() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column: Billing Address and Payment Method */}
        <div className="col-md-8">
          <h1 className='my-3'>Checkout</h1>

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
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="https://via.placeholder.com/40" alt="AJAX Development" className="checkout-course-img me-2" />
                <h6 className="mb-0 fw-bolder">AJAX Development</h6>
              </div>
             <span>E£699.99</span>
             </li>

              <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="https://via.placeholder.com/40" alt="Learn C# Programming" className="checkout-course-img me-2" />
                <h6 className="mb-0 fw-bolder"> Learn C# Programming (In Ten Easy Steps)</h6>
              </div>
               
                <span>E£899.99</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="https://via.placeholder.com/40" alt=" Typescript: The Complete Developer's Guide" className="checkout-course-img me-2" />
                <h6 className="mb-0 fw-bolder">  Typescript: The Complete Developer's Guide</h6>
              </div>
               
                <span>E£2,499.99</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Summary */}
   
        <div className="col-lg-4 div.col-md-12">
        <div className="priceDetails d-flex flex-column my-3  ">
   <p className='fs-3 fw-bold'> Summary</p>          
   <p className=" d-flex justify-content-between">
                <strong>Original Price:</strong>
                <span> E£5,799.96</span>
              </p>
              <hr />
              <p className=" d-flex justify-content-between">
                <strong>Total:</strong>
                <span>E£5,799.96</span>
              </p>
              <small className="form-text text-muted my-3">
                By completing your purchase you agree to these <a href="#">Terms of Service</a>.
              </small>
            
   <button type='submit' className='w-100 btn  btn-primary btn-lg ' > Complete Checkout</button>
   <p className="mt-2 text-center">30-Day Money-Back Guarantee</p>



         </div>
        </div>
 


      </div>
    </div>
  );
}
