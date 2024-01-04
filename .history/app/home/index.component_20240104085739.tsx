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
            <div className={styles.financialSummaryContainer}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 font-medium">Financial Summary</div>
                    <div className="p-4 font-light text-xs flex justify-end items-center ">
                        <button className={styles.filterButton}>7D</button>
                        <button className={styles.filterButton}>D</button>
                        <button className={styles.filterButton}>M</button>
                        <button className={styles.filterButton}>MTD</button>
                        <button className={styles.filterButton}>YTD</button>
                        <button className={styles.filterButton}>1Y</button>
                        <button className={styles.filterButton}>ALL</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Component;
