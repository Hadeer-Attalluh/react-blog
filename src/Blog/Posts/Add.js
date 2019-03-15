import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';

export class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            userId: "",
            title: "",
            body: "",
        }
        this.formSchema = new SimpleSchema({
            id: SimpleSchema.Integer,
            userId: SimpleSchema.Integer,
            title: { type: String, min: 1, max: 255 },
            body: {type: String, min: 1, max: 500 }
        });
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.formSchema.validate(this.state);
        console.log(this.formSchema.isValid());
        console.log(this.formSchema.validationErrors());
    }
    handleChange(e) {
        const value = (e.target.name === ("id"||"userId")) ? Number(e.target.value) : e.target.value;
        this.setState({ [e.target.name]: value });
    }
    render() {
        return (
            <Container className="p-3">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="userID">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="number" placeholder="Enter user Id" name="userId" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="postID">
                        <Form.Label>Post ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter post id" name="id" onChange={this.handleChange} />
                    </Form.Group>
           
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Post Title" name="title" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="body">
                        <Form.Label>Body</Form.Label>
                        <Form.Control type="text" placeholder="Body" name="body" onChange={this.handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Add</Button>
                </Form>
            </Container>
        );
    }
}
