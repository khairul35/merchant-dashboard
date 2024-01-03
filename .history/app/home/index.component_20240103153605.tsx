import { HomeProps } from "./index.prop";

const Component = (props: HomeProps) => {
    const { name } = props;

    return (
        <div>
            <div>
                <h2 className="font-semibold text-xl">Hi { name }</h2>
            </div>
        </div>
    )
};

export default Component;
