import { ChartOptions } from 'chart.js';

export interface ComponentProps {
    received: number;
    lineChartData: LineChartProps;
    lineChartOptions: ChartOptions;
}

export interface CommisionGraphProps {
    received: number;
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