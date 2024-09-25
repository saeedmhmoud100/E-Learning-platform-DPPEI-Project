function HelpSupport() {
    return ( <div className="container my-5">
        <h1>Help and Support</h1>
        <div className="row my-3 g-4 justify-content-center">
            <div className="col-md-4">
                <label className="form-label fs-4" htmlFor="name">Name:</label>
                <input className="form-control" type="text" id="name" name="name" placeholder="Enter your name"/>
            </div>
            <div className="col-md-4">
                <label className="form-label fs-4" htmlFor="name">Email:</label>
                <input className="form-control" type="email" id="email" name="email" placeholder="Enter your email"/>
            </div>
            <div className="col-md-8">
                <label className="form-label fs-4" htmlFor="problem">Problem:</label>
                <textarea className="form-control" name="problem" id="problem" rows="10"></textarea>
            </div>
            <div className="sendBtn w-75 d-flex justify-content-end">
                <button className="btn">Send</button>
            </div>
        </div>
    </div> );
}

export default HelpSupport;