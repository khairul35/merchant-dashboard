import Navigation from '../Navigation';
import styles from './index.module.css';
import { HeaderProps } from './index.props';

const Component = (props: HeaderProps) => {
    const { onLogOut, showMenu, toggleMenu } = props;
    return (
        <div>
            <div className={styles.header}>
                <div>
                    <button
                        className="md:hidden lg:hidden xl:hidden"
                        onClick={toggleMenu}
                    >
                        {/* Your hamburger menu icon */}
                        <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-10 h-10">
                            <path
                                fillRule="evenodd"
                                d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 5h14a1 1 0 110 2H3a1 1 0 110-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <button className={styles.logOutButton} onClick={onLogOut}>
                    Log Out
                </button>
            </div>
                    {showMenu && <Navigation />}
        </div>
    )
};

export default Component;
