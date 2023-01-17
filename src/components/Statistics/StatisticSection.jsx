import StatisticList from "./StatisticList";
import StatisticTitle from "./StatisticTitle";
import './statisticSection.css';
import PropTypes from 'prop-types';


 const StatisticSection =({stats, title})=>(
<section className="statistics">
<StatisticTitle title={title}></StatisticTitle>
<StatisticList stats={stats}></StatisticList>
</section>
)

export default StatisticSection;

StatisticTitle.propTypes = {
    title: PropTypes.string
  };