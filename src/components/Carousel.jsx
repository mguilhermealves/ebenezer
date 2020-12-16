import React from 'react';
import { Carousel } from 'react-bootstrap';
import Imagem1 from '../resources/images/img1.jpg';
import Imagem2 from '../resources/images/img2.jpg';
import Imagem3 from '../resources/images/img3.jpg';

class Slide extends React.Component {
    render() {
        return(
            <Carousel fade={true}>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={Imagem1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={Imagem2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={Imagem3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        );
    }
}

export default Slide;