export const LearningTools = () => {
    return (
        <div className='container mt-5'>
            <h3 className='fw-bold'>
                Learning reminders
            </h3>
            <h4 className='fw-bold mt-4'>
                Calendar events
            </h4>

            <p className='my-0' style={{fontSize:"16px"}}>
                Learning a little each day adds up. Research shows that students who make learning a habit are more
                likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.
            </p>
            <p className=' fw-light my-0' style={{fontSize:"12px"}}>
                Requires Google Calendar, Apple Calendar, or Outlook
            </p>

            <button className='btn btn-dark rounded-0 py-2 px-4 my-4 d-flex align-items-center'>
                Schedule learning time <span className="text-dark bg-white rounded-circle d-inline-block ms-2" style={{width:'17px',height:"17px",lineHeight:"17px"}}>+</span>
            </button>



            <h4 className='fw-bold mt-4'>
                Push notifications
            </h4>

            <p className='my-0' style={{fontSize:"16px"}}>
                Don’t want to schedule time blocks? Set a learning reminder to get push notifications from the Udemy mobile app.
            </p>

            <form className='mt-5'>
                <p className='fs-6 fw-bold my-0'>Text me a link to download the app</p>
                <select className='form-select'>
                    <option value='+1'> +1 (United State)</option>
                    <option value='+91'> +91 (India)</option>
                    <option value='+44'> +44 (United Kingdom)</option>
                    <option value='+61'> +61 (Australia)</option>
                </select>
                <input type='text' className='form-control my-3' placeholder='Phone number'/>
                <button type='submit' className='btn btn-dark rounded-0 py-2 px-4'>Send link</button>
            </form>

            <p className='fs-6 fw-light mt-1 mb-5' style={{fontSize:"10px !important"}}>
                By providing your phone number, you agree to receive a one-time automated text message with a link to get app. Standard messaging rates may apply.
            </p>
        </div>
    )
}
