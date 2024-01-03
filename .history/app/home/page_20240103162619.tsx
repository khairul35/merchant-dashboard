import Component from "./index.component";
import { HomeProps } from "./index.prop";

const Home = () => {
    const name = 'Admin';
    const organizationOverview = {
        totalAgents: 10,
        totalMerchants: 2000,
        totalUsers: 2000000
    };

    const props: HomeProps = {
        name,
        organizationOverview,
    }
    return (<Component {...props} />)
};

export default Home;
