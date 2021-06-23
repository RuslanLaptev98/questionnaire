import React from 'react'

export default function NextButton({
    incrementQuestion,
    setSelectedButton,
    countingCorrectAnswers,
    refAnswer,
    questions,
    currentQuestion,
}) {
    return (
        <button
            className="button question__next-btn"
            onClick={() => {
                if (
                    refAnswer.current ==
                    questions[currentQuestion].correct_answer
                ) {
                    console.log('correct answer')
                    countingCorrectAnswers()
                } else {
                    console.log('incorrect answer')
                }
                incrementQuestion()
                setSelectedButton()
            }}
        >
            <p className="text-main">Next</p>
        </button>
    )
}
