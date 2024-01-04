import Card from "@/app/components/card";
import { ComponentProps } from "./index.prop";
import LineChart from "@/app/components/chart.js/line-chart";
import { formatMoney } from "@/utils/formatMoney";

const Component = (props: ComponentProps) => {
    const { received, lineChartData } = props;
    return (
        <div>
            <Card>
                <div className="p-4 font-medium">Commision</div>
                <div className="p-4 pl-10">
                    <div>Received</div>
                    <b>{formatMoney(received, 'USD')}</b>
                </div>
                <div>
                    <LineChart data={lineChartData} />
                </div>
            </Card>
        </div>
    );
};

export default Component;
