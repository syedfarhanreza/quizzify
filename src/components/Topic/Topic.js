import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
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
                    <button><Link to={`quiz/${id}`}>Start Quiz</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Topic;