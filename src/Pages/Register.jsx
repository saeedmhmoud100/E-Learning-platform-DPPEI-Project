import React from 'react'

export default function Register() {
  return (
    <div className='container p-5 mt-5'>
        <div className="row">
            <div className="col-6">
                <div className="">
                    <div className="">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>

            <div className="col-6">
                <h1 className='py-4'>Register</h1>
                <div className="">
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
                        <button className='btn'>Sign up</button>
                    </form> 
                </div>
            </div>
        </div>
      
    </div>
  )
}

