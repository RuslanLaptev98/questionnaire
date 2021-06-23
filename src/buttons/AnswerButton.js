import React from 'react'

export default function AnswerButton({
    answer,
    answerNumber,
    answers,
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
                console.log(refAnswer.current)
            }}
        >
            <p className="text-main start__start-btn-text">{answer}</p>
        </button>
    )
}
