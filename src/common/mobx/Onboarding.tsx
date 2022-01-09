import {inject, observer} from "mobx-react";
import React, {useEffect} from "react";
import './Onboarding.css'
import {AnswerInterface} from "./stores/onboardingStore/onboardingStore";
import OnboardingStoreInstance from "./stores/onboardingStore";


export const Onboarding = observer(() => {
    const {questions, checkedAnswer, nextQuestion, getOnboarding} = OnboardingStoreInstance
    const currentQuestion = questions[OnboardingStoreInstance.currentQuestion]


    useEffect(() => {
        getOnboarding()
    }, [])
    return (
        <div className="onboarding-wrap">
            <div className="onboarding">
                <h2>Анкета</h2>
                <div>
                    <div>{currentQuestion?.title}</div>
                    {currentQuestion?.answers.map((answ: AnswerInterface, i: number) => {
                        return (
                            <div key={answ.title}>
                                <label>
                                    <input
                                        name={answ.title}
                                        value={answ.title}
                                        type="checkbox"
                                        onChange={() => checkedAnswer(answ.id)}
                                    />
                                    {answ.title}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {questions.map(question => {
                        return (
                            <>
                                <label>{question.title}</label>
                                <select value={question.title}>
                                    {question.answers.map((answer: any) => {
                                        return (
                                            <option value={answer.title} onChange={() => checkedAnswer(answer.id)}>
                                                {answer.title}
                                            </option>
                                        )
                                    })}
                                </select>
                            </>)
                    })}
                </div>
                <div>
                    <span>{OnboardingStoreInstance.currentQuestion}</span>
                    <button onClick={() => nextQuestion(currentQuestion?.answers)}>Следующий вопрос
                    </button>
                </div>
            </div>
        </div>
    )
})