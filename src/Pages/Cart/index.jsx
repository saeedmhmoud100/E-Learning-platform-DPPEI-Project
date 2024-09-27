import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import CourseItem from './components/CourseItem'
import CheckoutSummary from './components/CheckoutSummary'

export default function Cart(){

  // const [CartCourses, setCartCourses] = useState(
  //   [
  //     {
  //       id: 1,
  //       name: "Typescript: The Complete Developer's Guide",
  //       price: 2499.99,
  //       quantity: 1,
  //     },
  //     {
  //       id: 2,
  //       name: "Modern React with Redux [2024 Update]",
  //       price: 1699.99,
  //       quantity: 1,
  //     },
  //   ]
  // );

  return (
   
//MAIN FUNCTIONALITIES OF THIS PAGE
//1)1. Display Cart Items
//2)Remove Items from Cart
//3)Calculate Total Price
//4) Proceed to Checkout


    <div className="container my-5">
      <div className="cart text-dark">
            <h1>Shopping Cart</h1>
            <h6>1 Course in Cart</h6>
            <hr />
      <div className="row my-5 g-3">      
   <div className="col-lg-9 col-sm-12">

          <CourseItem />
          <CourseItem/>
          <CourseItem/>
    </div>          
   <div className="col-lg-3 col-sm-12 ">
           <CheckoutSummary />
  </div>
  
           
       
            </div>

          </div>
        </div>
     
 
  )
}




// // Main Cart Component
// const Cart = () => {
//   // Sample data (replace with actual data or fetch from API)
//   const courses = [
//     {
//       title: "Typescript: The Complete Developer's Guide",
//       instructor: "Stephen Grider",
//       image: "course-image-1.jpg",
//       rating: 4.6,
//       price: 2499.99,
//     },
//     {
//       title: "Modern React with Redux [2024 Update]",
//       instructor: "Stephen Grider",
//       image: "course-image-2.jpg",
//       rating: 4.7,
//       price: 1699.99,
//     },
//   ];

//   const total = courses.reduce((acc, course) => acc + course.price, 0);



