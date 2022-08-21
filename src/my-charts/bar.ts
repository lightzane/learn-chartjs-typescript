import Chart, { ChartConfiguration } from 'chart.js/auto';
import { MyData } from '../data';

export const Bar = (el: string) => {
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
                hoverOffset: 70
            }
        ]
    };

    const options: ChartConfiguration['options'] = {
        plugins: {
            legend: {
                display: false
            }
        }
    };

    const config: ChartConfiguration = {
        type: 'bar',
        data,
        options
    };

    new Chart(ctx, config);
};
