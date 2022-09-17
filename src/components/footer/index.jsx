import React from "react";
import styles from "./index.module.css";
import { BsGithub,BsYoutube,BsLinkedin } from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import {endpoints} from "../../App";

import {SiDiscord} from 'react-icons/si';
import {IoMdMail} from 'react-icons/io';
import {HiLocationMarker} from 'react-icons/hi';
import {GrInstagram} from 'react-icons/gr';
import {FaFacebookF} from 'react-icons/fa'

export default function Footer(){

    const discordAction = ()=>{
        window.open("https://discord.gg/vX3DDTSt","_blank");
    }

    const socialAction = (handle)=>{

        switch(handle){

            case "github":
                window.open("https://github.com/GDSC-NBNSSOE","_blank");
                break;
            case "youtube":
                window.open("https://youtube.com/nbnssoe","_blank");
                break;
            case "linkedin":
                window.open("https://www.linkedin.com/in/google-developer-students-club-nbnssoe/","_blank");
                break;
            case "instagram":
                window.open("https://www.instagram.com/gdsc_nbnssoe/","_blank");
                break;
            case "facebook":
                window.open("https://www.facebook.com/Google-Developer-Students-Club-Nbnssoe-102706765893775","_blank");
                break;
            default:
                break; 
        }
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
                <p> <IoMdMail/>nbnssoe.gdsc@gmail.com</p>
                <p> <HiLocationMarker/>NBNSSOE, Pune, Maharashtra 411041, India</p>
                <div>
                    <BsGithub onClick={()=>{socialAction("github")}}/>
                    <BsYoutube onClick={()=>{socialAction("youtube")}}/>
                    <BsLinkedin onClick={()=>{socialAction("linkedin")}}/>
                    <GrInstagram onClick={()=>{socialAction("instagram")}}/>
                    <FaFacebookF onClick={()=>{socialAction("facebook")}}/>
                </div>
            </div>
        </div>

    )

}