import Card from "@/app/components/card";
import styles from './index.module.css';
import { AggregationWalletSummaryProps } from "./index.prop";

const Component = (props: AggregationWalletSummaryProps) => {
    const { total, active, inactive, locked } = props;

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 font-medium">Aggregation Wallets Summary</div>
            </div>
            <Card className="m-4">
                
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4">
                    <div>Total #</div>
                </div>
                <div className="p-4">
                    <div>Active</div>
                </div>
                <div className="p-4">
                    <div>Inactive</div>
                </div>
                <div className="p-4">
                    <div>Locked</div>
                </div>
            </div>
            </Card>
        </div>
    );
};

export default Component;
