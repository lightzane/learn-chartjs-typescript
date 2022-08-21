# learn chartjs typescript

![](https://img.shields.io/badge/chart.js-3.9.1-orange)

Create [Chart.js](https://www.chartjs.org) using [Typescript](https://www.typescriptlang.org) with [Webpack](https://webpack.js.org)

```
npm i chart.js
```

**Pie sample**

```ts
import Chart, { ChartConfiguration } from 'chart.js/auto';

const ctx = document.getElementById('canvas').getContext('2d');

const data: ChartConfiguration['data'] = {
  labels: ['Water', 'Earth', 'Fire', 'Air'],
  datasets: [
    {
      label: 'First Dataset',
      data: [20, 40, 30, 10],
      backgroundColor: ['blue', 'green', 'red', 'cyan'],
      // borderColor: 'rgba(85, 239, 196, 1.0)',
      offset: 5,
      hoverOffset: 7, // when hovering a piece
    },
  ],
};

const options: ChartConfiguration['options'] = {
  layout: {
    padding: 50,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: ({ label, raw }) => {
          const percentage = (+raw / total) * 100;
          return `${label}: ${percentage.toFixed(1)}%`;
        },
      },
    },
  },
};

const config: ChartConfiguration = {
  type: 'pie',
  data,
  options,
};

new Chart(ctx, config);
```

See more at `src/my-charts`
