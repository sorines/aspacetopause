import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Detail extends Component {

    state = {
        post: {}
    };

    componentDidMount() {
        API.getPost(this.props.match.params.id)
        .then(res => {
            // console.log(res.data);
            this.setState({ post: res.data })
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <main>
                <div>
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.blogPost}</p>
                </div>
            </main>
        );
    }
}

export default Detail;
