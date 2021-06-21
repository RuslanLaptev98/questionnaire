import React from 'react'
import Easy from './difficulty/Easy'
import Middle from './difficulty/Middle'
import Hard from './difficulty/Hard'
import QuitButton from './QuitButton'

export default function Result() {
    return (
        <div className="result">
            <p className="text-title">Your results:</p>

            <div className="result__main">
                <Easy />
                <p className="result-score text-main">Correct answers: 1/3</p>
                <Middle />
                <p className="result-score text-main">Correct answers: 4/4</p>
                <Hard />
                <p className="result-score text-main">Correct answers: 2/3</p>
            </div>
            <QuitButton />
        </div>
    )
}
