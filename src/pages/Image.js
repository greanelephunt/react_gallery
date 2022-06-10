import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./Image.module.css";

const Image = () => {
  const { albumId, imgId } = useParams();

  const gallery = useSelector((state) => state.gallery.gallery);
  console.log("gallery: ", gallery);
  const photo = gallery
    .filter((item) => item.id == albumId)[0]
    .photos.filter((photo) => photo.id == imgId)[0];
  console.log("photo: ", photo);

  return (
    <div className={classes.content_wrapper}>
      <div className={classes.content}>
        <div className={classes.image_container}>
          <img src={photo.imgUrl} alt={photo.title} />
        </div>
        <div className={classes.img_title}>{photo.title}</div>
      </div>
    </div>
  );
};

export default Image;
