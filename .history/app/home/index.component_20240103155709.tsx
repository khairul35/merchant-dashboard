import Card from "../components/card";
import { HomeProps } from "./index.prop";

const Component = (props: HomeProps) => {
    const { name } = props;

    return (
        <div>
            <div className="p-2">
                <h2 className="font-semibold text-2xl pb-5 border-b-2 border-y-gray-300">Hi { name }</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 font-medium">Organization Overview</div>
                <div className="p-4 font-light text-xs flex justify-end items-center ">Last Updated: 12/22/2023 15:05</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                <div className="bg-blue-200 p-4">
                    <Card>
                        Column 1
                    </Card>
                </div>
                <div className="bg-green-200 p-4">
                    <Card>
                        Column 2
                    </Card>
                </div>
                <div className="bg-yellow-200 p-4">
                    <Card>
                        Column 3
                    </Card>
                </div>
            </div>

        </div>
    )
};

export default Component;