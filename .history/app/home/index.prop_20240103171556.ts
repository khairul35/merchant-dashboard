import { OrganizationOverviewProps } from "./organization-overview/index.prop";
import { WalletProps } from "./wallet-balance/index.prop";

export interface HomeProps {
    name: string;
    organizationOverview: OrganizationOverviewProps;
    wallets: WalletProps
}
