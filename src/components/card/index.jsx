import React from "react";
import styles from "./index.module.css";

export default function Card(props){

    return(

        <div className={styles.card} style={{width:props.card_data.width,height:props.card_data.height}}>

            <div className={styles.logo}>
                {props.card_data.icon}
            </div>

            <div className={styles.heading}>
                <p>{props.card_data.heading}</p>
            </div>

            <div className={styles.description}>
                <p>{props.card_data.description}</p>
            </div>


        </div>

    )
}
