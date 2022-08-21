import Chart, { ChartConfiguration } from 'chart.js/auto';
import { MyData } from '../data';

export const Pie = (el: string) => {
    const __data = MyData();

    const total = __data.Numbers.reduce((a, b) => a + b, 0);

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
                hoverOffset: 70 // when hovering a piece
            }
        ]
    };

    const options: ChartConfiguration['options'] = {
        layout: {
            padding: 50
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: ({ label, raw }) => {
                        const percentage = (+raw / total) * 100;
                        return `${label}: ${percentage.toFixed(1)}%`;
                    }
                }
            },
        }
    };

    const config: ChartConfiguration = {
        type: 'pie',
        data,
        options
    };

    new Chart(ctx, config);
};
