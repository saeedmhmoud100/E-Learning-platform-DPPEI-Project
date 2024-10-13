import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import CourseItem from './components/CourseItem'
import CheckoutSummary from './components/CheckoutSummary'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../store/actions/cartAction.js'

export default function Cart(){

  const {cart}=useSelector(state => state.cart);
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getCart());
 
},[])
const CartCourses = [...(cart?.cart_items || [])];


  return (

    <div className="container my-5">
      <div className="cart text-dark">
            <h1>Shopping Cart</h1>
            <h6>{cart?.items_count} Courses in Cart</h6>
            <hr />
      <div className="row my-5 g-3">      
   <div className="col-lg-9 col-sm-12">

   {
    CartCourses?.map((cartcourse,i)=>(
   <CourseItem cartcourse={cartcourse} key={i}/>
    ))
  }
       
         
    </div>          
   <div className="col-lg-3 col-sm-12 ">
           <CheckoutSummary totalPrice={cart?.total_price} itemscount={cart?.items_count} />
  </div>
      
       
            </div>

          </div>
        </div>
     
 
  )
}


