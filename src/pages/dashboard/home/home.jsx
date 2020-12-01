import React from 'react';
import { Card } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return(
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </Card.Body>
            </Card>
        );
    }
}

export default Home;