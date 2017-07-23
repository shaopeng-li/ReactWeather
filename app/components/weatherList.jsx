var React = require('react');

var WeatherList = React.createClass({
	render: function () {
		var {temp, location} = this.props;

		return (
			<div>
				<p>it is {temp} in {location}</p>
			</div>
		);
	}
});

module.exports = WeatherList;