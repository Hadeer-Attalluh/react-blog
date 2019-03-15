import React from 'react';
import axios from 'axios';
import {PostCard} from '../Posts/Card';
import { debug } from 'util';

export class ViewUser extends React.Component{

    constructor()
    {
        super();
        this.state={
            userPosts:[],
            userId:Number
        }
    }
    componentDidMount()
    {
        const id = this.props.match.params.id;
        this.setState({userId: id});
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) =>{
            // handle success
            this.setState({ userPosts: response.data });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    render()
    {
        console.log(this.state);
        return(
            this.state.userPosts.map((Element)=><PostCard {...Element}/> ) 
            
        )
    }
}