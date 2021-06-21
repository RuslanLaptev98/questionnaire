import React from 'react'
import AnswerButton from './AnswerButton'
import Easy from './difficulty/Easy'
import Middle from './difficulty/Middle'
import Hard from './difficulty/Hard'

export default function Question() {
    return (
        <div className="question">
            <p className="text-title">Question 1/10</p>

            <Easy />
            {/* 
            <Middle />
            <Hard />
            */}

            <p className="text-main question__content">Question content</p>
            <AnswerButton />
            <AnswerButton />
            <AnswerButton />
            <AnswerButton />
        </div>
    )
}
