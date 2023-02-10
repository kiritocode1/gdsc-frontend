//---

import React from "react";

import Card from "../../components/card";
import { Sandpack } from "@codesandbox/sandpack-react";
import { Container , Image, Text, } from "@nextui-org/react";
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



const ClipLeft = () => {
    return (
        <div>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                Let's
            </Text>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
                weight="bold"
            >
                Make the Web
            </Text>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                weight="bold"
            >
                Prettier
            </Text>
        </div>
    )
}; 

const ClipRight = () => { 
    return (<>
        <Image src={bg_pattern}  css={{
            clipPath : "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
        }}  autoResize>
        
        </Image>  
    
    </>)
}



export default function Home(){


    return (
        <div className="hero-font">
            <div className={"flex items-center justify-center py-20"}>
                <ClipLeft />
                <ClipRight/>
            </div>
            <div className="md:flex mt-5 justify-evenly gap-2 w-full px-2 flex-wrap">
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