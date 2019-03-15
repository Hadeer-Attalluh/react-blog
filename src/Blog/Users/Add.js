import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';

export class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Container className="p-3">
                <Form>
                    <Form.Group controlId="userID">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="number" placeholder="Enter Id Number" />
                    </Form.Group>

                    <Form.Group controlId="user-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" />
                    </Form.Group>

                    <Form.Group controlId="userName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="This name will be shown to public" />
                    </Form.Group>

                    <Form.Group controlId="userEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="website">
                        <Form.Label>Website</Form.Label>
                        <Form.Control type="text" placeholder="Enter website URL" />
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="" placeholder="Phone Number" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Add</Button>
                </Form>
            </Container>
        );
    }
}
