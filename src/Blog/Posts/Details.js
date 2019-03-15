import React from 'react';
import { Button, Card ,Media} from 'react-bootstrap';
import axios from 'axios';

export class PostDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            postId: 0,
            post: {},
            userId: 0,
            user: {}
        }
    }
    componentDidMount() {
        debugger;
        const postId = this.props.match.params.id;
        const userId = this.props.match.params.userId;
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((response) => {
                // handle success
                this.setState({ comments: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => {
                // handle success
                this.setState({ post: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // handle success
                this.setState({ users: response.data.filter((element) => element.id === userId) });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    render() {
        return (
            <Card className="text-center">
                <Card.Header>
                    <Media>
                        <img
                            width={32}
                            height={32}
                            className="mr-3 rounded-circle"
                            src="https://www.lycatv.tv/img/web/avatar_1.png"
                            // src="http://heartfoundation.org.au/images/uploads/news/HF-news-thumbnail.jpg" post
                            alt="user picture"
                        />
                        <Media.Body>
                            <h5>{this.state.user.name}</h5>
                        </Media.Body>
                    </Media>
                </Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src="http://heartfoundation.org.au/images/uploads/news/HF-news-thumbnail.jpg" alt="post imgae" />
                    <Card.Title>{this.state.post.title}</Card.Title>
                    <Card.Text>
                        {this.state.post.body}
                    </Card.Text>
                    <ul className="list-unstyled">
                        <Media as="li" className="m-1">
                            <img
                                width={32}
                                height={32}
                                className="mr-3 rounded-circle"
                                src="https://www.lycatv.tv/img/web/avatar_1.png"
                                alt="user picture"
                            />
                            <Media.Body>
                                <h5>{this.state.comments.name}</h5>
                                <p><b>{this.state.comments.enail}</b></p>
                                <p>{this.state.comments.body}</p>
                            </Media.Body>
                        </Media>
                    </ul>
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
        );
    }
}