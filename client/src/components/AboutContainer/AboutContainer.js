import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Contact from "./Contact";

class AboutContainer extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Contact />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutContainer;