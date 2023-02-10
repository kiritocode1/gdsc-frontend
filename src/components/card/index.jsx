import React, {useState} from "react";

import { useSpring , animated as a  } from "@react-spring/web";

import { Card, Col, Text } from "@nextui-org/react";


const Cardy = ({ heading, description, icon }) => {
  const [isHoverActive, setisHoverActive] = useState(false); 
  const propsMainText = useSpring({
    to: {
      opacity: isHoverActive ? 1 : 0
    }
  }); 
  const propsMainDesc = useSpring({
        to: {
      opacity: isHoverActive ? 1 : 0
    }, 
    config: {
      delay: 4000, 
      duration: 500
    }
  }); 
  return(
    <div className="w-[30rem]" onMouseEnter={() => setisHoverActive(true)} onMouseLeave={()=>setisHoverActive(false)}>
      <Card isHoverable isPressable  >
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <a.div style={propsMainText} className="text-5xl font-extrabold font-sans">
              {heading}
            </a.div>
            <a.div style={propsMainDesc} className="text-3xl font-bold">
              {description}
            </a.div>  
          </Col>
        </Card.Header>
        <Card.Image
          src={icon}
          objectFit="fill"
          width="100%"
          height={340}
          alt="Card image background"
          className={`${isHoverActive?"blur-lg":""}`}
        />
      </Card>
    </div>

  )
};

export default Cardy; 