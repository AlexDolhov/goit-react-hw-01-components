import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
} from 'components/Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrap>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="320" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </Stats>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
