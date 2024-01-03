import Component from "./index.component";
import { NavigationProps } from "./index.props";
import { menus } from "./menus";

const Navigation = () => {

    
    const props: NavigationProps = {
        menus,
    }

    return (
        <Component {...props} />
    );
};

export default Navigation;
