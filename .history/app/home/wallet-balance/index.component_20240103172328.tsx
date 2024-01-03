import { WalletProps } from "./index.prop";

const Component = (props: WalletProps) => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 font-medium">Wallets Balance</div>
            </div>
        </div>
    );
};

export default Component;
