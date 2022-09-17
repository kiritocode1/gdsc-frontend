import React from "react";
import styles from "./index.module.css";
import { BsGithub,BsYoutube,BsLinkedin } from 'react-icons/bs';
import {SiDiscord} from 'react-icons/si';
import {IoMdMail} from 'react-icons/io';
import {HiLocationMarker} from 'react-icons/hi'
import { NavLink } from "react-router-dom";
import {endpoints} from "../../App";

export default function Footer(){

    const discordAction = ()=>{
        window.open("https://discord.gg/vX3DDTSt","_blank");
    }

    return (
        
        <div className={styles.root}>
            <div className={styles.left}>
                <p className={styles.heading}>Join Our Community</p>
                <p className={styles.desc}>Helping students to bridge the gap between theory and practice. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. </p>
                <button onClick={discordAction}>
                    <SiDiscord className={styles.dicord_logo}/>
                    Join Us
                </button>
            </div>
            <div className={styles.middle}>
                <p>Quick Links</p>
                <NavLink to={`/${endpoints.events}`}>Events</NavLink>
                <NavLink to={`/${endpoints.projects}`}>Projects</NavLink>
                <NavLink to={`/${endpoints.team}`}>Teams</NavLink>
                <NavLink to={`/${endpoints.contact}`}>Contact</NavLink>
            </div>
            <div className={styles.right}>
                <p>Contact Us</p>
                <p> <IoMdMail/> gdsc@gmail.com</p>
                <p> <HiLocationMarker/> Punjab, jjkdasjd, WB, 8989, India</p>
                <div>
                    <BsGithub/>
                    <BsYoutube/>
                    <BsLinkedin/>
                </div>
            </div>
        </div>

    )

}