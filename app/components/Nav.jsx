var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function () {
		return (
			
			<div>
				<h2>nav component</h2>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:"bold", fontSize:"large"}}>Get Weather</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={{fontWeight:"bold", fontSize:"large"}}>About</Link>
				<Link to="/example" activeClassName="active" activeStyle={{fontWeight:"bold", fontSize:"large"}}>Example</Link>
			</div>
		);
	}
});

module.exports = Nav;
