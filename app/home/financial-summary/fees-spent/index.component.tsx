import Card from "@/app/components/card";
import { ComponentProps } from "./index.prop";

const Component = (props: ComponentProps) => {
    const { bnb } = props;
    return (
        <div>
            <Card>
                <span className="p-4 font-medium">Fees Spent</span>
                <div className="p-4 text-center">
                    <div>BNB</div>
                    <b>{bnb.toString()}</b>
                </div>
            </Card>
        </div>
    );
};

export default Component;
