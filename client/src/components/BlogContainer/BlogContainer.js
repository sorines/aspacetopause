import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Post from "./Post";

class Blog extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Post />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Post />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;