import { PolarArea } from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, RadialLinearScale, Tooltip} from 'chart.js';
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend,RadialLinearScale);

export const PolarChart = ({ data }) => {
    const [chartData, setChartData] = useState({
        labels: data.labels,
        datasets: [
            {
                label: 'Polar Area Chart',
                data:data.data,
                backgroundColor: data.backgroundColor,
                borderColor:  [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            }
        ]
    });

    useEffect(() => {
        if (data) {
            setChartData({
                labels: data.labels,
                datasets: [
                    {
                        label: 'Polar Area Chart',
                        data: data.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                        ],
                        borderColor: [
                            ...chartData.datasets[0].borderColor
                        ],
                        borderWidth: 1,
                    }
                ],
            });
        }
    }, [data]);

    return (
        <>
             <PolarArea data={chartData} />
        </>
    );
};
