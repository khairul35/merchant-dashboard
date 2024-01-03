import styles from './index.module.css';
import { HeaderProps } from './index.props';

const Component = (props: HeaderProps) => {
    const { onLogOut } = props;
    return (
        <div className={styles.header}>
            <div></div> {/* Empty div for space on the left */}
            <button className={styles.logOutButton} onClick={onLogOut}>
                Log Out
            </button>
        </div>
    )
};

export default Component;
