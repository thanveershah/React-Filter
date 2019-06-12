import React from "react";
import { Card, CardImg, CardBody, Badge, Button } from "reactstrap";

export default class ProductList extends React.Component {
  render() {
    return (
      <Card>
        <CardImg top src="../images/img-1.jpg" alt="Card image cap" />
        <CardBody>
          <div className="product-box mb-3">
            <div className="details-block d-flex justify-content-between">
              <h6>Product :</h6>
              <h6>{this.props.item.name}</h6>
            </div>
            <div className="details-block d-flex justify-content-between">
              <h6>Brand :</h6>
              <h6>{this.props.item.brand}</h6>
            </div>
            <div className="details-block d-flex justify-content-between">
              <h6>Category :</h6>
              <h6>
                <Badge color="success" pill>
                  {this.props.item.category}
                </Badge>
              </h6>
            </div>
            <div className="details-block d-flex justify-content-between">
              <h6>Price :</h6>
              <h6>{this.props.item.price}</h6>
            </div>
          </div>
          <Button color="primary">Add to Cart</Button>
        </CardBody>
      </Card>
    );
  }
}
