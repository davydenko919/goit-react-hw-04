import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";

export default function ImageGallery({items}) {
    console.log(items);
    
  return (
    <ul className={css.list}>       
      {items.map((item) => (
        <li className={css.listItem} key={item.id}>
          <ImageCard
            smallUrl={item.urls.small}
          />
        </li>
      ))}
    </ul>
  );
}
