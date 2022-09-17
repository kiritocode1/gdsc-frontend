import { React} from "react";
import {NavLink} from "react-router-dom";
import {endpoints} from "../../../App";

export default function DesktopNav(){

  const activeNav = ({isActive})=>{
    return {
      fontWeight: isActive ? "500" : "200",
      color: isActive ? "rgb(47, 45, 45)" : "rgb(0, 0, 0)"
      }
    }



  return (
           
              <ul>
                <li><NavLink className="navlnk" style={isActive => activeNav(isActive)} to={`/${endpoints.home}`}>Home</NavLink></li>
                <li><NavLink className="navlnk" style={isActive => activeNav(isActive)} to={`/${endpoints.events}`}>Events</NavLink></li>
                <li><NavLink className="navlnk" style={isActive => activeNav(isActive)} to={`/${endpoints.projects}`}>All Projects</NavLink></li>
                <li><NavLink className="navlnk" style={isActive => activeNav(isActive)} to={`/${endpoints.acts}`}>Acts</NavLink></li>
                <li><NavLink className="navlnk" style={isActive => activeNav(isActive)} to={`/${endpoints.team}`}>Our Team</NavLink></li>
                <li><NavLink className="navlnk" style={isActive => activeNav(isActive)} to={`/${endpoints.contact}`}>Contact Us</NavLink></li>
              </ul>
        )
}

