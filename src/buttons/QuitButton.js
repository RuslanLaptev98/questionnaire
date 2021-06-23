import React from 'react'

export default function QuitButton({
    setStage,
    fetching,
    setEasyCorrect,
    setMediumCorrect,
    setHardCorrect,
}) {
    return (
        <button
            className="button result__quit-btn"
            onClick={() => {
                setStage('start')
                setEasyCorrect(0)
                setMediumCorrect(0)
                setHardCorrect(0)
                fetching()
            }}
        >
            <p className="text-main">Quit</p>
        </button>
    )
}
