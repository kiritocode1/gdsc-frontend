import React from "react";


import { Card, Col, Text } from "@nextui-org/react";


const Cardy = ({heading , description , icon}) => (

  <Card isHoverable isPressable>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }} >
      <Col>
        <Text  weight="bold" transform="uppercase" color="$black500">
          {heading}
        </Text>
      </Col>
      </Card.Header>
      <Card.Body>
                <Text h4 color="secondary">
          {description}
        </Text>
      </Card.Body>
    </Card>

);

export default Cardy; 