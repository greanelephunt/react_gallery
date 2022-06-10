import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
    return <header className={classes.header}>
        <NavLink className={({isActive}) => isActive ? classes.link__active : classes.link} to="/Gallery">Gallery</NavLink>
        <NavLink className={({isActive}) => isActive ? classes.link__active : classes.link} to="/About">About</NavLink>
    </header>;
}

export default MainHeader