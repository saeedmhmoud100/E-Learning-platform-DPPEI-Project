import {Bar} from "react-chartjs-2";
import {useEffect, useState} from "react";
import {
    BarElement,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Tooltip
} from "chart.js";


ChartJS.register(LinearScale, Tooltip, Legend,BarElement);


export const BarChart = ({data}) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    })


    useEffect(() => {
        setChartData(data)
    }, [data])
    return (
        <>
            <Bar
                data={chartData}
            />
        </>
    )
}
