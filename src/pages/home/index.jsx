//---

import React from "react";

import Card from "../../components/card";
import { Sandpack } from "@codesandbox/sandpack-react";
import { Container, Text , Image, Spacer , Row, Col} from "@nextui-org/react";
import bg_pattern from "../../assets/imagey/Aare.svg"; 
import Blobs from "../../assets/Blobs/Blobs"; 
const cards_data = [
    {
        id:1,
        icon : Blobs[0],
        heading:"Concept of DSC",
        description:"The DSC program is a grassroots channel through which Google provides development, mobile & web development skills for students, towards employability."
    },
    {
        id:2,
        icon : Blobs[1],
        heading:"Why DSC?",
        description:"For students to learn development skills, solve problems through technology and inspire them to be world class developers and changemakers."
    },
    {
        id: 3,
        icon :Blobs[2], 
        heading:"Target audience",
        description:"DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems."
    }
]


export default function Home(){


    return (
        <div className="hero-font">


            <Container xl className="flex items-center  justify-end  relative">
                <div className=" absolute inset-1/3 font-mono text-6xl z-20 bg-white mt-20">
                    hello  world 
                    work in progress 😭
                </div>
                        <Image
                            autoResize
                            src={bg_pattern}
                            className="w-full z-10 absolute"
                />
                </Container>

                    <div className="md:flex mt-5 justify-evenly gap-2 w-full px-2 flex-wrap">
                        {
                            cards_data.map((data)=>{
                                return <Card {...data} />
                            })
                        }
            </div>
            <Sandpack template="angular" theme="dark"/>
            </div>
    )
}