import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Post extends Component {

    state = {
        posts: [],
        title: "",
        blogPost: "",
        date: ""
    };

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        API.getPosts()
        .then (res => {
            // console.log(res);
            this.setState({ posts: res.data, title: "", blogPost: "", date: "" })
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <React.Fragment>
                {this.state.posts.length ? (
                <React.Fragment>
                    {this.state.posts.map(post => (
                    <Card key={post._id} id={post._id}>
                        <CardBody>
                            <CardTitle className="title">{post.title}</CardTitle>
                            <CardSubtitle>{post.date}</CardSubtitle>
                            <CardText>{post.blogPost}</CardText>
                            <Button><Link to={"/posts/" + post._id}>Read More...</Link></Button>
                        </CardBody>
                    </Card>
                    ))}
                </React.Fragment>
                ) : (
                    <h3>No Posts to Display</h3>
                )}
            </React.Fragment>
        );
    }
}

export default Post;
