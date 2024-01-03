import Component from "./index.component";
import { HomeProps } from "./index.prop";

const Home = () => {
    const name = 'Admin'
    const props: HomeProps = {
        name,
    }
    return (<Component {...props} />)
};

export default Home;
