import React, { useEffect } from 'react'
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
    settingQuestionTypes,
    settingQuestionDifficulties,
    settingAnswers,
    settingQuestionContent,
    questionContent,
    selectedButton,
    setSelectedButton,
    countingCorrectAnswers,
    refAnswer,
}) {
    let answerNumbers = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
    }
    useEffect(() => {
        settingQuestionTypes()
        settingQuestionDifficulties()
        settingAnswers()
        settingQuestionContent()
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
                        answerNumber={answerNumbers.zero}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        refAnswer={refAnswer}
                    />
                    <AnswerButton
                        answer={answers[1]}
                        answerNumber={answerNumbers.one}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        refAnswer={refAnswer}
                    />
                    <AnswerButton
                        answer={answers[2]}
                        answerNumber={answerNumbers.two}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        refAnswer={refAnswer}
                    />
                    <AnswerButton
                        answer={answers[3]}
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
                        answerNumber={answerNumbers.zero}
                        selectedButton={selectedButton}
                        setSelectedButton={setSelectedButton}
                        refAnswer={refAnswer}
                    />
                    <AnswerButton
                        answer={answers[1]}
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
                countingCorrectAnswers={countingCorrectAnswers}
                refAnswer={refAnswer}
                questions={questions}
                currentQuestion={currentQuestion}
            />
        </div>
    )
}
