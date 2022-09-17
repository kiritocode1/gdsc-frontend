import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import NBNSSOE from "../../assets/NBNSSOE.svg";
import DesktopNav from "./navs/desktop";
import MobileNav from "./navs/mobile";
import { endpoints } from "../../App";

export default function Navbar(){
  
  const [isMobile,setIsMobile] = useState(false);

  const handleWindowNavSize = ()=>{
    if (isMobile===false && window.innerWidth <= 966) {
      setIsMobile(true);
    }
    else if (isMobile===true && window.innerWidth > 966){
      setIsMobile(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', handleWindowNavSize);
    handleWindowNavSize();
  })




  return (
    <div className={styles.nav}>
      
       
      <div className={styles.right_side}>
         <Link to={`/${endpoints.initial}`}><img src={NBNSSOE} alt="logo" /></Link>
      </div>
      <div className={styles.left_side}>
        {
          isMobile ? <MobileNav/> : <DesktopNav/>
        }
      </div>

    </div>
  );
};
