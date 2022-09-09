import PropTypes from 'prop-types';
import { Avatar, Name, Status } from './Friends.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <Status status={isOnline} />
    <Avatar src={avatar} alt="name" width="70" />
    <Name>{name}</Name>
  </>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
