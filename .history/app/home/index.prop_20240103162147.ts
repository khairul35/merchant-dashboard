export interface HomeProps {
    name: string;
    organizationOverview: OrganizationOverviewProps;
}

export interface OrganizationOverviewProps {
    totalAgents: number;
    totalMerchants: number;
    totalUsers: number;
};
