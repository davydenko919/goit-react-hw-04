import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.ul}>
      {friends.map((friend) => (
        <li key={friend.id} className={css.li}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
