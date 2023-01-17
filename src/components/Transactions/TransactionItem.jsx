// lines (14 sloc)  374 Bytes

import './transactionItem.css';
import PropTypes from 'prop-types';

 const TransactionItem =({ type, amount, currency })=>(
    <tr>
    <td>{type}</td>
    <td>{Number(amount)}</td>
    <td>{currency}</td>
  </tr>
)

export default TransactionItem;

TransactionItem.propTypes={
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}