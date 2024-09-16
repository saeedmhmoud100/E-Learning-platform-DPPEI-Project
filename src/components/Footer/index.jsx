import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

export default function Footer() {
  return (
    <div className='bg-dark text-white p-5'>
      <div className="container-fluid">
        <div className="row">

          <div className="col-6">
            <div className="">
              <h1>About Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, amet.</p>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex align-items-center flex-column">

              <div className="">
                <h1>Useful Links</h1>
                <ul>
                  <li className='.list-style-none'><Link to="/" className='text-white text-decoration-none'>Home</Link></li>
                  <li className='.list-style-none'><Link to="/courses" className='text-white text-decoration-none'>Courses</Link></li>
                  <li className='.list-style-none'><Link to="/profile" className='text-white text-decoration-none'>Profile</Link></li>
                </ul>
              </div>

              <div className="">
                <h1>Contact Us</h1>

                <ul>
                  <li className='.list-style-none'><Link to="/help-and-support" className='text-white text-decoration-none'>Support</Link></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="text-white d-flex justify-content-between align-items-center">
        <h1>EduVerse</h1>
        <span>©2024 Copyright</span>
      </div>
    </div>
  )
}
