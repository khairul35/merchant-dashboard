import { AggregationWalletSummaryProps } from "./agrregation-wallet-summary/index.prop";
import { OfTransactionProps } from "./financial-summary/#-of-transaction/index.prop";
import { CommisionGraphProps } from "./financial-summary/commision-graph/index.prop";
import { CommisionProps } from "./financial-summary/commision/index.prop";
import { FeesSpentGraphProps } from "./financial-summary/fees-spent-graph/index.prop";
import { FeesSpentProps } from "./financial-summary/fees-spent/index.prop";
import { TransactionAmountProps } from "./financial-summary/transaction-amount/index.prop";
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
    transactionAmount: TransactionAmountProps;
    commision: CommisionProps;
    feesSpent: FeesSpentProps;
    commisionGraph: CommisionGraphProps;
    feesSpentGraph: FeesSpentGraphProps;
    setFinancialFilter: (filter: string) => void;
}
