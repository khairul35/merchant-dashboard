import Component from "./index.component";
import { ComponentProps, FeesSpentGraphProps, LineChartProps } from "./index.prop";
import { ChartOptions } from 'chart.js';

const FeesSpentGraph = (props: FeesSpentGraphProps) => {
    const { bnb } = props;

    const lineChartData: LineChartProps = {
        labels: ['1/1/24', '1/2/24', '1/3/24', '1/4/24', '1/5/24', '1/6/24', '1/7/24'],
        datasets: [
            {
                label: 'BNB',
                data: [650, 590, 1080, 1081, 1256, 1355, 1400],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };
    
    const lineChartOptions: ChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
        scales: {
            x: {
                type: 'category',
            },
        },
    };

    const componentProps: ComponentProps = {
        bnb,
        lineChartOptions,
        lineChartData,
    }

    return (<Component {...componentProps} />);
};

export default FeesSpentGraph;
