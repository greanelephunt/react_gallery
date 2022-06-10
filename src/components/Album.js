import classes from "./Album.module.css";
import ImageContainer from "./ImageContainer";

const Album = (props) => {
  return (
    <div>
      <div className={classes.album__header}>{props.albumTitle}</div>
      <div className={classes.album__wrapper}>
        {props.album.map(image => <ImageContainer key={image.id} albumId={props.albumId} imgId={image.id} imgUrl={image.imgUrl} title={image.title}/>)}
      </div>
    </div>
  );
};

export default Album;
