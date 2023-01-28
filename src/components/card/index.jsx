import React from "react";
// import styles from "./index.module.css";

// export default function Card(props){

//     return(

//         <div className={styles.card} style={{width:props.card_data.width,height:props.card_data.height}}>

//             <div className={styles.logo}>
//                 {props.card_data.icon}
//             </div>

//             <div className={styles.heading}>
//                 <p>{props.card_data.heading}</p>
//             </div>

//             <div className={styles.description}>
//                 <p>{props.card_data.description}</p>
//             </div>


//         </div>

//     )
// }

//---------------------------------------------------------------------


import { Card, Col, Text } from "@nextui-org/react";


const Cardy = ({heading , description , icon}) => (
  <div  className="w-98">
  <Card isHoverable isPressable>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }} >
      <Col>
        <Text size={30} weight="bold" transform="uppercase" color="$blue900">
          {heading}
        </Text>
        <Text h4 color="white">
          {description}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src={icon}
      objectFit="cover"
      width="100%"
      height={300}
      alt="Card image background"
      autoResize 
      className = "blur-sm"
    />
    </Card>
  </div>
);

export default Cardy; 