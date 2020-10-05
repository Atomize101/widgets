import React, {useState} from 'react';

const Dropdown = ({ options, selected, onSelectChange }) => {
    
    const [open, setOpen] = useState(false);

    const renderedOptions = options.map((options) => {

        if(options.value === selected.value) {
            return null;
        }
        
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
				<div onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
