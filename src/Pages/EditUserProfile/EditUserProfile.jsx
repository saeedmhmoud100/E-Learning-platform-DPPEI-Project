import { useState } from 'react';
import './style.css'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
function EditUserProfile() {
    const [phone, setPhone] = useState('');
    return (<div className="container my-5">
        <div className="row my-5 justify-content-center">
            <div className="col-md-8 bg-white p-5 d-flex flex-column my-3">
                <h1 className="mb-4">Edit Profile</h1>
                <div className='border h-50 d-flex flex-column align-items-center justify-content-center'>
                    <div className="img h-75">
                        <img src="/images/pfp.png" alt="user picture" className='h-100' />
                    </div>
                    <div className="uploadImg w-50">
                        <input class="form-control" type="file" id="formFile" />
                    </div>
                </div>
                <div className="row mt-4 g-4">
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="first">First Name:</label>
                        <input className='form-control' type="text" id='first' value={'John'} />
                    </div>
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="last">Last Name:</label>
                        <input className='form-control' type="text" id='last' value={'Doe'} />
                    </div>
                    <div className="col-md-6">
                        <label className='form-label' htmlFor="email">Email Address:</label>
                        <input className='form-control' type="text" id='email' value={'johndoe@gmail.com'} />
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
                    <textarea className='form-control' rows={5} id='bio' value={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolorum consequuntur aliquid architecto culpa beatae.'} />
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