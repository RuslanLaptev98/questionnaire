import React from 'react'
import StartButton from './StartButton'

export default function Start() {
    return (
        <div className="start">
            <p className="text-title">Welcome to the Questionnaire!</p>
            <div>
                <p className="text-main">
                    Today we are going to test your general knowledge in a
                    simple 10 questions quiz.
                </p>
                <p className="text-main">
                    Questions vary by difficulty (easy, middle and hard), and by
                    type (one or multiple correct answers)
                </p>
                <p className="text-main">
                    To begin the quiz, hit the Start button!
                </p>
            </div>
            <StartButton />
        </div>
    )
}
