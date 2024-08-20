import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({
  friend: { avatar, name, isOnline, id },
}) {
  const amountClassNames = clsx(
    css.text,
    isOnline ? css.isOnline : css.isOffline
  );
  return (
    <div className={css.div}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={amountClassNames}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
