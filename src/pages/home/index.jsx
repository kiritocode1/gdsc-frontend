//---

import React from "react";
import styles from "./index.module.css";
import GDSCHOME from "../../assets/gdsc-home.png";
import Card from "../../components/card";

import { Container, Text , Image, Spacer , Row, Col} from "@nextui-org/react";
import bg_pattern from "../../assets/imagey/Aare.svg"; 

const cards_data = [
    {
        id:1,
        
        heading:"Concept of DSC",
        description:"The DSC program is a grassroots channel through which Google provides development, mobile & web development skills for students, towards employability."
    },
    {
        id:2,
        
        heading:"Why DSC?",
        description:"For students to learn development skills, solve problems through technology and inspire them to be world class developers and changemakers."
    },
    {
        id:3,
    
        heading:"Target audience",
        description:"DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems."
    }
]


export default function Home(){


    return (
            <div className="hero-font">

            <Container xl>
                        <Image
                            autoResize
                            src={bg_pattern}
                            className="w-full"
                        />
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