import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function CheckoutSummary({totalPrice,itemscount}) {
  const navigate= useNavigate();
  const handleCheckoutClick = () => {
   navigate("/checkout");  // Navigate to the checkout page
 };

  return (
   <>  <div className="priceDetails d-flex flex-column  ">
    
   <p className='text-secondary fs-5'> Total:</p>          
   <b className='fs-3 my-1'>{totalPrice}</b>  {/* Total price */}
   
   <button type='submit' className='w-100 btn  btn-primary btn-lg ' onClick={ handleCheckoutClick}>Checkout</button>
   <hr />
  

    </div>
   </>
  )
}
