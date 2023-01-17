import './statisticTitle.css';
import PropTypes from 'prop-types';

 const StatisticTitle = ({ title }) => {
  return <>{title.length > 0 && <h2 className="title">{title}</h2>}</>;
};

export default StatisticTitle;

StatisticTitle.propTypes = {
  title: PropTypes.string,
};