import { Fragment } from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <Fragment>
      <h1 className={classes.header}>A training web-app gallery</h1>
      <div className={classes.description_wrapper}>
        <div className={classes.description}>
          A goal was to make a small SPA web-gallery with 3 routes: Gallery,
          About and route with the details about every image in the gallery.
        </div>
        <div>
          <a>Key stack:</a>
          <ul>
            <li>React</li>
            <li>React-router</li>
            <li>Axios</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
      <div className={classes.credits}>
        <div>All images and albums are from</div>
        <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>
        <div>.</div>
      </div>
      <div className={classes.cat_pic_wrapper}>
        <div className={classes.image_container}>
          <img src={`${process.env.PUBLIC_URL}/funny cat pic.jpg`} alt="A funny cat pic"/>
        </div>
        <div className={classes.pointer}>☚</div>
        <div>Also check this cat!</div>
      </div>
    </Fragment>
  );
};

export default About;
