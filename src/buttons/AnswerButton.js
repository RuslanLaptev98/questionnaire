import React from 'react'

export default function AnswerButton({
    answer,
    answerNumber,
    selectedButton,
    setSelectedButton,
    refAnswer,
}) {
    return (
        <button
            className={
                selectedButton == answerNumber
                    ? 'button question__answer-btn selected'
                    : 'button question__answer-btn'
            }
            onClick={() => {
                setSelectedButton(answerNumber)
                refAnswer.current = answer
            }}
        >
            <p className="text-main start__start-btn-text">{answer}</p>
        </button>
    )
}
