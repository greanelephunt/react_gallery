import axios from "axios";
import { galleryActions } from "./gallery-slice";

export const loadGalleryThunk = () => async (dispatch) => {
    dispatch(galleryActions.loadingStart());
    const albums = await axios.get("https://jsonplaceholder.typicode.com/albums");
    const photos = await axios.get("https://jsonplaceholder.typicode.com/photos");

    const gallery = albums.data.map(album => {return {id:album.id, title:album.title, photos:[]}});
    photos.data.forEach(photo => gallery[photo.albumId-1].photos.push({id:photo.id, title:photo.title, imgUrl: photo.url}))

    dispatch(galleryActions.addAlbums(gallery));
    dispatch(galleryActions.loadingComplete());
}