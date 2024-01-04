'use client';

import { useState } from "react";
import Component from "./index.component";
import { HomeProps } from "./index.prop";

const Home = () => {
    const [financialFilter, setFinancialFilter] = useState<string>('ALL');

    const name = 'Admin';
    const organizationOverview = {
        totalAgents: 10,
        totalMerchants: 2000,
        totalUsers: 2000000
    };
    
    const wallets = {
        aggregateWallet: 10000,
        commisionWallet: 2000,
        BNBVault: 10.875,
        walletAddress: 'Settlement Wallet Address: 0x12345678901234567890123456789123456789',
    }

    const aggregationWalletSummary = {
        total: 1000,
        active: 2000,
        inactive: 8000,
        locked: 4,
    }

    const transactionTotal = {
        ofTxn: {
            in: 8000,
            out: 1000,
        },
        txnAmount: {
            in: 10000,
            out: 9000,
        },
    };

    const ofTransaction = {
        ins: 8000,
        out: 2000,
    };

    const transactionAmount = {
        ins: 10000,
        out: 9000,
    };

    const commision = {
        received: 2000,
        pending: 150,
    };

    const feesSpent = {
        bnb: 8.30,
    };

    const commisionGraph = {
        received: 2000,
    };

    const feesSpentGraph = {
        bnb: 8.3,
    };

    const props: HomeProps = {
        name,
        organizationOverview,
        wallets,
        aggregationWalletSummary,
        financialFilter,
        transactionTotal,
        ofTransaction,
        transactionAmount,
        commision,
        feesSpent,
        commisionGraph,
        feesSpentGraph,
        setFinancialFilter,
    };

    return (<Component {...props} />)
};

export default Home;
