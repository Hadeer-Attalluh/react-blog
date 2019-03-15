import CardGroup, { Container, Button } from 'react-bootstrap';
import UserCard from './Card';
import React from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
export default class UserListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        }
    }
    componentDidMount() {
        const self = this;
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                self.setState({ Users: response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    handleChange(user)
    {
        return (e)=>{

        }
    }
    render() {
        // const { users } = this.props;
        const users = this.state.Users;
        console.log(users);
        return (
            <Container>
                <Row noGutters={true}>
                    <Link to="users/add" className="btn btn-primary m-2">Add User</Link>
                </Row>
                <Row>
                    {users.map((Element) => <UserCard {...Element} />)}
                </Row>
            </Container>
        )
    }
}