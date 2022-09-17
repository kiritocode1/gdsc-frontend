import React,{useEffect} from "react";
import styles from "./index.module.css";
import AOS from "aos";
import logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import {endpoints} from "../../App";

let hoverClrArr = [
    "rgb(226, 0, 0)",
    "rgba(1, 194, 43, 0.985)",
    "rgb(239, 211, 0)",
    "blue"
];

export default function Initial(){

    let counter = 0;
    const history = useNavigate();
    const hoverClrChange = (event)=>{
        if(counter>hoverClrArr.length){
            counter=0;
        }
        event.target.style.background = hoverClrArr[counter];
        counter++;
    }

    useEffect(() => {
        
        AOS.init({
            once: true,
            duration: 1000,
            offset:0
        });

    }, []);

    return (

        <div className={styles.root}>
            <div className={styles.white_shadow}></div>
            <div className={styles.container}>

                <p data-aos="zoom-out-down" data-aos-delay="600" className={styles.welcome}>WELCOME</p>
                <img data-aos="zoom-out-down" data-aos-delay="800" src={logo} className={styles.logo} alt="gdsc logo"/>
                
                <div  className={styles.sub}></div>
                <p data-aos="zoom-out-down" data-aos-delay="1000" className={styles.gdsc}>GDSC NBNSSOE</p>
                <p data-aos="zoom-out-down" data-aos-delay="1200" className={styles.gdsc_subtitle}> Google Developer Student Clubs, NBNSSOE</p>
                <button onClick={() => history(`/${endpoints.home}`)} onMouseOver={hoverClrChange} className={styles.btn}>Lets Go!</button>
               

            </div>
        </div>
    )
}