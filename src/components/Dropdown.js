import React from 'react';

const Dropdown = ({ options, selected, onSelectChange }) => {
	const renderedOptions = options.map((options) => {
		return (
			<div key={options.value} className="item" onClick={()=> onSelectChange(options)}>
				{options.label}
			</div>
		);
	});
	return (
		<div className="ui form">
			<div className="field">
				<label className="label">Select a Color</label>
				<div className="ui selection dropdown visible active">
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className="menu visible transition">{renderedOptions}</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
