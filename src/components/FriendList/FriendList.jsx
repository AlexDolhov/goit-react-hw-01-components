import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendCard,
  Status,
  Avatar,
  Name,
} from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendCard key={id}>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </FriendCard>
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
