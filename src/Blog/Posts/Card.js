import React from 'react';
import { Media } from 'react-bootstrap';

export function PostCard(props) {
    const { userId, id, title, body } = props;
    return (
        <Media as="li" key={userId}>
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
            </Media.Body>
        </Media>
    )
}

