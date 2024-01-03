import Component from "./index.component";
import { NavigationProps } from "./index.props";
import { menus } from "./menus";
import { useRouter } from "next/router";

const Navigation = () => {

    const router = useRouter();
    
    const props: NavigationProps = {
        menus,
        path: router.asPath,
    }

    return (
        <Component {...props} />
    );
};

export default Navigation;
