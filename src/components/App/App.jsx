import { useState, useEffect } from "react";
import css from "./App.module.css";
import { fetchPhotos } from "../../photo-api.js";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Loader from "../Loader/Loader.jsx";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getPhotos() {
      try {
        setIsLoading(true);
        const data = await fetchPhotos();
        
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false); 
      }
    }

    getPhotos();
  }, []);

  return (
    <>
    {error && <p>There was an error, please realod page</p>}
      <SearchBar />
      {/* <ImageGallery /> */}
      {isloading && <Loader />}
      {/* <ErrorMessage /> */}

      {/* <button onClick={handleLoadMore}>Load more articles</button> */}
    </>
  );
}
