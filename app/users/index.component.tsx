import Table from "../components/table";
import Card from '../components/card';
import { ComponentProps } from "./index.prop";
import styles from './index.module.css';

const Component = (props: ComponentProps) => {
    const { tableProps, name } = props;
    return (
        <div>
            <div className="p-2">
                <h2 className="font-semibold text-2xl pb-5 border-b-2 border-y-gray-300">
                    Hello, { name }
                </h2>
            </div>
            <div>
                <Card padding={0}>
                    <div className="p-5">
                        <h2 className="font-medium text-l pb-5">
                            Users List
                        </h2>
                        <Table {...tableProps} />
                    </div>
                    <div className={styles.viewAllFooter}>
                        VIEW ALL USERS
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Component;
