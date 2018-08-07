import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Post from "./Post";

class Blog extends Component {

    render() {
        return (
            <Container className="blog-container">
                <Row>
                    <Col md="9" className="float-center">
                        <Post />
                    </Col>
                </Row>
                <Row>
                    <Col md="9" className="float-center">
                        <Post />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;