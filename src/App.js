import './App.css';
import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </Fragment>
    );
  }
}
export default App;
