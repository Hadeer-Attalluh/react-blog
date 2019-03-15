// import CardGroup from 'react-bootstrap';
import {PostCard} from './Card';
import React from 'react';
import {Row, Button,Container} from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class PostListing extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            Posts:[]
        }
    }
    componentDidMount()
    {
        const self= this;
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            // handle success
            self.setState({ Posts: response.data });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    render() {
        // const {posts} = this.props;
        const posts = this.state.Posts;
        console.log(posts);
        return (
            <Container>
            <Row noGutters={true}>
                <Link to='posts/add' className="m-2 btn btn-primary">Add Post</Link>
            </Row>
            <Row noGutters={true}>
                <ul className="list-unstyled">
                    {posts.map((Element) => <PostCard {...Element} />)}
                </ul>
            </Row>
            </Container>
        )
    }
}