import { LogoSvg } from "@/static/client"
import Image from "next/image"
import { BsArrowUpRight } from "react-icons/bs"
import classes from "./style.module.scss"
import db from "@/Database"
import DropDown from "./Dropdown"
import Moble_nav from "./Moble-nav"
const Page = async () => {
    const serevise = await db.services.findMany();


    return <nav className={classes.nav__bar}>
        <div className={classes.nav__bar__commponet}>
            <div className={classes.nav__bar__commponet__log}>
                <div className="logoSvg">
                    <Image src={LogoSvg} alt="Gbjbuzz-Logo" />
                </div>
            </div>
            <ul className={classes.nav__bar__manu}>
                <li>
                    Home</li>
                <DropDown servies={serevise} />

                <li>Contact</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
            <div className={`button ${classes.nav__bar__button_componet}`}>
                <button className={`btn`}>
                    Request Quote <BsArrowUpRight />
                </button>
            </div>
            {/* moble nav-bar */}
            <Moble_nav />
        </div>
    </nav>
}
export default Page