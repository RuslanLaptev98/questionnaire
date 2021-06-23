import React from 'react'

export default function StartButton({
    setStage,
    countingTotalDifficulty,
    settingQuestionTypes,
    settingQuestionDifficulties,
    settingAnswers,
    settingQuestionContent,
    refAnswer,
    questions,
    countingCorrectAnswers,
    currentQuestion,
}) {
    return (
        <button
            className="button start__start-btn"
            onClick={() => {
                setStage('question')
                countingTotalDifficulty()
                settingQuestionTypes()
                settingQuestionDifficulties()
                settingAnswers()
                settingQuestionContent()
                console.log(questions)
            }}
        >
            <p className="text-main">Start</p>
        </button>
    )
}
