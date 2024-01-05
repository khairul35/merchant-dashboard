import Card from "@/app/components/card";
import { TransactionTotalProps } from "./index.prop";
import styles from './index.module.css';
import { formatMoney } from "@/utils/formatMoney";

const Component = (props: TransactionTotalProps) => {
  const { txnAmount, ofTxn } = props;

  return (
    <div>
      <Card className="m-4">
        <div className="p-4 font-semibold text-lg">Transaction Totals</div>
        <table className="w-full">
          <tbody>
            <tr>
              <td></td>
              <td className="text-center">IN</td>
              <td className="text-center">OUT</td>
            </tr>
            <tr className="h-16">
                <td className="border-t border-gray-300"># of Txn</td>
                <td className="border-l border-t border-gray-300 text-center">
                    <b>{ofTxn.in}</b>
                </td>
                <td className="border-l border-t border-gray-300 text-center">
                    <b>{ofTxn.out}</b>
                </td>
            </tr>
            <tr className="h-16">
                <td className="border-t border-gray-300">Txn Amount</td>
                <td className="border-t border-l border-gray-300 text-center">
                    <b>{formatMoney(txnAmount.in, 'USD')}</b>
                </td>
                <td className="border-t border-l border-gray-300 text-center">
                    <b>{formatMoney(txnAmount.out, 'USD')}</b>
                </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Component;

