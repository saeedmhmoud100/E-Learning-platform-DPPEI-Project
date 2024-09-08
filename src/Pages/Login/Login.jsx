import React from 'react'
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function Login() {
  //HANLDE FORM SUBMIT FUNCTION
  function handleSubmit(e){
    e.preventDefault();
  }
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
                    <h1 className='py-4 text-center fw-bold'>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Password</label>
                        </div>
                        <button type='submit' className='sign-btn-style mb-3'>Login</button>
                    </form>

                    {/* Forgot Password page? */}
                    <span className=''><Link to='' className='btn-custom-style'><u>Forgot Password?</u></Link></span> 
                </div>
            </div>
        </div>

        
        </div>
        <Footer />
      </>
  )
}

