import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css'

const Quiz = () => {
    const quizzes = useLoaderData();
    console.log(quizzes);

    return (
        <div>
            <h1>Quiz of {quizzes.data.name}</h1>
            <div className='quiz-container'>
                {
                    quizzes.data.questions.map(quiz => <Questions
                        key={quiz.id}
                        quiz={quiz}
                    ></Questions>
                    )
                }
            </div>

        </div>
    );
};

export default Quiz;