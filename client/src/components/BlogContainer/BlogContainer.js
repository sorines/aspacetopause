import React, { Component } from 'react';
import { Container, Row, Col, CardImg } from 'reactstrap';
import Post from "./Post";

class Blog extends Component {

    render() {
        return (
            <Container className="blog-container">
                <Row>
                    <Col md="9" className="float-center">
                    <CardImg bottom width="100%" src="https://raw.githubusercontent.com/sorines/aspacetopause/master/assets/images/pic5.jpg" alt="Card image cap" />

                        <Post />
                    </Col>
                </Row>
                <Row>
                    <Col md="9" className="float-center">
                    <CardImg bottom width="100%" src="https://raw.githubusercontent.com/sorines/aspacetopause/master/assets/images/pic6.jpg" alt="Card image cap" />
                        <Post />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;