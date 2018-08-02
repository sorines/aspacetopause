import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <h1>Contact Roberta</h1>
                            <FormGroup>
                                <Label for="exampleEmail">Name</Label>
                                <Input type="text" name="name" id="exampleEmail" placeholder="Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Message</Label>
                                <Input type="textarea" name="text" id="exampleText" placeholder="Write a message..." />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;