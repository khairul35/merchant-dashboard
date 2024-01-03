import styles from './index.module.css';

const Component = () => {
    return (
        <div className={styles.header}>
            <div></div> {/* Empty div for space on the left */}
            <button className={styles.logOutButton}>
                Log Out
            </button>
        </div>
    )
};

export default Component;
