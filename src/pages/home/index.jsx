//---

import React from "react";
import styles from "./index.module.css";
import GDSCHOME from "../../assets/gdsc-home.png";
import Card from "../../components/card";
import  basic from "../../assets/imagey/markus-spiske-Skf7HxARcoc-unsplash.jpg"; 
import basic2 from "../../assets/imagey/heihei.jpg"; 
import  basic3 from "../../assets/imagey/render.jpg"; 
import { Container, Text , Image, Spacer , Row, Col} from "@nextui-org/react";
import bg_pattern from "../../assets/imagey/Aare.svg"; 
// ---
const cards_data = [
    {
        id:1,
        icon:basic,
        heading:"Concept of DSC",
        description:"The DSC program is a grassroots channel through which Google provides development, mobile & web development skills for students, towards employability."
    },
    {
        id:2,
        icon:basic2,
        heading:"Why DSC?",
        description:"For students to learn development skills, solve problems through technology and inspire them to be world class developers and changemakers."
    },
    {
        id:3,
        icon:basic3,
        heading:"Target audience",
        description:"DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems."
    }
]


export default function Home(){

    // const memberAction = ()=>{
    //     window.open(
    //         "https://gdsc.community.dev/accounts/login/?next=/nbn-sinhgad-school-of-engineering-pune/",
    //         "_blank"
    //     );
    // }

    return (
            <div className="hero-font">

                {/* <div className={styles.overview}>
                    <div className={styles.leftCont}>
                        <div>
                            <p   className="text-red-800 animate-pulse">Google Developer Student Clubs NBNSSOE</p>
                            <p>
                                <span>G</span>
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
                </div> */}
            <Container xl>
                <Row gap={1}>
                    <Col>
                <Text h1>
                    Hello World , this is GDSC PUNE
                        </Text>
                
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio omnis eos ex velit. Deleniti, alias nam, repudiandae quae voluptate quis sequi consequuntur inventore omnis voluptatibus adipisci tempora ab eius ratione.
                </Text>
                    </Col>
                    
                <Col span={6}>
                        <Image
                            // css={{
                            //     transform: "rotate(-45deg)", 
                            // }}
                            width={1000}
                            height={1000}
                            objectFit="cover"
                            src={bg_pattern}
                        />
                </Col>
                </Row>
            </Container>
            
                    <div className="md:flex mt-5 justify-evenly gap-2 w-full px-2 flex-wrap">
                        {
                            cards_data.map((data)=>{
                                return <Card {...data} />
                            })
                        }
                    </div>


            </div>
    )
}