import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"

export const fetchPhotos = async () => {
    // const response = await axios.get("");
    // console.log(response);
    const response = await axios.get("/search", {
        params: {
          Authorization: gd4G_sgygMUkO02KFlkJH-wK01AAv8zBPJEiuMZ0zQU,
          query: searchQuery,
          per_page: 10,
          page: currentPage,
        },
      });
    return response;
}