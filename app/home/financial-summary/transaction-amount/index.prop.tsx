import { ChartOptions } from 'chart.js';

export interface ComponentProps {
    ins: number;
    out: number;
    lineChartData: LineChartProps;
    lineChartOptions: ChartOptions;
}

export interface TransactionAmountProps {
    ins: number;
    out: number;
}

// Interface for dataset
interface Dataset {
  label: string;
  data: number[];
  fill: boolean;
  borderColor: string;
  tension: number;
}

// Interface for data
export interface LineChartProps {
  labels: string[];
  datasets: Dataset[];
}