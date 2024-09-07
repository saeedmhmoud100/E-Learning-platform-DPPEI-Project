import React from 'react'
import { Link } from 'react-router-dom'

export default function CheckoutSummary() {
  return (
   <>  <div className="priceDetails d-flex flex-column  ">
   <p className='text-secondary'> Total:</p>          
   <b className='fs-3 '>E£849.98</b>  {/* Current price */}
   <del  className='text-secondary'>E£4,199.98</del>
   <p>80% off</p>
   <button type='submit' className='w-100 btn  btn-primary btn-lg '>Checkout</button>
   <hr />
   <div className="promotions">
    <b className='fs-6'>Promotions</b>
    <div className="card border-dashed mb-4">
          <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
          <div>
      <p className="fw-bold mb-1">Extra 15% off <span className="fw-normal">courses</span></p>
      <p className="text-muted mb-0">BONUS15SEP</p>
         </div>
         <a href="#" className="text-primary fw-bold">Apply</a>
      </div>
     </div>
    </div>
    <div className="input-group">
<input type="text" className="form-control" placeholder="Enter Coupon" aria-label="Enter Coupon"/>
<button className="btn text-white btn-primary" type="button">Apply</button>
</div>


   </div>

    </div>
   </>
  )
}
