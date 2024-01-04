// Interface for dataset
interface Dataset {
  label: string;
  data: number[];
  fill: boolean;
  borderColor: string;
  tension: number;
}

// Interface for data
export interface Data {
  labels: string[];
  datasets: Dataset[];
}

export interface LineChartProps {
    data: Data
}
