import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import profileImage from '../../assets/img/roberta.jpg';

class Contact extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col md="6" className="text-center">
                        <img src={profileImage} width="70%" />
                    </Col>
                    <Col md="6">
                        <div>
                            <h3>About Roberta</h3>
                            {/* <hr /> */}
                            <p>Roberta is a Licensed Marriage & Family Therapist who is particularly interested in the following: Individuals going through life transitions (i.e., graduate students, students transitioning from middle school to high school, new employment, loss of employment, loss of friends or family, etc.). Furthermore, she is also interested in working with people that desire more authentic and intimate relationships, how to deal with pressures of society, and individual and family crisis that are unique to each individual. Roberta loves working with individuals, of all ages, living with anxiety.</p>
                        </div>
                        <Form>
                            <h3>Contact</h3>
                            {/* <hr /> */}
                            <FormGroup>
                                {/* <Label for="exampleEmail">Name</Label> */}
                                <Input type="text" name="name" id="exampleEmail" placeholder="Name" />
                            </FormGroup>
                            <FormGroup>
                                {/* <Label for="exampleEmail">Email</Label> */}
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                {/* <Label for="exampleText">Message</Label> */}
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