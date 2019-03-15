import React from 'react';
import { Col,Card, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
// import ViewUser from './Users/View';

export default function UserCard(props)
{
  const { id,username, phone, name, email, address, website, company } = props;
  return (
    <Col key={phone}>
      <Card>
        <Card.Img variant="top" src="https://www.lycatv.tv/img/web/avatar_1.png" alt="User Photo" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>User Name: {username}</Card.Text>
          <Card.Text>Email: {email}</Card.Text>
          <Card.Text>Website: {website}</Card.Text>
          <Card.Text>Address: {address.street} St.</Card.Text>
          <Card.Text>Company: {company.name}</Card.Text>
          <Link to={`/users/veiw/${id}`} className="btn btn-primary">View Posts</Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
