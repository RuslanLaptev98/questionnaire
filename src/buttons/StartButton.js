import React from 'react'

export default function StartButton({
    setStage,
    countingTotalDifficulty,
    settingQuestionTypes,
    settingQuestionDifficulties,
    settingAnswers,
    settingQuestionContent,
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
            }}
        >
            <p className="text-main">Start</p>
        </button>
    )
}
