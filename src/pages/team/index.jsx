import React from "react";
import styles from "./index.module.css";
import avatar from "./../../assets/avatar.png"
import {SiLinkedin} from "react-icons/si"

export default function Team(){



    return (
        
        <section id="team">
            <div>

            </div>
        
            <div className={styles.gridcontainer}>
            <div className={styles.card}>
                <img src={avatar} alt="avatar"/>
                <div class="container">
                    <h4><b>JOHN DOE</b></h4>
                    <p>xyz lead</p>
                    <a href="https://linkedin.com">
                    <SiLinkedin className={styles.linkedinlogo}/>
                    </a>
                </div>
            </div>
            <div className={styles.card}>
                <img src={avatar} alt="avatar"/>
                <div class="container">
                    <h4><b>JOHN DOE</b></h4>
                    <p>xyz lead</p>
                    <a href="https://linkedin.com">
                    <SiLinkedin className={styles.linkedinlogo}/>
                    </a>
                </div>
            </div>
            <div className={styles.card}>
                <img src={avatar} alt="avatar"/>
                <div class="container">
                    <h4><b>JOHN DOE</b></h4>
                    <p>xyz lead</p>
                    <a href="https://linkedin.com">
                    <SiLinkedin className={styles.linkedinlogo}/>
                    </a>
                </div>
            </div>
            <div className={styles.card}>
                <img src={avatar} alt="avatar"/>
                <div class="container">
                    <h4><b>JOHN DOE</b></h4>
                    <p>xyz lead</p>
                    <a href="https://linkedin.com">
                    <SiLinkedin className={styles.linkedinlogo}/>
                    </a>
                </div>
            </div>
            <div className={styles.card}>
                <img src={avatar} alt="avatar"/>
                <div class="container">
                    <h4><b>JOHN DOE</b></h4>
                    <p>xyz lead</p>
                    <a href="https://linkedin.com">
                    <SiLinkedin className={styles.linkedinlogo}/>
                    </a>
                </div>
            </div>
            <div className={styles.card}>
                <img src={avatar} alt="avatar"/>
                <div class="container">
                    <h4><b>JOHN DOE</b></h4>
                    <p>xyz lead</p>
                    <a href="https://linkedin.com">
                    <SiLinkedin className={styles.linkedinlogo}/>
                    </a>
                </div>
            </div>
            </div>
        </section>

    )
}