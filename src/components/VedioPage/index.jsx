    import React from "react";
    import myVideo from "./images/video1.mp4";
    import CourseSidebar from "./component/CourseSidebar";
    export default function VideoPage() {
    return (
        <>
        <div className="container-fluide">
            <div className="row ">
            <div className="col-8 ">
                <div>
                <video className=" mt-2 w-100" controls src={myVideo}></video>
                </div>
            </div>
            <div className="col-4  mt-2">
                <CourseSidebar />
                <CourseSidebar />
                <CourseSidebar />
                <CourseSidebar />
                <CourseSidebar />
                <CourseSidebar />
            </div>
            </div>
        </div>
        </>
    );
    }
