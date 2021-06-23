import React, { useEffect } from 'react'
import StartButton from './buttons/StartButton'

export default function Start({
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
    useEffect(() => {}, [])
    return (
        <div className="start">
            <p className="text-title">Welcome to the Questionnaire!</p>
            <div>
                <p className="text-main">
                    Today we are going to test your general knowledge in a
                    simple 10 questions quiz.
                </p>
                <p className="text-main">
                    Questions vary by difficulty (easy, middle and hard), and by
                    type (true/false or multiple options with one correct
                    answer)
                </p>
                <p className="text-main">
                    To begin the quiz, hit the Start button!
                </p>
            </div>
            <StartButton
                setStage={setStage}
                countingTotalDifficulty={countingTotalDifficulty}
                settingQuestionTypes={settingQuestionTypes}
                settingQuestionDifficulties={settingQuestionDifficulties}
                settingAnswers={settingAnswers}
                settingQuestionContent={settingQuestionContent}
                refAnswer={refAnswer}
                questions={questions}
                countingCorrectAnswers={countingCorrectAnswers}
                currentQuestion={currentQuestion}
            />
        </div>
    )
}
