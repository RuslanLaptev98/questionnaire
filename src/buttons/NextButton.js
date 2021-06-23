import React from 'react'

export default function NextButton({
    incrementQuestion,
    selectedButton,
    setSelectedButton,
    countingCorrectAnswers,
    answers,
    refAnswer,
    questions,
    currentQuestion,
    countingTotalDifficulty,
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
                countingTotalDifficulty()
            }}
        >
            <p className="text-main">Next</p>
        </button>
    )
}
