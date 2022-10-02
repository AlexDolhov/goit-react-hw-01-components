import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  StatItem,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          const color = getRangomColor();
          return (
            <StatItem key={id} style={{ backgroundColor: color }}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
