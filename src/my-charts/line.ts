import Chart, { ChartConfiguration } from 'chart.js/auto';
import { MyData } from '../data';

export const Line = (el: string) => {
    const __data = MyData();

    const canvas = document.getElementById(el) as HTMLCanvasElement;

    const ctx = canvas.getContext('2d');

    const data: ChartConfiguration['data'] = {
        labels: __data.Labels,
        datasets: [
            {
                label: 'First Dataset',
                data: __data.Numbers,
                backgroundColor: __data.Colors,
                // borderColor: 'rgba(85, 239, 196, 1.0)',
                offset: 5,
                fill: true,
                radius: 5, // size of the point
                hoverRadius: 30, // size of points when hovered
                hitRadius: 500, // triggers hover at range x hitRadius near the point
                // tension: 0.5 // to make line-graph curve
            }
        ]
    };

    const options: ChartConfiguration['options'] = {
        scales: {
            yAxes: {
                beginAtZero: true,
                max: 100
            }
        }
    };

    const config: ChartConfiguration = {
        type: 'line',
        data,
        options
    };

    new Chart(ctx, config);
};
