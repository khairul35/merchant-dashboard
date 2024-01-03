import { Menu, NavigationProps } from "./index.props";

const Component = (props: NavigationProps) => {
    const { menus } = props;
    return (
        <nav className="w-64 min-h-screen py-4">
            {/* Navigation items */}
            {
                menus.map((e: Menu) => {
                    return (
                        <div className="flex items-center space-x-2 px-4 py-2">
                            {e.icon()}
                            <span className="font">
                                {e.title}
                            </span>
                        </div>
                    );
                })
            }
        </nav>
    );
};

export default Component;
