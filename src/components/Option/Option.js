import React from 'react';
import './Option.css'

const Option = ({ option }) => {

    return (
        <div className='option-button'>


            <input type="radio" id="topping" name="topping" value={option} />{option}


        </div>
    );
};

export default Option;