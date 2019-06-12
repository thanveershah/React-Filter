import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class WebDevelopment extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col sm="4">
                        <h1>Web Developmemt</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}