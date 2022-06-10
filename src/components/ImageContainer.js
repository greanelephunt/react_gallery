import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ImageContainer.module.css";

const ImageContainer = (props) => {
  const [showDetailsState, setShowDetailsState] = useState(false);

  const imageMouseEnterHandler = () => {
    setShowDetailsState(true);
  };

  const imageMouseLeaveHandler = () => {
    setShowDetailsState(false);
  };

  const detailsPopUp = (
    <div className={classes.details_container}>
      <div>
        <Link to={`/Image/${props.albumId}/${props.imgId}`}>Details</Link>
      </div>
    </div>
  );

  return (
    <div
      className={classes.image_container}
      onMouseEnter={imageMouseEnterHandler}
      onMouseLeave={imageMouseLeaveHandler}
    >
      <img src={props.imgUrl} alt={props.imgId}/>
      {showDetailsState && detailsPopUp}
    </div>
  );
};

export default ImageContainer;
