import Card from "@/app/components/card";
import { formatMoney } from "@/utils/formatMoney";
import { ComponentProps } from "./index.prop";

const Component = (props: ComponentProps) => {
    const { received, pending } = props;
    return (
        <div>
            <Card>
                <div>
                    <span className="p-4 font-medium">Commisions </span>
                    <span className="text-xs font-light">USDT</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  text-center">
                    <div className="p-4 text-center">
                        <div>Received</div>
                        <b>{formatMoney(received, 'USD')}</b>
                    </div>
                    <div className="p-4 text-center">
                        <div>Pending</div>
                        <b>{formatMoney(pending, 'USD')}</b>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Component;
