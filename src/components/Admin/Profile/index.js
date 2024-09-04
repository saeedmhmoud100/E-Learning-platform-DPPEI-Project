import './style.css'
import {ProfileCard} from "./ProfileCard";


export const Profile = () => {

    const data = [
        {
            title:'Courses Count',
            data:[
                {label:'Total', value:50},
                {label:'Last Year', value:30},
                {label:'Last Month', value:20}
            ],
            bgColor:'success',
        },
        {
            title:'Orders Count',
            data:[
                {label:'Total', value:50},
                {label:'Last Year', value:30},
                {label:'Last Month', value:20}
            ],
            bgColor:'primary',
        },
        {
            title:'Users Count',
            data:[
                {label:'Total', value:50},
                {label:'Last Year', value:30},
                {label:'Last Month', value:20}
            ],
            bgColor:'secondary',
        },
        {
            title:'Instructors Count',
            data:[
                {label:'Total', value:50},
                {label:'Last Year', value:30},
                {label:'Last Month', value:20}
            ],
            bgColor:'info',
        },
        {
            title:'Students Count',
            data:[
                {label:'Total', value:50},
                {label:'Last Year', value:30},
                {label:'Last Month', value:20}
            ],
            bgColor:'warning',
        },
        {
            title:'Categories Count',
            data:[
                {label:'Total', value:50},
                {label:'Last Year', value:30},
                {label:'Last Month', value:20}
            ],
            bgColor:'danger',
        },
        ]


    return (
        <div className='row g-3'>

            {data.map((item, index) => (
                <div key={index} className="col-lg-6 col-12 text-white">
                    <ProfileCard data={item.data} title={item.title} backgroundColor={item.bgColor}/>
                </div>
                ))
            }

        </div>
    )
}
