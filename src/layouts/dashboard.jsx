import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-layout">
        <Header></Header>

        <main className="main-content">
          <div className="container">
            { this.props.children }
          </div>
        </main>

      <Footer></Footer>
      </div>
    );
  }
}

export default Dashboard;
