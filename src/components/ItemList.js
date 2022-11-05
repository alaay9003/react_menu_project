import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
const ItemsList = ({ ItemData }) => {
  return (
    <Row>
      {ItemData.length >=1
        ? ItemData.map((item) => {
            return (
              <Col id={ItemData.id} sm="12" className="mb-3">
                <Card className="d-flex flex-row">
                  <Card.Img variant="top" src={item.imgUrl} className="img-item" />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title">{item.title}</div>
                      <div className="item-price"> {item.price}</div>
                    </Card.Title>
                    <Card.Text className="item-description">
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        : null}
    </Row>
  );
};

export default ItemsList;
