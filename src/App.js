import './App.css';
import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {
	state = {
		users:[],
		loading: true 
	};
	async componentDidMount(){
		this.setState({ loading: true });
		const res = await axios.get('https://api.github.com/users');
		console.log(res.data);
		this.setState({ users: res.data, loading: false });
	}
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </Fragment>
    );
  }
}
export default App;
