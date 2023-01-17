import './statisticItem.css';
import PropTypes from 'prop-types';
import getRandomHexColor from '../../utils/getBgColor';

const StatisticItem =({label,percentage})=>(
    <li style={{
     
      backgroundColor: getRandomHexColor(),
      
    }} className="stats_item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
)

export default StatisticItem;

StatisticItem.propTypes={
    label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
}