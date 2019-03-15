import React from 'react';
import { Media } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export function PostCard(props) {
    const { userId, id, title, body } = props;
    // debugger;
    return (
        <Media as="li" key={userId} className="m-1">
            <img
                width={64}
                height={64}
                className="mr-3"
                src="http://heartfoundation.org.au/images/uploads/news/HF-news-thumbnail.jpg"
                alt="Post Picture"
            />
            <Media.Body>
                <h5>{title}</h5>
                <p>
                    {body}
                </p>
            <Link to={`posts/${id}/userId/${userId}/details`} className="btn btn-primary">View Post Details</Link>
            </Media.Body>
        </Media>
    )
}

