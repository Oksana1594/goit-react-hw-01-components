import './statisticList.css';
import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';

 const StatisticList = ({ stats }) => {
  return (
    <ul className="list">
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem key={id} label={label} percentage={percentage}></StatisticItem>
      ))}
    </ul>
  );
};

export default StatisticList;

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};