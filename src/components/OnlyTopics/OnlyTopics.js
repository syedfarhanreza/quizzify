import React from 'react';
import { useLoaderData } from 'react-router-dom';
import List from '../List/List';

const OnlyTopics = () => {
    const topics = useLoaderData();

    return (
        <div>
            <h1 className='header'>Quiz Topic List</h1>
            <div className='topics-container'>
                {
                    topics.data.map(topic => <List
                        key={topic.id}
                        topic={topic}
                    ></List>)
                }
            </div>
        </div>
    );
};

export default OnlyTopics;