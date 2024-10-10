import Joi from 'joi';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Footer from '../../components/Footer';
import './Register.css'
import {errorNotification} from "../../hooks/Notification";
import usePostData from '../../ApiHooks/usePostData';

export default function Register({handleRegister}) {
    const navigate = useNavigate()


    //JOI FUNCTION
    function validation(data){
        let schema = Joi.object({
            username : Joi.string().pattern(new RegExp('[a-zA-Z0-9]{3,30}')).required().messages({
                'string.pattern.base': `Username should be atleast 3 alphabetical characters and atmost 30 characters`,
                'string.empty':'Username required',
            }),
            email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
                'string.pattern.base': `Email invalid`,
                'string.empty':'Email required',
            }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required().messages({
                'string.pattern.base': `Password is not strong enough`,
                'string.empty':'Password required',
            }),
        })
        return schema.validate(data, {abortEarly: false})
    }

    // COMPONENT THAT REGISTERS NEW ACCOUNT
    async function HandleUser(data){
        try{
            const response = await usePostData('auth/register/',data);
            navigate('/login')
        }catch(error){
            const emailError = error.response.data.email;
            const usernameError = error.response.data.username;
            if(emailError){
                emailError.forEach((err)=>errorNotification(err))
            }
            if(usernameError){
                usernameError.forEach((err)=>errorNotification(err))
            }
        }
    }

    //HANLDE FORM SUBMIT FUNCTION
    function handleSubmit(e){
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        if(validation(data).error){
            for(let err of validation(data).error.details){
                errorNotification(err.message)
            }
        }else{
            HandleUser(data)
        }
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
                    <h1 className='py-4 text-center fw-bold'>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" name='username'/>
                            <label for="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='email'/>
                            <label for="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" name='password'/>
                            <label for="floatingInput">Password</label>
                        </div>
                        <input
                        className="form-check-input radio-style"
                        type="radio"
                        name='flexRadioDefault'
                        id='flexRadioDefault1'
                        />
                        <label
                        className="form-check-label ms-2"
                        htmlFor='flexRadioDefault1'
                        >
                        Admin
                        </label>
                        <button type='submit' className='sign-btn-style mb-3'>Sign up</button>
                    </form>
                    <span className=''>Already have an account? <Link to='/login' className='btn-custom-style'><u>Login</u></Link></span> 
                </div>
            </div>
        </div>

        
        </div>
      </>
    
  )
}

