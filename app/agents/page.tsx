'use client';

import { formatMoney } from "@/utils/formatMoney";
import { TableColumn, TableData } from "../components/table/index.prop";
import Component from "./index.component";
import { ComponentProps } from "./index.prop";

const Agent = () => {
    const customTotalDeposit = (value: any, record: TableData) => {
        return (<span>{formatMoney(value, 'USD')}</span>);
    };

    const customTotalCommision = (value: any, record: TableData) => {
        return (<span>{formatMoney(value, 'USD')}</span>);
    };

    const customAvgDailyDeposit = (value: any, record: TableData) => {
        return (<span>{formatMoney(value, 'USD')}</span>);
    };

    const customDepositUnsettled = (value: any, record: TableData) => {
        return (<span>{formatMoney(value, 'USD')}</span>);
    };

    const customCommisionPercentage = (value: any, record: TableData) => {
        return (<span>{value}%</span>);
    };

    const name = 'Admin'

    const columns: TableColumn[] = [
        {
            key: 'id',
            label: 'ID',
            dataIndex: 'agentId'
        },
        {
            key: 'name',
            label: 'Name',
            dataIndex: 'name'
        },
        {
            key: 'totalDeposit',
            label: 'Total Deposit',
            dataIndex: 'totalDeposit',
            custom: customTotalDeposit,
            center: true,
        },
        {
            key: 'totalTxn',
            label: 'Total # of Txn',
            dataIndex: 'totalTxn',
            center: true,
        },
        {
            key: 'totalCommision',
            label: 'Total Commision',
            dataIndex: 'totalCommision',
            custom: customTotalCommision,
            center: true,
        },
        {
            key: 'avgDailyDeposit',
            label: 'Avg Daily Deposit',
            dataIndex: 'avgDailyDeposit',
            custom: customAvgDailyDeposit,
            center: true,
        },
        {
            key: 'depositUnsettled',
            label: 'Deposit Unsettled',
            dataIndex: 'depositUnsettled',
            custom: customDepositUnsettled,
            center: true,
        },
        {
            key: 'commisionPercentage',
            label: 'Commision %',
            dataIndex: 'commisionPercentage',
            custom: customCommisionPercentage,
            center: true,
        },
    ];

    const data: TableData[] = [
        {
            id: 1,
            name: 'Agent 1',
            agentId: 'Agent001',
            totalDeposit: 200000,
            totalTxn: 1800,
            totalCommision: 1000,
            avgDailyDeposit: 20000,
            depositUnsettled: 5000,
            commisionPercentage: 0.5,
        },
        {
            id: 2,
            name: 'Agent 2',
            agentId: 'Agent002',
            totalDeposit: 200000,
            totalTxn: 1800,
            totalCommision: 1000,
            avgDailyDeposit: 20000,
            depositUnsettled: 5000,
            commisionPercentage: 0.5,
        },
        {
            id: 3,
            name: 'Agent 3',
            agentId: 'Agent003',
            totalDeposit: 200000,
            totalTxn: 1800,
            totalCommision: 1000,
            avgDailyDeposit: 20000,
            depositUnsettled: 5000,
            commisionPercentage: 0.5,
        },
        {
            id: 4,
            name: 'Agent 4',
            agentId: 'Agent004',
            totalDeposit: 200000,
            totalTxn: 1800,
            totalCommision: 1000,
            avgDailyDeposit: 20000,
            depositUnsettled: 5000,
            commisionPercentage: 0.5,
        },
        {
            id: 5,
            name: 'Agent 5',
            agentId: 'Agent005',
            totalDeposit: 200000,
            totalTxn: 1800,
            totalCommision: 1000,
            avgDailyDeposit: 20000,
            depositUnsettled: 5000,
            commisionPercentage: 0.5,
        },
    ];

    const tableProps = {
        data,
        columns,
    };

    const componentProps: ComponentProps = {
        tableProps,
        name,
    };

    return (
        <Component {...componentProps} />
    );
};

export default Agent;
