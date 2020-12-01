import React from 'react';

class Dashboard extends React.Component {
    render() {
        return(
            <main className="main-content">
                <div className="container">
                    { this.props.children }
                </div>
            </main>
        );
    }
}