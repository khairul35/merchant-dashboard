import Card from "../components/card";
import { HomeProps } from "./index.prop";
import styles from './index.module.css';

const Component = (props: HomeProps) => {
    const { name } = props;

    return (
        <div>
            <div className="p-2">
                <h2 className="font-semibold text-2xl pb-5 border-b-2 border-y-gray-300">Hi { name }</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 font-medium">Organization Overview</div>
                <div className="p-4 font-light text-xs flex justify-end items-center ">Last Updated: 12/22/2023 15:05</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4">
                    <Card className={styles.organizationOverviewCard}>
                        <div>Agents Total #</div>
                        <div className="font-bold text-xl">
                            10
                        </div>
                    </Card>
                </div>
                <div className="p-4">
                    <Card className={styles.organizationOverviewCard}>
                        <div>Merchants Total #</div>
                    </Card>
                </div>
                <div className="p-4">
                    <Card className={styles.organizationOverviewCard}>
                        <div>Users Total #</div>
                    </Card>
                </div>
            </div>

        </div>
    )
};

export default Component;
