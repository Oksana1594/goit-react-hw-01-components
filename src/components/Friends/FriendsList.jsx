import './friendsList.css';
import  FriendsItem  from './FriendsItem';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => {
  return (
    <ul className="friend_list">
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendsItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        ></FriendsItem>
      ))}
    </ul>
  );
};

export default FriendsList;

FriendsItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};