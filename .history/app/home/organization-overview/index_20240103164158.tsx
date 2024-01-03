import Component from "./index.component";
import { OrganizationOverviewProps } from "./index.prop";

const Home = (props: OrganizationOverviewProps) => {
    const { totalAgents, totalMerchants, totalUsers } = props;

    const organizationOverviewProps: OrganizationOverviewProps = {
        totalAgents,
        totalMerchants,
        totalUsers,
    }
    return (<Component {...organizationOverviewProps} />)
};

export default Home;
