import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import './Register.css'

export default function Register() {
  return (
      <>
      <div className='container p-5 my-5'>
        <div className="row">
            <div className="col-lg-6 px-3">
                <div className="w-100 h-100">
                    <div className="w-100 h-100">
                        <img src="/images/register-photo.png" alt="" className='w-100 h-100'/>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center px-3">
                <div className="w-100">
                    <h1 className='py-4 text-center fw-bold'>Register</h1>
                    <form action="">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Full name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Password</label>
                        </div>
                        <button className='sign-btn-style mb-3'>Sign up</button>
                    </form>
                    <span className=''>Already have an account? <Link to='/login' className='btn-custom-style'><u>Login</u></Link></span> 
                </div>
            </div>
        </div>

        
        </div>
        <Footer />
      </>
    
  )
}

