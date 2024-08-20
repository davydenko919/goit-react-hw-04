import css from "./Profile.module.css";

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.avatarContainer}>
        <img className={css.avatarImg} src={avatar} alt="User avatar" />
        <div className={css.userContainer}>
          <p className={css.avatarName}>{username}</p>
          <p className={css.avatarText}>@{tag}</p>
          <p className={css.avatarText}>{location}</p>
        </div>
      </div>

      <ul className={css.mediaUl}>
        <li className={css.mediaLi}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.mediaLi}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.mediaLi}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
