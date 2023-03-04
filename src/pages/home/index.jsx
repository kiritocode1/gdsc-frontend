//---

import React, {useState} from "react";

import Card from "../../components/card";
import { Sandpack } from "@codesandbox/sandpack-react";
import { Container , Image, Text,Button, } from "@nextui-org/react";

import Blobs from "../../assets/Blobs/Blobs"; 
import { useSpring , animated as a  } from "@react-spring/web";

import Cute_Avatars from "../../assets/avatars/avatats_cute/cute.js"; 
import {Hero_images}  from "../../assets/heros";
import { AiFillPlayCircle } from "react-icons/ai";


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
    const style2 = useSpring({
        from: {
            opacity: 0
            , x: 0, y : 0 
        },
        to: {
            opacity: 1,
            x: 170, y: 50
        },
        delay:0
    }); 
        const style1 = useSpring({
        from: {
            opacity: 0
            , x: 0, y : 0 
        },
        to: {
            opacity: 1,
            x: -200, y: 100
            },
        delay:200
         
        }); 
    const style3 = useSpring({

        from: {
            opacity: 0
            , x: 0, y: 0
        },
        to: {
            opacity: 1,
            x: -210, y: -50
        },
         delay:400
    });
    const style4 = useSpring({
                from: {
            opacity: 0
            , x: 0, y: 0
        },
        to: {
            opacity: 1,
            x: 100, y: 160
        },
        delay:600
    })
    const emojicons = [...Cute_Avatars]
    return (
        <div className={ " z-0   flex items-center justify-center relative w-full" }>
            <a.img src={ emojicons[ 3 ] } alt="emoticons" style={ style1} className={"z-0 absolute w-20 h-20"} />
            <a.img src={ emojicons[ 0] } alt="emoticons"style={ style2} className={" z-10 absolute w-[5.4rem] h-[5.2rem]"} />
            <a.img src={ emojicons[ 1 ] } alt="emoticons" style={ style3} className={"z-20 absolute w-20 h-20"}  />
            <a.img src={ emojicons[ 2 ] } alt="emoticons" style={ style4} className={"z-30 w-20 h-20 "} />
            
        </div>)
};


export default function Home(){

    const main_text_style = useSpring({

        from: { opacity: 0 }, 
        opacity: 1, 
        delay:1000
    });
    const [ isHovering, setH ] = useState(false);
    const [ isHovering2, setH2 ] = useState(false); 
    const [ isHovering3, setH3 ] = useState(false); 
    
    const nice_android_animation = useSpring({
        rotateZ: isHovering? -8: 0
    });

    const nice_web_animation = useSpring({
        rotateZ: isHovering2? 8: 0
    });

        const nice_ai_animation = useSpring({
        rotateZ: isHovering3? -8: 0
    });
    return (
        <div className="hero-font">
            <div className={"flex items-center justify-center py-20 relative my-40"}>
                <ClipLeft />
                <ClipRight/>
            </div>




            <a.div className={"w-full text-center text-3xl mb-20"} style={main_text_style }>
            <div>university students to learn mobile and web development skills </div>, design thinking skills and leadership skills
        </a.div>







            <Text h2 className={"mx-2 "}  colour="primary"> Why we need GDSC ?  </Text>
            <div className="mt-5  w-full grid  grid-flow-auto md:grid-cols-2">
                {
                    cards_data.map((data) => {
                        return <Card {...data} />
                    })
                }
            </div>

            <div className={"w-full h-80 my-10"}>
                <div className={"mb-20"}>
                    <Text size={ 40 }>What we are excited about!!!</Text>
                    <Text size={ 20 }>Opportunities to learn</Text>
            </div>
                <div className={"flex justify-evenly items-center w-full "}>
                    <div className={ "md:w-full md:flex sm:w-0" }>
                        <img src={Hero_images["android"]} alt="android" className={"w-96"}/>
                    </div>
        
                    <div className={ "w-full" }>
                        <div className={"flex items-center gap-2"}>
                            <Text h1 >Learn @angular</Text>
                            <a href="https://codelabs.developers.google.com/?cat=Web" target={"_blank"} rel="noreferrer"><Button shadow auto color="success"  ><AiFillPlayCircle className={"text-3xl"}/> codelabs</Button></a>
                        </div>
Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience.

                    
                    
                    </div>
                </div>
            </div>

            <Sandpack template="angular" />
            <div className={ "w-full h-96 flex items-center justify-center" }>
                                    <div className={ "w-full" }>
                        <div className={"flex items-center gap-2"}>
                            <Text h1 >Learn android dev</Text>
                            <a href="https://codelabs.developers.google.com/?cat=Android" target={"_blank"} rel="noreferrer"><Button shadow auto color="primary"  ><AiFillPlayCircle className={"text-3xl"}/> codelabs</Button></a>
                        </div>
Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.

                    
                    </div>

                <div className={ "w-full" } onMouseEnter={ () => setH(true) } onMouseLeave={ () => setH(false)}>
                    <a.img src={ Hero_images[ "web" ] } alt="android" className={ "" } style={nice_android_animation}  /></div>


            </div>
            
            <div className={ "flex w-full h-96" }>
                <div className="w-full flex justify-end" onMouseEnter={ () => setH2(true) } onMouseLeave={ () => setH2(false)}>
                <a.img src={ Hero_images[ "cloud" ] } className={ "" } style={nice_web_animation}  /></div>
                                                    <div className={ "w-full" }>
                        <div className={"flex items-center gap-2"}>
                            <Text h1 >Learn Cloud </Text>
                            <a href="https://codelabs.developers.google.com/?cat=Android" target={"_blank"} rel="noreferrer"><Button shadow auto color="warning"  ><AiFillPlayCircle className={"text-3xl"}/> codelabs</Button></a>
                        </div>
For passionate developers who want to stay relevant in a cloud first world where businesses demand for agility and innovation and prompt rise of cloud-native applications to bridges gaps between data, insight, and action.
                    
                    </div>

                
            </div>

            
                        <div className={ "flex w-full h-96" }>

                                                    <div className={ "w-full" }>
                        <div className={"flex items-center gap-2"}>
                            <Text h1 >Learn Machine learning </Text>
                            <a href="https://codelabs.developers.google.com/?cat=Android" target={"_blank"} rel="noreferrer"><Button shadow auto color="error"  ><AiFillPlayCircle className={"text-3xl"}/> codelabs</Button></a>
                        </div>
For passionate developers who want to stay relevant in a cloud first world where businesses demand for agility and innovation and prompt rise of cloud-native applications to bridges gaps between data, insight, and action.
                    
                    </div>

                                <div className="w-full flex justify-start" onMouseEnter={ () => setH3(true) } onMouseLeave={ () => setH3(false)}>
                <a.img src={ Hero_images[ "ai" ] } className={ "w-60" } style={nice_ai_animation}  /></div>
            </div>


        </div>
    )
}; 