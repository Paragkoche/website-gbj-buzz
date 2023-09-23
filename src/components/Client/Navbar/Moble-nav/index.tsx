"use client"
import { useState } from "react"
import classes from "./style.module.scss"
const Moble_nav = () => {
    const [open, setOpen] = useState(false)
    const handelOpen = () => setOpen(prv => !prv);

    return <div className={classes.nav__bar__moble}>
        <div onClick={handelOpen} className={classes.nav__bar__moble__hand_burger}>
            <div className={`${classes.nav__bar__moble__hand_burger_line} ${open ? classes.active : null}`}></div>
            <div className={`${classes.nav__bar__moble__hand_burger_line} ${open ? classes.active : null}`}></div>
            <div className={`${classes.nav__bar__moble__hand_burger_line} ${open ? classes.active : null}`}></div>
        </div>
        <div className={classes.nav__bar__moble__manu}>
            <ul className={open ? classes.active : ""}>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
        </div>
    </div>
}
export default Moble_nav