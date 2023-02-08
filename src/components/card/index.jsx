import React from "react";


import { Card, Col, Text } from "@nextui-org/react";


const Cardy = ({heading , description , icon}) => (
<div className="w-[35rem]">
<Card isHoverable isPressable >
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={40} weight="bold" transform="uppercase" color="$black500" className="  hover:visible">
          {heading}
        </Text>
        <Text h4 color="black">
          {description}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src={icon}
      objectFit="fill"
      width="100%"
      height={340}
        alt="Card image background"
        className="hover:blur-lg"
    />
  </Card>
</div>
);

export default Cardy; 