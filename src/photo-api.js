import axios from "axios";

// axios.defaults.baseURL = "https://api.unsplash.com/"

export const fetchPhotos = async (searchQuery, currentPage=1) => {
    const params = {
      client_id: "gd4G_sgygMUkO02KFlkJH-wK01AAv8zBPJEiuMZ0zQU",
      query: "car",
      page: currentPage,
      orientation: "landscape",
      per_page: 10,
      headers: {
        "Accept-Version": "v1",
      },
    };

    const { data } = await axios.get( "https://api.unsplash.com/search/photos?", {params} );
    return data;
}

