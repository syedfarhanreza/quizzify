import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ topic }) => {
    const { id, name, logo, total } = topic;

    return (
        <div className='topic-container'>
            <div className='img-container'>
                <img src={logo} alt=""></img>
            </div>
            <div className='details-container'>
                <h2>Quiz On {name}</h2>
                <div>
                    <p>Total Quiz : {total}</p>
                </div>
            </div>
        </div>
    );
};

export default List;