import React from 'react';
import Menu from '../components/Menu';

class Header extends React.Component {
    render() {
        return(
            <header>
                <Menu></Menu>
            </header>
        );
    }
}

export default Header;