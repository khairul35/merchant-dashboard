import Card from "@/app/components/card";
import { OrganizationOverviewProps } from "./index.prop";
import styles from './index.module.css';
import { formatNumberToComma } from "@/utils/formatNumberToComma";

const Component = (props: OrganizationOverviewProps) => {
    const { totalAgents, totalMerchants, totalUsers } = props;

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 font-medium">Organization Overview</div>
                <div className="p-4 font-light text-xs flex justify-end items-center ">Last Updated: 12/22/2023 15:05</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4">
                    <Card className={styles.organizationOverviewCard}>
                        <div style={{textAlign: 'center'}}>Agents<br />Total #</div>
                        <div className="font-bold text-xl pt-5">
                            {formatNumberToComma(totalAgents)}
                        </div>
                    </Card>
                </div>
                <div className="p-4">
                    <Card className={styles.organizationOverviewCard}>
                        <div>Merchants<br />Total #</div>
                        <div className="font-bold text-xl pt-5">
                            {formatNumberToComma(totalMerchants)}
                        </div>
                    </Card>
                </div>
                <div className="p-4">
                    <Card className={styles.organizationOverviewCard}>
                        <div>Users<br />Total #</div>
                        <div className="font-bold text-xl pt-5">
                            {formatNumberToComma(totalUsers)}
                        </div>
                    </Card>
                </div>
            </div>

        </div>
    )
};

export default Component;
