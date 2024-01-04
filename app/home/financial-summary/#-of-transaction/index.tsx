import Component from "./index.component";
import { ComponentProps, LineChartProps, OfTransactionProps } from "./index.prop";
import { ChartOptions } from 'chart.js';

const OfTransaction = (props: OfTransactionProps) => {
    const { ins, out } = props;

    const lineChartData: LineChartProps = {
        labels: ['1/1/24', '1/2/24', '1/3/24', '1/4/24', '1/5/24', '1/6/24', '1/7/24'],
        datasets: [
            {
            label: 'In',
            data: [650, 590, 1080, 1081, 1256, 1355, 1400],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            },
            {
            label: 'Out',
            data: [30, 45, 50, 60, 65, 70, 80],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
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
        ins,
        out,
        lineChartOptions,
        lineChartData,
    }

    return (<Component {...componentProps} />);
};

export default OfTransaction;
