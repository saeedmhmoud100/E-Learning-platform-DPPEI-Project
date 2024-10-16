import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import CourseItem from './components/CourseItem'
import CheckoutSummary from './components/CheckoutSummary'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../store/actions/cartAction.js'
import GeneralLoading from '../../components/Loading/GeneralLoading/GeneralLoading.jsx'
export default function Cart(){

  const {cart,loading}=useSelector(state => state.cart);
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getCart());
 
},[])
const CartCourses = [...(cart?.cart_items || [])];


  return (
    

    (loading ) ? (
      <GeneralLoading />
    ) :

    <div className="container my-5">
      <div className="cart text-dark">
            <h1>Shopping Cart</h1>
            <h6>{cart?.items_count} Courses in Cart</h6>
            <hr />
      <div className="row my-5 g-3">      
   <div className="col-lg-9 col-sm-12">

   {
    CartCourses?.length > 0 ? (
      CartCourses.map((course, index) => (
        <CourseItem key={index} course={course} />
      ))
    ) : (
      <div className="text-center">
        <h4>No Courses in Cart</h4>
        <Link to="/courses" className="btn btn-primary">Continue Shopping</Link>
      </div>
    )
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


