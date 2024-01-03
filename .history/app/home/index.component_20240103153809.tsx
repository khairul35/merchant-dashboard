import { HomeProps } from "./index.prop";

const Component = (props: HomeProps) => {
    const { name } = props;

    return (
        <div>
            <div className="p-2">
                <h2 className="font-semibold text-2xl border-b border-y-black">Hi { name }</h2>
            </div>
        </div>
    )
};

export default Component;
