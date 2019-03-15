import React from 'react';
import UserListing from './Users/List';
import PostListing from './Posts/List';
import {ViewUser} from './Users/View';
import {AddUser} from './Users/Add';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import BlogNavBar from './Header/navBar';
class Blog extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     Users: [],
        //     Posts: []
        // }
    }
    render() {
        return (

            <Router>
                <>
                    <BlogNavBar />
                    <Switch>
                        {/* <Route exact path="/" component={UserListing} /> */}
                        <Route exact path="/users" component={UserListing} />
                        <Route exact path="/users/add" component={AddUser} />
                        <Route exact path="/users/veiw/:id" component={ViewUser} />
                        <Route exact path="/posts" component={PostListing} />
                        {/* <Route exact path="/posts/add" component={AddPost} /> */}
                    </Switch>
                </>
            </Router>

            // return(
            // <>
            // <BlogNavBar/>
            // <Container fluid={true}>
            // <Row>
            //     <UserListing users={this.state.Users}/>
            // </Row>
            // <Row>
            //     <PostListing posts={this.state.Posts}/>
            // </Row>
            // </Container>
            // </>               
        )
    }

}
export default Blog;