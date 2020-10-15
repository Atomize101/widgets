import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

const items = [
	{
		title: 'React',
		content: 'Front end Javascript',
	},
	{
		title: 'Using React',
		content: 'It is nice',
	},
	{
		title: 'Lets learn React',
		content: 'Starting now',
	},
];

const options = [
	{
		label: 'Color Red',
		value: 'red',
	},
	{
		label: 'Color Green',
		value: 'green',
	},
	{
		label: 'Color Blue',
		value: 'blue',
	},
];

const showAccordion = () => {
    if(window.location.pathname === '/') {
        return <Accordion items={items} />
    }
}

const showList = () => {
    if(window.location.pathname === '/list') {
        return <Search />
    }
}

const showDropdown = () => {
    if(window.location.pathname === '/dropdown') {
        return <Dropdown />
    }
}

const showTranslate = () => {
    if(window.location.pathname === '/translate') {
        return <Translate />
    }
}

export default () => {
	return (
		<div>
           <Route path="/">
               <Accordion items={items} />
           </Route>
           <Route path="/list">
               <Search />
           </Route>
           <Route path="/dropdown">
               <Dropdown />
           </Route>
           <Route path="/translate">
               <Translate />
           </Route>
		</div>
	);
};
