import React from 'react'
import Easy from './difficulty/Easy'
import Middle from './difficulty/Middle'
import Hard from './difficulty/Hard'
import QuitButton from './buttons/QuitButton'

export default function Result({
    setStage,
    correctAnswers,
    totalAnswers,
    fetching,
    setCorrectAnswers,
    setEasyCorrect,
    setMediumCorrect,
    setHardCorrect,
}) {
    return (
        <div className="result">
            <p className="text-title">Your results:</p>

            <div className="result__main">
                <Easy />
                <p className="result-score text-main">
                    Correct answers: {correctAnswers.easy}/{totalAnswers.easy}
                </p>
                <Middle />
                <p className="result-score text-main">
                    Correct answers: {correctAnswers.middle}/
                    {totalAnswers.middle}
                </p>
                <Hard />
                <p className="result-score text-main">
                    Correct answers: {correctAnswers.hard}/{totalAnswers.hard}
                </p>
            </div>
            <QuitButton
                setStage={setStage}
                fetching={fetching}
                setCorrectAnswers={setCorrectAnswers}
                setEasyCorrect={setEasyCorrect}
                setMediumCorrect={setMediumCorrect}
                setHardCorrect={setHardCorrect}
            />
        </div>
    )
}
