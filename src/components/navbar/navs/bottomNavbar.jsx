import React from "react";
import {NavLink} from "react-router-dom";
import {endpoints} from "../../../App";
import styles from "./bottomNavbar.module.css";
import {AiFillHome} from 'react-icons/ai';
import {BsCalendarEvent} from 'react-icons/bs';
import {MdOutlineAssignment,MdGrade,MdGroups } from 'react-icons/md';


export default function BottomNav(){

    const activeNav = ({isActive})=>{
        return {
            borderTop: isActive ? "3px solid rgba(2, 2, 236, 0.892)" : "none",
            color: isActive ? "rgba(2, 2, 236, 0.892)" : "black"
          }
        }

    return (
           
        <div className={styles.bottomNav}>
            
            <ul>
                <li><NavLink className={styles.bottomNavlnk} style={isActive => activeNav(isActive)} to={`/${endpoints.home}`}><AiFillHome className={styles.bottomIcons}/></NavLink></li>
                <li><NavLink className={styles.bottomNavlnk} style={isActive => activeNav(isActive)} to={`/${endpoints.events}`}><BsCalendarEvent className={styles.bottomIcons}/></NavLink></li>
                <li><NavLink className={styles.bottomNavlnk} style={isActive => activeNav(isActive)} to={`/${endpoints.projects}`}><MdOutlineAssignment className={styles.bottomIcons}/></NavLink></li>
                <li><NavLink className={styles.bottomNavlnk} style={isActive => activeNav(isActive)} to={`/${endpoints.home}`}><MdGrade className={styles.bottomIcons}/></NavLink></li>
                <li><NavLink className={styles.bottomNavlnk} style={isActive => activeNav(isActive)} to={`/${endpoints.team}`}><MdGroups className={styles.bottomIcons}/></NavLink></li>
            </ul>

        </div>
  
        )
}

