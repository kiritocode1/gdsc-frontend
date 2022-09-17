import { React} from "react";
import styles from "../index.module.css";
import {NavLink} from "react-router-dom";
import {endpoints} from "../../../App";
import {BsGithub} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';


export default function MobileNav(){


  return (
        <ul className={styles.mobileUl}>
            <li><a className="navlnk" href="https://github.com/GDSC-NBNSSOE"><BsGithub className="icons"/></a></li>
            <li><NavLink className="navlnk" to={`/${endpoints.contact}`}><MdEmail className="icons"/></NavLink></li>
        </ul>
    )
}

