import React, { useState } from 'react';

const Accordion = ( { items }) => {
    // Using this method for function components to utilize useState
    // Create an array with elements 
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
        // Setter function always initiates the function over
        // but useState does not replace the set value
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
        <React.Fragment key={item.title}>
            <div className={`title ${active}`}
            onClick={() => onTitleClick(index)}>
                <i className="dropdown icon"></i>
                    {item.title}
            </div>
            <div className={`content ${active}`}>
                    <p>{item.content}</p>
            </div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
}

export default Accordion;