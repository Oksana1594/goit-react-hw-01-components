import  './transactionHistory.css';
import PropTypes from 'prop-types';
import TransactionItem from 'components/Transactions/TransactionItem';

 const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction_history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          ></TransactionItem>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes={
    items: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ),
}