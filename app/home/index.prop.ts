import { AggregationWalletSummaryProps } from "./agrregation-wallet-summary/index.prop";
import { OfTransactionProps } from "./financial-summary/#-of-transaction/index.prop";
import { TransactionTotalProps } from "./financial-summary/transaction-total/index.prop";
import { OrganizationOverviewProps } from "./organization-overview/index.prop";
import { WalletProps } from "./wallet-balance/index.prop";

export interface HomeProps {
    name: string;
    organizationOverview: OrganizationOverviewProps;
    wallets: WalletProps;
    aggregationWalletSummary: AggregationWalletSummaryProps;
    financialFilter: string;
    transactionTotal: TransactionTotalProps;
    ofTransaction: OfTransactionProps;
    setFinancialFilter: (filter: string) => void;
}
