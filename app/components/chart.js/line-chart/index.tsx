import '../RegisterChart';
import { Line } from "react-chartjs-2";
import { LineChartProps } from "./index.props";

const LineChart = (props: LineChartProps) => {
    const { data } = props;
    return (<Line data={data} />)
}

export default LineChart;
