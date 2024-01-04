import Card from "@/app/components/card";
import { ComponentProps } from "./index.prop";
import { formatNumberToComma } from "@/utils/formatNumberToComma";

const Component = (props: ComponentProps) => {
    const { out, ins } = props;
    return (
        <div>
            <Card>
                <div className="p-4 font-medium"># of Transactions</div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="p-4">
                        <div>In</div>
                        <b>{formatNumberToComma(ins)}</b>
                    </div>
                    <div className="p-4">
                        <div>Out</div>
                        <b>{formatNumberToComma(out)}</b>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Component;
