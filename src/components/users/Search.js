import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState('');
	const { clearUsers, users, searchUsers } = githubContext;
	const { setAlert } = alertContext;

	const onChange = e => setText(e.target.value);

	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlert('Please enter something', 'light');
		} else {
			searchUsers(text);
			setText('');
		}
	}

	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input type='text' name='text' placeholder='Search Users...' value={text} onChange={onChange} />
				<input type='submit' value='search' className='btn btn-dark btn-block' />
			</form>
			{users.length > 0 && (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>)}
		</div>
	)
}

Search.propTypes = {
	setAlert: PropTypes.func.isRequired
};
export default Search;
