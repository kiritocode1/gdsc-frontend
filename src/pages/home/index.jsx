import React from "react";
import styles from "./index.module.css";
import GDSCHOME from "../../assets/gdsc-home.png";
import Card from "../../components/card";
import {IoRocketOutline} from "react-icons/io5";
import {MdOutlineGroups} from "react-icons/md";
import {FaRegLightbulb} from 'react-icons/fa';


const cards_data = [
    {
        id:1,
        width:"300px",
        height:"350px",
        icon:<IoRocketOutline style={{width: "75%",height: "75%",color: "#4a91f6"}}/>,
        heading:"Concept of DSC",
        description:"The DSC program is a grassroots channel through which Google provides development, mobile & web development skills for students, towards employability."
    },
    {
        id:2,
        icon:<FaRegLightbulb style={{width: "75%",height: "75%",color: "#189e59"}}/>,
        heading:"Why DSC?",
        description:"For students to learn development skills, solve problems through technology and inspire them to be world class developers and changemakers."
    },
    {
        id:3,
        icon:<MdOutlineGroups style={{width: "75%",height: "75%",color: "#e1382b"}}/>,
        heading:"Target audience",
        description:"DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems."
    }
]


export default function Home(){

    const memberAction = ()=>{
        window.open(
            "https://gdsc.community.dev/accounts/login/?next=/nbn-sinhgad-school-of-engineering-pune/",
            "_blank"
        );
    }

    return (
            <div className={styles.root}>

                <div className={styles.overview}>
                    <div className={styles.leftCont}>
                        <div>
                            <p>Google Developer Student Clubs NBNSSOE</p>
                            <p>
                                <span style={{color:"#4b91f4"}}>G</span>
                                <span style={{color:"#f74037"}}>o</span>
                                <span style={{color:"#ffb806"}}>o</span>
                                <span style={{color:"#4b91f4"}}>g</span>
                                <span style={{color:"#ffb806"}}>l</span>
                                <span style={{color:"#f74037"}}>e </span>
                                Developer Student Clubs is a Developers program for university students to learn 
                                <span style={{color:"##fbbc12"}}> mobile </span>
                                and
                                <span style={{color:"#557dbf"}}> web development skills,</span>
                                <span style={{color:"#e1382b"}}> design thinking skills </span> 
                                and
                                <span style={{color:"#189e59"}}> leadership skills</span>
                                .
                            </p>
                            <button onClick={memberAction}>Become a member</button>
                        </div>
                    </div>
                    <div className={styles.rightCont}>
                        <img src={GDSCHOME} alt="diversity" />
                    </div>
                </div>


                <div className={styles.cards_root}>
                    <div className={styles.cards}>
                        {
                            cards_data.map((props)=>{
                                return <Card card_data={{...props,width:"280px",height:"315px"}} key={props.id}/>
                            })
                        }
                    </div>
                </div>

            </div>
    )
}