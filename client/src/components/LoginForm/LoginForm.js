import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { auth } from '../../firebase';

const SignInPage = ({ history }) =>
    <div>
        <h1>SignIn</h1>
        <LoginForm history={history} />
        </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                history.push("/");
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

render() {

    const {
        email,
        password,
        error,
    } = this.state;

    const isInvalid =
        password === '' ||
        email === '';

        return (
            <Container>
                <Row>
                    <Col md="6" className="float-center">
                        <form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    value={email}
                                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                                    type="text"
                                    placeholder="Email Address"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    value={password}
                                    onChange={event => this.setState(byPropKey('password', event.target.value))}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    id="examplePassword"
                                />
                            </FormGroup>
                            <Button disabled={isInvalid} type="submit">Sign In</Button>
                            {error && <p>{error.message}</p>}
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LoginForm;