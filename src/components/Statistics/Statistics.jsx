import PropTypes from 'prop-types';
import {
  Label,
  ListStats,
  LiType,
  Percentage,
  Stats,
  TitleName,
} from './Stats.styled';

export const Statistics = ({ title, stats }) => (
  <Stats>
    {title && <TitleName>{title}</TitleName>}
    <ListStats>
      {stats.map(data => (
        <LiType key={data.id} style={{ backgroundColor: `#${randomColor()}` }}>
          <Label>{data.label}</Label>
          <Percentage>{data.percentage}%</Percentage>
        </LiType>
      ))}
    </ListStats>
  </Stats>
);

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
