import {Pie} from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import {useEffect, useState} from "react";


ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({data:{labels,data,backgroundColor}}) => {
    const [chartData, setChartData] = useState({
        labels: labels,
        datasets: [
            {
                label: 'Pie Chart',
                data: data,
                backgroundColor: backgroundColor,
            }
        ],
    })

    useEffect(() => {
        setChartData({
            labels: labels,
            datasets: [
                {
                    label: 'Pie Chart',
                    data: data,
                    backgroundColor: backgroundColor,
                }
            ],
        })
    }, [labels,data,backgroundColor])


    return (
        <>
            {
                <Pie data={chartData}/>
            }
        </>
    )
}
