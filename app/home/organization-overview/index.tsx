import Component from "./index.component";
import { OrganizationOverviewProps } from "./index.prop";

const OrganizationOverview = (props: OrganizationOverviewProps) => {
    const { totalAgents, totalMerchants, totalUsers, refreshTime } = props;

    const organizationOverviewProps: OrganizationOverviewProps = {
        totalAgents,
        totalMerchants,
        totalUsers,
        refreshTime,
    }
    return (<Component {...organizationOverviewProps} />)
};

export default OrganizationOverview;
