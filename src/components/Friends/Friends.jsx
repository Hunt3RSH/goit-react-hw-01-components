import PropTypes from 'prop-types';
import { FriendListItem } from '../Friends/FriendListItem';
import { ListFriends, ListItem } from './Friends.styled';

export const FriendList = ({ friends }) => (
  <ListFriends>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <ListItem key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </ListItem>
    ))}
  </ListFriends>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
