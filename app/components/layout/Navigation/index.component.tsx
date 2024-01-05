import { Menu, NavigationProps } from "./index.props";
import styles from './index.module.css';
import Link from "next/link";

const Component = (props: NavigationProps) => {
    const { menus, path, setCurrentPath, style, className, toggle } = props;

    return (
        <nav
            className={`
                lg:w-64
                sm:w-full
                min-h-screen
                py-4
                border-r-2
                border-gray-300
                ${className}`}
            style={style}>
            {/* Navigation items */}
            {
                menus.map((e: Menu) => {
                    const isSelected = path === e.path; // Check if the path matches
                    const linkClassName = isSelected ?
                        `${styles.menuSelected} flex items-center space-x-2 px-4 py-2`
                        : `${styles.menu} flex items-center space-x-2 px-4 py-2`;
                    return (
                        <Link
                            href={e.path}
                            onClick={() => {
                                toggle ? toggle() : null;
                                setCurrentPath(e.path);
                            }}
                            key={e.id}
                            className={linkClassName}
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
