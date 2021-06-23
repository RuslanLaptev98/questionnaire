import { useState, useEffect, useRef } from 'react'
import Start from './Start'
import Question from './Question'
import Result from './Result'

function App() {
    /* app has 3 stages: 'start', 'question' and 'result' */
    const [stage, setStage] = useState('start')
    /* state to count numbers of answers by each difficulty in a given quiz */
    const [totalAnswers, setTotalAnswers] = useState({
        easy: 0,
        middle: 0,
        hard: 0,
    })
    /* state to count correct answers */
    const [correctAnswers, setCorrectAnswers] = useState({
        easy: 0,
        middle: 0,
        hard: 0,
    })
    /* state for current question */
    const [currentQuestion, setCurrentQuestion] = useState(0)

    /* state for question difficulty: 'easy', 'medium' and 'hard' */
    const [difficulty, setDifficulty] = useState(null)
    /* state for question type: 'true or false' and 'one correct answer' */
    const [questionType, setQuestionType] = useState(null)

    /* state for data */
    const [questions, setQuestions] = useState(null)
    /* state for answers */
    const [answers, setAnswers] = useState(null)
    /* state for questionContent */
    const [questionContent, setQuestionContent] = useState(null)
    /* fetching */
    const fetching = () => {
        fetch('https://opentdb.com/api.php?amount=10')
            .then((res) => res.json())
            .then((data) => setQuestions(data.results))
        console.log(questions)
    }

    /* counting total number of each answer difficulty */
    const countingTotalDifficulty = () => {
        let e = 0,
            m = 0,
            h = 0
        if (questions) {
            questions.map((question) => {
                question.difficulty === 'easy'
                    ? e++
                    : question.difficulty === 'medium'
                    ? m++
                    : h++
            })
        }
        setTotalAnswers({
            easy: e,
            middle: m,
            hard: h,
        })
        console.log('total answers: ', totalAnswers)
    }
    /* counting correct answers */
    const [easyCorrect, setEasyCorrect] = useState(0)
    const [mediumCorrect, setMediumCorrect] = useState(0)
    const [hardCorrect, setHardCorrect] = useState(0)
    const settingCorrectAnswers = () => {
        setCorrectAnswers({
            easy: easyCorrect,
            middle: mediumCorrect,
            hard: hardCorrect,
        })
    }
    const decrementingByOne = () => {
        questions[currentQuestion].difficulty === 'easy'
            ? setEasyCorrect(easyCorrect - 1)
            : questions[currentQuestion].difficulty === 'medium'
            ? setMediumCorrect(mediumCorrect - 1)
            : setHardCorrect(hardCorrect - 1)
    }
    const countingCorrectAnswers = () => {
        console.log('counting correct answers function called')
        if (questions[currentQuestion]) {
            questions[currentQuestion].difficulty === 'easy'
                ? setEasyCorrect(easyCorrect + 1)
                : questions[currentQuestion].difficulty === 'medium'
                ? setMediumCorrect(mediumCorrect + 1)
                : setHardCorrect(hardCorrect + 1)
        }
    }

    /* setting selected button */
    const [selectedButton, setSelectedButton] = useState()
    /* setting question content */
    const settingQuestionContent = () => {
        setQuestionContent(questions[currentQuestion].question)
    }
    /* setting question types */
    const settingQuestionTypes = () => {
        questions[currentQuestion].type === 'boolean'
            ? setQuestionType('true or false')
            : questions[currentQuestion].type === 'multiple'
            ? setQuestionType('one correct answer')
            : setQuestionType()
    }
    /* setting question difficulties */
    const settingQuestionDifficulties = () => {
        setDifficulty(questions[currentQuestion].difficulty)
    }
    /* setting answers */
    const settingAnswers = () => {
        setAnswers(
            [
                questions[currentQuestion].correct_answer,
                ...questions[currentQuestion].incorrect_answers,
            ].sort((a, b) => 0.5 - Math.random())
        )
    }

    /* function to increment question number */
    const incrementQuestion = () => {
        if (currentQuestion < 9) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setStage('result')
            setCurrentQuestion(0)
        }
    }

    /* ref for correct answers */
    const refAnswer = useRef()
    /* fetching on initial render */
    useEffect(() => {
        fetching()
    }, [])

    useEffect(() => {
        settingCorrectAnswers()
    }, [easyCorrect, mediumCorrect, hardCorrect])

    useEffect(() => {
        if (questions) {
        }
    }, [countingCorrectAnswers])
    return (
        <div className="app">
            {!questions ? (
                <div></div>
            ) : (
                <div className="app__card">
                    {stage === 'start' ? (
                        <Start
                            setStage={setStage}
                            countingTotalDifficulty={countingTotalDifficulty}
                            settingQuestionTypes={settingQuestionTypes}
                            settingQuestionDifficulties={
                                settingQuestionDifficulties
                            }
                            settingAnswers={settingAnswers}
                            settingQuestionContent={settingQuestionContent}
                            refAnswer={refAnswer}
                            questions={questions}
                            countingCorrectAnswers={countingCorrectAnswers}
                            currentQuestion={currentQuestion}
                            setCorrectAnswers={setCorrectAnswers}
                        />
                    ) : stage === 'question' ? (
                        <Question
                            questions={questions}
                            answers={answers}
                            currentQuestion={currentQuestion}
                            incrementQuestion={incrementQuestion}
                            difficulty={difficulty}
                            questionType={questionType}
                            countingTotalDifficulty={countingTotalDifficulty}
                            settingQuestionTypes={settingQuestionTypes}
                            settingQuestionDifficulties={
                                settingQuestionDifficulties
                            }
                            settingAnswers={settingAnswers}
                            settingQuestionContent={settingQuestionContent}
                            questionContent={questionContent}
                            selectedButton={selectedButton}
                            setSelectedButton={setSelectedButton}
                            countingCorrectAnswers={countingCorrectAnswers}
                            refAnswer={refAnswer}
                            settingCorrectAnswers={settingCorrectAnswers}
                            decrementingByOne={decrementingByOne}
                        />
                    ) : (
                        <Result
                            setStage={setStage}
                            correctAnswers={correctAnswers}
                            totalAnswers={totalAnswers}
                            fetching={fetching}
                            setCorrectAnswers={settingCorrectAnswers}
                            setEasyCorrect={setEasyCorrect}
                            setMediumCorrect={setMediumCorrect}
                            setHardCorrect={setHardCorrect}
                        />
                    )}
                </div>
            )}
        </div>
    )
}

export default App
