import Component from "./index.component";
import { NavigationProps } from "./index.props";
import { menus } from "./menus";

const Navigation = () => {

    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    
    const props: NavigationProps = {
        menus,
        path: currentPath,
    }

    return (
        <Component {...props} />
    );
};

export default Navigation;
