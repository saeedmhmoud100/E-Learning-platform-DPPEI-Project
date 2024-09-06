import {Bar} from "react-chartjs-2";
import {useEffect, useState} from "react";

export const BarChart = ({data}) => {
    const [chartData, setChartData] = useState({

    })


    useEffect(() => {
        setChartData(data)
    },[data])

    return (
        <>
                <Bar
                    data={chartData}
                />
        </>
    )
}
