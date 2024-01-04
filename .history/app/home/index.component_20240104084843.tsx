import { HomeProps } from "./index.prop";
import styles from './index.module.css';
import OrganizationOverview from './organization-overview';
import Wallet from './wallet-balance';
import AggregationWalletSummary from "./agrregation-wallet-summary";


const Component = (props: HomeProps) => {
    const { name, organizationOverview, wallets, aggregationWalletSummary } = props;

    return (
        <div>
            <div className="p-2">
                <h2 className="font-semibold text-2xl pb-5 border-b-2 border-y-gray-300">Hi { name }</h2>
            </div>
            <OrganizationOverview {...organizationOverview} />
            <Wallet {...wallets} />
            <AggregationWalletSummary {...aggregationWalletSummary} />
            <div className="divider"></div>
            <div className={styles.financialSummaryContainer}></div>
        </div>
    )
};

export default Component;
