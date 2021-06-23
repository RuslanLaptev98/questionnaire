import React, { useEffect, useState } from 'react'
import AnswerButton from './buttons/AnswerButton'
import Easy from './difficulty/Easy'
import Middle from './difficulty/Middle'
import Hard from './difficulty/Hard'
import NextButton from './buttons/NextButton'

export default function Question({
    questions,
    answers,
    currentQuestion,
    incrementQuestion,
    difficulty,
    questionType,
    countingTotalDifficulty,
    settingQuestionTypes,
    settingQuestionDifficulties,
    settingAnswers,
    settingQuestionContent,
    questionContent,
    selectedButton,
    setSelectedButton,
    countingCorrectAnswers,
    refAnswer,
    settingCorrectAnswers,
    decrementingByOne,
}) {
    let answerNumbers = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
    }
    useEffect(() => {
        countingTotalDifficulty()
        settingQuestionTypes()
        settingQuestionDifficulties()
        settingAnswers()
        settingQuestionContent()

        console.log(
            refAnswer.current,
            questions[currentQuestion].correct_answer,
            currentQuestion
        )
    }, [currentQuestion])
    return (
        <div className="question">
            <p className="text-title">Question {currentQuestion + 1}/10</p>
            {difficulty === 'easy' ? (
                <Easy />
            ) : difficulty === 'medium' ? (
                <Middle />
            ) : (
                <Hard />
            )}
            <p className="text-main question__content">
                {questionContent} ({questionType})
            </p>
            {questions[currentQuestion].type === 'multiple' ? (
                <div>
                    <AnswerButton
                        answer={answers[0]}
                        answers={answers}
                        answerNumber={answerNumbers.zero}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        refAnswer={refAnswer}
                    />
                    <AnswerButton
                        answer={answers[1]}
                        answers={answers}
                        answerNumber={answerNumbers.one}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        refAnswer={refAnswer}
                    />
                    <AnswerButton
                        answer={answers[2]}
                        answers={answers}
                        answerNumber={answerNumbers.two}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        refAnswer={refAnswer}
                    />
                    <AnswerButton
                        answer={answers[3]}
                        answers={answers}
                        answerNumber={answerNumbers.three}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        refAnswer={refAnswer}
                    />
                </div>
            ) : (
                <div>
                    <AnswerButton
                        answer={answers[0]}
                        answers={answers}
                        answerNumber={answerNumbers.zero}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        refAnswer={refAnswer}
                    />
                    <AnswerButton
                        answer={answers[1]}
                        answers={answers}
                        answerNumber={answerNumbers.one}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        refAnswer={refAnswer}
                    />
                </div>
            )}
            <NextButton
                incrementQuestion={incrementQuestion}
                setSelectedButton={setSelectedButton}
                answers={answers}
                countingCorrectAnswers={countingCorrectAnswers}
                refAnswer={refAnswer}
                questions={questions}
                currentQuestion={currentQuestion}
                countingTotalDifficulty={countingTotalDifficulty}
            />
        </div>
    )
}
