import { ChartOptions } from 'chart.js';

export interface ComponentProps {
    bnb: number;
    lineChartData: LineChartProps;
    lineChartOptions: ChartOptions;
}

export interface FeesSpentGraphProps {
    bnb: number;
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