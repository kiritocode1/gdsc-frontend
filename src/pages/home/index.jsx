//---

import React from "react";

import Card from "../../components/card";
import { Sandpack } from "@codesandbox/sandpack-react";
import { Container , Image, Text, } from "@nextui-org/react";

import Blobs from "../../assets/Blobs/Blobs"; 
import { useSpring , animated as a  } from "@react-spring/web";

import Cute_Avatars from "../../assets/avatars/avatats_cute/cute.js"; 




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



const ClipLeft = () => {
    return (
        <div className={"absolute text-center z-10 flex flex-col"}>
            <span>

            </span>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, #109D58 -20%, #FABC05 50%",
                }}
                weight="bold"
            >
                Google Developers 
            </Text>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, #E94436 -20%, #4385F3 100%",
                }}
                weight="bold"
            >
                Students Club  
            </Text>
            <Text
                size={60}
                css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                
            >
                Sinhgad Pune 
            </Text>
        </div>
    )
}; 

const ClipRight = () => {
    const style = useSpring({
        from: { 
            opacity : 0
        }, 
        to: { 
            opacity:1
        }, 
        config:{duration: 1000}
    })
    return (
        <div className={"absolute z-0  flex  "}>
            {
                Cute_Avatars.map((item, index) => <a.div style={style}>
                    <img src={item} alt="hello world " />
                </a.div>)
            }
        </div>)
};


export default function Home(){


    return (
        <div className="hero-font">
            <div className={"flex items-center justify-center py-20 relative my-40"}>
                <ClipLeft />
                <ClipRight/>
            </div>
            <div className="mt-5  w-full grid  grid-flow-auto md:grid-cols-2">
                {
                    cards_data.map((data) => {
                        return <Card {...data} />
                    })
                }
            </div>
            <Sandpack template="angular" theme="dark" />
        </div>
    )
}; 