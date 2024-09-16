import React, {useRef, useState} from "react";
import axios from "axios";

export default function AddCourseForm() {
    let [courses, setCourses] = useState([]);
    let inputCourseName = useRef();
    let inputImgPath = useRef();
    let inputCourseDesc = useRef();
    let inputCoursePrice = useRef();
    let inputInstructorName = useRef();


    function submitionHandler(e) {
        e.preventDefault();

        const courseName = inputCourseName.current.value;
        const imgPath = inputImgPath.current.value
        const courseDesc = inputCourseDesc.current.value;
        const coursePrice = inputCoursePrice.current.value;
        const instructorName = inputInstructorName.current.value;
        let course = {
            courseName,
            instructorName,
            courseDesc,
            coursePrice,
            imgPath,
        };

        setCourses([...courses, course]);
        axios
            .post(
                "https://66d94dfd4ad2f6b8ed541bee.mockapi.io/app/courses/form",
                course
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });

        inputCourseName.current.value = '';
        inputCourseDesc.current.value = '';
        inputCoursePrice.current.value = '';
        inputInstructorName.current.value = '';
        inputImgPath.current.value = '';
    }

    return (
        <>
            <div className="w-75 mx-auto">
                <form className="mt-4" onSubmit={submitionHandler}>
                    <label className="form-lable" htmlFor="">
                        Course Name
                    </label>
                    <input className="form-control" ref={inputCourseName} type="text"/>
                    <label className="form-lable" htmlFor="">
                        Instructor Name
                    </label>
                    <input
                        className="form-control"
                        ref={inputInstructorName}
                        type="text"
                    />
                    <label className="form-lable" htmlFor="">
                        Course Description
                    </label>
                    <input className="form-control" ref={inputCourseDesc} type="text"/>
                    <label className="form-lable" htmlFor="">
                        Course Price
                    </label>
                    <input className="form-control" ref={inputCoursePrice} type="text"/>
                    <label className="form-lable" htmlFor="">
                        Img Path
                    </label>
                    <input className="form-control" ref={inputImgPath} type="text"/>
                    <button className="btn btn-outline-success mt-3">Submite</button>
                </form>
            </div>
        </>
    );
}

    
    