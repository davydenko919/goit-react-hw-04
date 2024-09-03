import { useState, useEffect } from "react";
import css from "./App.module.css";
import { fetchPhotos } from "../../photo-api.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { RotatingLines } from 'react-loader-spinner'
import toast, { Toaster } from "react-hot-toast";


export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalURL, setModalURL] = useState('');
  const [modalALT, setModalALT] = useState('');
  
  


  const handleSearch = (newQuery) => {

    const notify = () => toast.error('Enter text for search!', {
      icon: '🥸',
    });

    if(newQuery === ""){
      notify();
    }
    else{
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  }
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

  const openModal = (url,alt) => {
    setIsModalOpen(true);
    setModalURL(url);
    setModalALT(alt);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalURL('');
    setModalALT('');
  }

  return (
    <>
      {error && <ErrorMessage />}
      <SearchBar onSearch={handleSearch} query={query} />
      <Toaster />
      {photos.length > 0 && <ImageGallery items={photos} openModal={openModal}/>}
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

      {photos.length > 0 && <LoadMoreBtn handleLoadMore={handleLoadMore}/>}

      <ImageModal isModalOpen={isModalOpen} closeModal={closeModal} src={modalURL} alt={modalALT} />
    </>
  );
}
