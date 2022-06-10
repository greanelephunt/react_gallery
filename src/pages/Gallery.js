import { useEffect } from "react";
import Album from "../components/Album";
import { useSelector, useDispatch } from "react-redux";
import { loadGalleryThunk } from "../store/thunks";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import classes from "./Gallery.module.css";

const Gallery = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => dispatch(loadGalleryThunk());
    fetchData();
  }, [dispatch]);

  const isLoading = useSelector((state) => state.gallery.isLoading);
  const albums = useSelector((state) => state.gallery.gallery);
  console.log(albums)

  return (
    <div className={classes.gallery}>
      {isLoading ? <LoadingSpinner/> : albums.map(album => <Album key={album.id} albumTitle={album.title} album={album.photos} albumId={album.id}/>)}
    </div>
  );
};

export default Gallery;
