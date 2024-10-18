import myVideo from "../../images/video1.mp4";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getLecture} from "../../../../store/actions/lecturesAction";


export default function Video() {
    const {lecture_id,section_id} = useParams();
    const dispatch = useDispatch();
    const {sections} = useSelector(state => state.sections)
    const [lecture,setLecture] = useState(null)

    useEffect(() => {
        let lecture_data=null;
            sections?.results?.map(section => {
                if(section.id == section_id){
                    section.lectures.map(lecture => {
                        if(lecture.id == lecture_id){

                            lecture_data = lecture
                        }
                    })
                }
            })
        if(lecture_data){
            setLecture(lecture_data)
        }else{
            setLecture(null)
        }


    }, [lecture_id])
    const embedUrl = lecture?.video_url.replace('watch?v=', 'embed/');
    return(
        <>
            {
                lecture ?
                    <iframe className='w-100'  height="400" src={embedUrl}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    :<video className=" mt-2 w-100" controls src={myVideo}></video>



            }
            </>
    )
}