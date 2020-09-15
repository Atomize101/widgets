import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'React',
        content: 'Front end Javascript'
    },
    {
        title: 'Using React',
        content: 'It is nice'
    },
    {
        title: 'Lets learn React',
        content: 'Starting now'
    }
];

export default () => {
    return <div>
        <Search />
    </div>
};

