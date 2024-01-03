import { HomeProps } from "./index.prop";
import styles from './index.module.css';
import OrganizationOverview from './organization-overview';
import Wallet from './wallet-balance';


const Component = (props: HomeProps) => {
    const { name, organizationOverview, wallets } = props;

    return (
        <div>
            <div className="p-2">
                <h2 className="font-semibold text-2xl pb-5 border-b-2 border-y-gray-300">Hi { name }</h2>
            </div>
            <OrganizationOverview {...organizationOverview} />
            <Wallet {...wallets} />
        </div>
    )
};

export default Component;
