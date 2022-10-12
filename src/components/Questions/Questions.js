import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Option from '../Option/Option';
import './Questions.css';

const Questions = ({ quiz }) => {
    const { question, correctAnswer } = quiz;
    const seeAnswer = () => {
        alert(correctAnswer);
    }
    return (
        <div className='question-section'>
            <div className='question-answer'>
                <div>
                    <h3 className='question'>Q: {question}</h3>
                </div>
                <div>
                    <button onClick={seeAnswer}><FontAwesomeIcon icon={faEye} ></FontAwesomeIcon></button>
                </div>
            </div>
            <div className='options'>

                {
                    quiz.options.map(option => <Option
                        key={option}
                        option={option}
                    ></Option>)
                }

            </div>

        </div>
    );
};

export default Questions;