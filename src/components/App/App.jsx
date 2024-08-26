import { useState, useEffect } from "react";
import css from "./App.module.css";
import { fetchPhotos } from "../../photo-api.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import { RotatingLines } from 'react-loader-spinner'


export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page+1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

      async function getPhotos() {
        try {
          setIsLoading(true);
          const data = await fetchPhotos(query, page);
          setPhotos((prevPhotos) => {
            return [...prevPhotos, ...data];
          });
          console.log(data);
        } catch (error) {
          setError(true);
        } finally {
          setIsLoading(false);
        }
      }

      getPhotos();
  }, [page, query]);

  return (
    <>
      {/* <ErrorMessage /> */}
      {error && <p>There was an error, please realod page</p>}
      <SearchBar onSearch={handleSearch} query={query} />
      {photos.length > 0 && <ImageGallery items={photos} />}
      {isloading && <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />}

      {photos.length > 0 && <button onClick={handleLoadMore}>Load more articles</button>}
    </>
  );
}
