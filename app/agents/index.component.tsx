import Table from "../components/table";
import { ComponentProps } from "./index.prop";

const Component = (props: ComponentProps) => {
    return (
        <>
            <h1 className="text-3xl">Under Construction</h1>
            <Table {...props} />
        </>
    );
};

export default Component;
