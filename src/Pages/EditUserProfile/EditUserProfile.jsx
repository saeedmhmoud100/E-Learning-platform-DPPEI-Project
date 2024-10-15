import { useEffect, useState } from 'react';
import './style.css'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileData } from '../../store/actions/profileAction';
import { getLoggedUserData } from '../../store/actions/userActions';
function EditUserProfile() {
    const [phone, setPhone] = useState('');

    const {userData,loading} = useSelector((state)=>state.user);

    return (<div className="container my-5">
        <div className="row my-5 justify-content-center">
            <div className="col-md-8 bg-white p-5 d-flex flex-column my-3">
                <h1 className="mb-4">Edit Profile</h1>
                <div className='border h-50 d-flex flex-column align-items-center justify-content-center'>
                    <div className="img h-100 w-50 bg-primary rounded-pill my-5">
                        <img src={userData.profile_image} alt="user picture" className='h-100 w-100 rounded-pill' />
                    </div>
                    <div className="uploadImg w-50 mb-5">
                        <input class="form-control" type="file" id="formFile" />
                    </div>
                </div>
                <div className="row mt-4 g-4">
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="first">User Name:</label>
                        <input className='form-control' type="text" id='first' value={userData.userName} />
                    </div>
                    {/* <div className="col-md-6">
                        <label className='form-label' htmlFor="last">Last Name:</label>
                        <input className='form-control' type="text" id='last' value={'Doe'} />
                    </div> */}
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="email">Email Address:</label>
                        <input className='form-control' type="text" id='email' value={userData.email} />
                    </div>
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="birth">Birth Date:</label>
                        <input className='form-control' type="date" id='birth' value={'1990-09-20'} />
                    </div>
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="phone">Phone Number:</label>
                        <PhoneInput
                            country={'us'} // Default country code
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            inputProps={{
                                name: 'phone',
                                required: false,
                                autoFocus: false
                            }}
                            inputStyle={{
                                width: '100%',
                            }}
                        />
                    </div>
                    <div className="col-md-12">
                    <label className='form-label' htmlFor="bio">Bio:</label>
                    <textarea className='form-control' rows={5} id='bio' value={userData.description} />
                    </div>
                </div>
                <div className="safeBtn mt-5 h-25 d-flex">
                    <button className='btn'>Save</button>
                </div>
                
            </div>
            <div className="col-md-8 bg-white p-5 d-flex flex-column my-3">
                <h1 className="mb-4">Password</h1>
                <div className="row flex-column g-4">
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="old">Old Password:</label>
                        <input className='form-control' type="password" id='old' />
                    </div>
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="new">New Password:</label>
                        <input className='form-control' type="password" id='new' />
                    </div>
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="confirm">Confirm Password:</label>
                        <input className='form-control' type="password" id='confirm' />
                    </div>
                    
                </div>
                <div className="safeBtn mt-5">
                    <button className='btn'>Save</button>
                </div>
                
            </div>
            <div className="col-md-8 bg-white p-5 d-flex flex-column my-3">
                <h1 className="mb-4">Links</h1>
                <div className="row flex-column g-4">
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="linkedin">Linkedin:</label>
                        <input className='form-control' type="text" id='linkedin' placeholder='e.g.  linkedin.com/in/yourname' />

                    </div>
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="github">GitHub:</label>
                        <input className='form-control' type="text" id='github' placeholder='e.g.  github.com/yourname' />

                    </div>
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="website">Website:</label>
                        <input className='form-control' type="text" id='website' placeholder='e.g.   yourwebsite.com' />

                    </div>
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="facebook">Facebook:</label>
                        <input className='form-control' type="text" id='facebook' placeholder='e.g.   facebook.com/yourname' />

                    </div>
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="youtube">YouTube:</label>
                        <input className='form-control' type="text" id='youtube' placeholder='e.g.    youtube.com/yourname' />

                    </div>
                    
                </div>
                <div className="safeBtn mt-5">
                    <button className='btn'>Save</button>
                </div>
                
            </div>

        </div>
    </div>);
}

export default EditUserProfile;