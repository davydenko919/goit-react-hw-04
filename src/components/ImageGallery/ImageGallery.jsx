import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";

export default function ImageGallery({items, openModal}) {
    console.log(items);
    
  return (
    <ul className={css.list}>       
      {items.map((item) => (
        <li className={css.listItem} key={item.id}>
          <ImageCard openModal={openModal}
            smallUrl={item.urls.small}
            LargeUrl={item.urls.full}
            alt={item.alt_description}
            
          />
        </li>
      ))}
    </ul>
  );
}
