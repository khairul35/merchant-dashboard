import Component from "./index.component";
import { HomeProps } from "./index.prop";

const Home = () => {
    const name = 'Admin';
    const organizationOverview = {
        totalAgents: 10,
        totalMerchants: 2000,
        totalUsers: 2000000
    };
    
    const wallets = {
        aggregateWallet: 10000,
        commisionWallet: 2000,
        BNBVault: 10.875,
    }

    const props: HomeProps = {
        name,
        organizationOverview,
        wallets
    }
    return (<Component {...props} />)
};

export default Home;
