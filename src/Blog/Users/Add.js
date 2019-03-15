import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';

export class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            username: "",
            email: "",
            address: "",
            phone: "",
            website: "",
            company: ""
        }
        this.formSchema = new SimpleSchema({
            id: SimpleSchema.Integer,
            name: { type: String, min: 3, max: 50 },
            username: String,
            // email: { type: String, regEx: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ },
            email: { type: String, regEx: SimpleSchema.RegEx.Email},           
            address: { type: String , optional: true },
            phone: String,
            website: { type: String, optional: true },
            company: { type:  String , optional: true }
        });
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.formSchema.validate(this.state);
        console.log(this.formSchema.isValid());
        console.log(this.formSchema.validationErrors()+"dkjhuyd");
    }
    handleChange(e) {
        const value = (e.target.name === "id") ? Number(e.target.value) : e.target.value;
        this.setState({ [e.target.name]: value });
    }
    render() {
        return (
            <Container className="p-3">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="userID">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="number" placeholder="Enter Id Number" name="id" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="user-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" name="name" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="userName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="This name will be shown to public" name="username" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="userEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="website">
                        <Form.Label>Website</Form.Label>
                        <Form.Control type="text" placeholder="Enter website URL" name="website" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" name="address" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="" placeholder="Phone Number" name="phone" onChange={this.handleChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Add</Button>
                </Form>
            </Container>
        );
    }
}
