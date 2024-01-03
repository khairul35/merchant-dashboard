export interface HomeProps {
    name: string;
    organizationOverview: OrganizationOverviewProps;
    wallets: WalletProps
}

export interface OrganizationOverviewProps {
    totalAgents: number;
    totalMerchants: number;
    totalUsers: number;
};

export interface WalletProps {
    aggregateWallet: number;
    commisionWallet: number;
    BNBVault: number;
}
