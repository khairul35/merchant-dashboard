import styles from './index.module.css';

const Component = () => {
    return (
        <div
            className="navbar border-b shadow-black-200"
            style={{ backgroundColor: "#fff", color: "#000", height: '77px' }}
        >
            <button className={styles.logOutButton}>
                Log Out
            </button>
        </div>
    )
};

export default Component;
