import { useState, useEffect, useRef } from 'react'
import Start from './Start'
import Question from './Question'
import Result from './Result'

function App() {
    /* app has 3 stages: 'start', 'question' and 'result' */
    const [stage, setStage] = useState('start')

    const [questions, setQuestions] = useState(null)
    const [answers, setAnswers] = useState(null)
    const [totalAnswers, setTotalAnswers] = useState({
        easy: 0,
        middle: 0,
        hard: 0,
    })
    const [correctAnswers, setCorrectAnswers] = useState({
        easy: 0,
        middle: 0,
        hard: 0,
    })
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [difficulty, setDifficulty] = useState(null)
    const [questionType, setQuestionType] = useState(null)
    const [questionContent, setQuestionContent] = useState(null)

    const fetching = () => {
        fetch('https://opentdb.com/api.php?amount=10')
            .then((res) => res.json())
            .then((data) => setQuestions(data.results))
    }

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
    const countingCorrectAnswers = () => {
        if (questions[currentQuestion]) {
            questions[currentQuestion].difficulty === 'easy'
                ? setEasyCorrect(easyCorrect + 1)
                : questions[currentQuestion].difficulty === 'medium'
                ? setMediumCorrect(mediumCorrect + 1)
                : setHardCorrect(hardCorrect + 1)
        }
    }

    const [selectedButton, setSelectedButton] = useState()

    const settingQuestionContent = () => {
        setQuestionContent(questions[currentQuestion].question)
    }
    const settingQuestionTypes = () => {
        questions[currentQuestion].type === 'boolean'
            ? setQuestionType('true or false')
            : questions[currentQuestion].type === 'multiple'
            ? setQuestionType('one correct answer')
            : setQuestionType()
    }
    const settingQuestionDifficulties = () => {
        setDifficulty(questions[currentQuestion].difficulty)
    }
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

    useEffect(() => {}, [countingCorrectAnswers])
    useEffect(() => {
        settingCorrectAnswers()
    }, [easyCorrect, mediumCorrect, hardCorrect])

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
