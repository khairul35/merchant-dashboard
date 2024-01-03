import { Menu, NavigationProps } from "./index.props";
import styles from './index.module.css';
import Link from "next/link";

const Component = (props: NavigationProps) => {
    const { menus } = props;
    return (
        <nav className="w-64 min-h-screen py-4 border-r-2 border-gray-300">
            {/* Navigation items */}
            {
                menus.map((e: Menu) => {
                    return (
                        <Link
                            href={e.path}
                            className={`${styles.menu} flex items-center space-x-2 px-4 py-2`}
                        >
                            {e.icon()}
                            <span className="font">
                                {e.title}
                            </span>
                        </Link>
                    );
                })
            }
        </nav>
    );
};

export default Component;
