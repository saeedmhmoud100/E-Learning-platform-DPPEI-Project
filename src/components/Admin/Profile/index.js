import './style.css'
import {ProfileCard} from "./ProfileCard";
import {useEffect, useState} from "react";
import {PieChart} from "../../Charts/PieChart";
import {PolarChart} from "../../Charts/PolarChart";
import {LineChart} from "../../Charts/LineChart";

export const Profile = () => {

    const [ProfileData, setProfileData] = useState([])
    const [pieChartData, setPieChartData] = useState({})
    const [polarChartData, setPolarChartData] = useState({})
    const [lineChartData, setLineChartData] = useState({})
    useEffect(() => {
        fetch('/data/admin/profile.json')
            .then(response => response.json())
            .then(data => {
                setProfileData(data)
            })

        fetch('/data/admin/pieChartData.json')
            .then(response => response.json())
            .then(data => {
                setPieChartData(data)
            })

        fetch('/data/admin/polarChartData.json')
            .then(response => response.json())
            .then(data => {
                setPolarChartData(data)
            })

        fetch('/data/admin/lineChartData.json')
            .then(response => response.json())
            .then(data => {
                setLineChartData(data)
            })

    },[])

    return (
        <div className='row g-3'>

            {ProfileData?.map((item, index) => (
                <div key={index} className="col-lg-6 col-12 text-white">
                    <ProfileCard data={item.data} title={item.title} backgroundColor={item.bgColor}/>
                </div>
                ))
            }


            <h2 className='mt-5'>Material Analysis</h2>
            <div className="col-6">

                <PieChart data={pieChartData}/>
            </div>
            <div className="col-6">
                <PolarChart data={polarChartData}/>
            </div>

            <h3 className=' mt-5'>Revenue Analysis</h3>
            <div className="col-12">
                <LineChart data={lineChartData} />
            </div>
        </div>
    )
}
