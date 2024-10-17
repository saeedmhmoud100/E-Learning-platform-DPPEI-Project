import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../hooks/myToken';
import usePostData from '../../ApiHooks/usePostData';
import { errorNotification } from '../../hooks/Notification';
import Joi, { valid } from 'joi';
import { getUserData } from '../../store/actions/userActions';

export default function Login({fetchData}) {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        email : '',
        password : ''
    })
    const {error, token} = useSelector(state=>state.user)

    const navigate = useNavigate();

    //JOI FUNCTION
    function validation(data){
        let schema = Joi.object({
            email : Joi.alternatives().try(
                Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
                Joi.string().pattern(new RegExp('[a-zA-Z0-9]{3,30}'))
            ).required().messages({
                'string.empty':'Email required',
            }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9@+$#]{3,30}$')).required().messages({
                'string.empty':'Password required',
            }),
        })
        return schema.validate(data, {abortEarly: false})
    }

    // STORE USER DATA INPUT
    function getData(e){
        let data = {...userData};
        data[e.target.name] = e.target.value;
        setUserData(data)
    }

  //HANDLE FORM SUBMIT FUNCTION
  function handleSubmit(e){
    e.preventDefault();
    if(validation(userData).error){
        for(let err of validation(userData).error.details){
            errorNotification(err.message);
        }
    }else{
        dispatch(getUserData(userData));
    }
  }

  // STORING TOKEN IN LOCAL STORAGE ONCE RETURNED, OR DISPLAYING ERROR IF EXISTS
  useEffect(()=>{
    if(!token & !error){
        return
    }else{
        if(error){
            errorNotification(error?.response?.data?.detail);
        }else{
            setToken(token);
            fetchData();
            navigate('/')
        }
    }
  },[token, error])


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
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={getData}/>
                            <label for="floatingInput">Username/Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com" name='password' onChange={getData}/>
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
      </>
  )
}

