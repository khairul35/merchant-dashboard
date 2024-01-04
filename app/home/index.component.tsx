import { HomeProps } from "./index.prop";
import styles from './index.module.css';
import OrganizationOverview from './organization-overview';
import Wallet from './wallet-balance';
import AggregationWalletSummary from "./agrregation-wallet-summary";
import TransactionTotal from "./financial-summary/transaction-total";
import OfTransaction from "./financial-summary/#-of-transaction";

const Component = (props: HomeProps) => {
    const {
        name,
        organizationOverview,
        wallets,
        aggregationWalletSummary,
        transactionTotal,
        financialFilter,
        ofTransaction,
        setFinancialFilter,
    } = props;

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
                        <button
                            className={financialFilter == '7D' ? styles.selectedFilterButton : styles.filterButton}
                            onClick={() => setFinancialFilter('7D')}
                        >
                            7D
                        </button>
                        <button
                            className={financialFilter == 'D' ? styles.selectedFilterButton : styles.filterButton}
                            onClick={() => setFinancialFilter('D')}
                        >
                            D
                        </button>
                        <button
                            className={financialFilter == 'M' ? styles.selectedFilterButton : styles.filterButton}
                            onClick={() => setFinancialFilter('M')}
                        >
                            M
                        </button>
                        <button
                            className={financialFilter == 'MTD' ? styles.selectedFilterButton : styles.filterButton}
                            onClick={() => setFinancialFilter('MTD')}
                        >
                            MTD
                        </button>
                        <button
                            className={financialFilter == 'YTD' ? styles.selectedFilterButton : styles.filterButton}
                            onClick={() => setFinancialFilter('YTD')}
                        >
                            YTD
                        </button>
                        <button
                            className={financialFilter == '1Y' ? styles.selectedFilterButton : styles.filterButton}
                            onClick={() => setFinancialFilter('1Y')}
                        >
                            1Y
                        </button>
                        <button
                            className={financialFilter == 'ALL' ? styles.selectedFilterButton : styles.filterButton}
                            onClick={() => setFinancialFilter('ALL')}
                        >
                            ALL
                        </button>
                    </div>
                </div>
                <TransactionTotal {...transactionTotal}/>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="p-4">
                        <OfTransaction {...ofTransaction} />
                    </div>
                    <div className="p-4">
                        <OfTransaction {...ofTransaction} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Component;
