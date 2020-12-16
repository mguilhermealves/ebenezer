
import React from 'react';
import Dashboard from '../../../layouts/Dashboard';
import Carousel from '../../../components/Carousel';


class Home extends React.Component {
    render() {
        return(
            <Dashboard>
                <Carousel></Carousel>
            </Dashboard>
        );
    }
}

export default Home;