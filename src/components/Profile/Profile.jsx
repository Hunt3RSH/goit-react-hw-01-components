import PropTypes from 'prop-types';
import {
  Profiled,
  Description,
  Avatar,
  Name,
  Text,
  Stats,
  LiElement,
  Count,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Profiled>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <Stats>
        <LiElement>
          <Text>Followers</Text>
          <Count>{followers}</Count>
        </LiElement>
        <LiElement>
          <Text>Views</Text>
          <Count>{views}</Count>
        </LiElement>
        <LiElement>
          <Text>Likes</Text>
          <Count>{likes}</Count>
        </LiElement>
      </Stats>
    </Profiled>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
