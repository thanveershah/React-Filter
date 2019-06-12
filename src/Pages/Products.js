import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

import ProductList from "./ProductList";

export default class Products extends Component {
  state = {
    inputs: "",
    key: "",
    test: "",
    filterProduct: [],
    product: [
      {
        id: 1,
        name: "xiaomi LED TV 4 Pro",
        brand: "xiaomi",
        category: "Electronics",
        price: "19,000"
      },
      {
        id: 2,
        name: "Any Bravia 80",
        brand: "Sony",
        category: "Electronics",
        price: "22,000"
      },
      {
        id: 3,
        name: "Nivia Storm",
        brand: "Nivia",
        category: "Sports",
        price: "590"
      },
      {
        id: 4,
        name: "Adidas Easy Vulk 2.0",
        brand: "Adidas",
        category: "Shoes",
        price: "1499"
      }
    ]
  };

  handleChange = event => {
    this.setState({
      inputs: event.target.value
    });
  };

  componentDidMount() {
    this.setState({
      filterProduct: this.state.product
    });
  }

  check = e => {
    e.preventDefault();
    let productUpdated = this.state.product;
    productUpdated = productUpdated.filter(data => {
      let updatedData = data.name;
      return updatedData.indexOf(this.state.inputs) !== -1;
    });

    this.setState({
      filterProduct: productUpdated
    });
  };

  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col md="4">
            <Form>
              <FormGroup>
                <input
                  type="text"
                  name="test"
                  value={this.state.inputs}
                  onChange={this.handleChange}
                  placeholder="Search Products.."
                  onKeyUp={this.check}
                />
                <button>Add</button>
              </FormGroup>
            </Form>
          </Col>
        </Row>

        <Row className="mt-3">
          {this.state.filterProduct.map(item => (
            <Col md="3" key={item.id}>
              <ProductList item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
