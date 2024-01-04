export interface TransactionTotalProps {
    ofTxn: InOut;
    txnAmount: InOut;
};

interface InOut {
    in: number;
    out: number;
}