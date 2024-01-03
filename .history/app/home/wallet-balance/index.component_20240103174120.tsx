import Card from "@/app/components/card";
import { WalletProps } from "./index.prop";
import styles from './index.module.css';
import { formatMoney } from "@/utils/formatMoney";

const Component = (props: WalletProps) => {
    const { aggregateWallet, commisionWallet, BNBVault } = props;
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 font-medium">Wallets Balance</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4">
                    <Card className={styles.walletCard}>
                        <div style={{textAlign: 'center'}}>Aggregate Wallet</div>
                        <div className="font-bold text-xl pt-5">
                            <span>{formatMoney(aggregateWallet, 'USD')}</span>
                            <span className="text-xs">USDT</span>
                        </div>
                    </Card>
                </div>
                <div className="p-4">
                    <Card className={styles.walletCard}>
                        <div style={{textAlign: 'center'}}>Commision Wallet</div>
                        <div className="font-bold text-xl pt-5">
                            {formatMoney(commisionWallet, 'USD')}
                            USDT
                        </div>
                    </Card>
                </div>
                <div className="p-4">
                    <Card className={styles.walletCard}>
                        <div style={{textAlign: 'center'}}>BNB Vault</div>
                        <div className="font-bold text-xl pt-5">
                            {BNBVault}
                            BNB
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Component;
