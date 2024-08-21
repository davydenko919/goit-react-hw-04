import { useState, useEffect } from "react";
import css from "./App.module.css";
import { fetchPhotos } from "../../photo-api";

export default function App() {

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    
    async function getPhotos() {
      const data = await fetchPhotos
	    console.log(data);
    }

	
    getPhotos();
  }, []);


  // useEffect(() => {
    
  //   async function fetchArticles() {
  //     const response = await axios.get(
  //       "https://api.unsplash.com/photos/?client_id=gd4G_sgygMUkO02KFlkJH-wK01AAv8zBPJEiuMZ0zQU"
  //     );
	//   console.log(response);
  //   }

	
  //   fetchArticles();
  // }, []);


  return (
    <>
      {/* <button onClick={handleLoadMore}>Load more articles</button> */}
    </>
  );
}
