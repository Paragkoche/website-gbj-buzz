"use client"
import { services } from "@prisma/client"
import classes from "./style.module.scss"
import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const DropDown = ({ servies }: { servies: services[] }) => {
    const [open, setOpen] = useState(false);
    return <li
        // onMouseLeave={() => setOpen(false)}
        // onMouseEnter={() => setOpen(true)}

        className={classes.dropDown}


    >
        <p onClick={() => setOpen(prv => !prv)}>Services</p>
        <span
            style={{
                transform: `rotate(${!open ? 180 : 0}deg)`
            }}
        > <IoIosArrowUp /> </span>
        <div style={{
            opacity: open ? "1" : "",
            display: open ? "inherit" : ""
        }}>
            <ul>
                <li>All Services</li>
                {servies.map((v, i) => <li key={i}>{v.name}</li>)}
            </ul>
        </div></li>
}
export default DropDown;