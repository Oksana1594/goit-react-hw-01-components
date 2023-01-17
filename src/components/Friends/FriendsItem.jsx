import './friendsItem.css';
import PropTypes from 'prop-types';
import clsx from "clsx";

const FriendsItem = ({ avatar, name, isOnline }) => (
  <li className="item">
    <span
      className={clsx("status", {
        ["online"]: isOnline,
        ["offline"]: !isOnline,
      })}

    ></span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);

export default FriendsItem;

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  isOnline: PropTypes.bool,
};