import React from 'react';
import { toast } from 'react-toastify';
import './Option.css'

const Option = ({ option, correctAnswer }) => {
    const handling = () => {
        if (option === correctAnswer) {
            toast.success('Correct Answer!!!');
        }
        else {
            toast.error('Wrong Answer!!!')
        }
    }
    return (
        <div className='option-button'>

            <div>
                <input onClick={handling} type="radio" id={option} name="drone" value={option} />
                <label htmlFor={option}>{option}</label>
            </div>

        </div>
    );
};

export default Option;