import {inject, observer} from "mobx-react";
import React, {useEffect} from "react";
import {AnswerInterface} from "./stores/onboardingStore/onboardingStore";
import OnboardingStoreInstance from "./stores/onboardingStore";



export const Onboarding = observer(() => {
    const { questions, checkedAnswer, nextQuestion, getOnboarding } = OnboardingStoreInstance
    const currentQuestion = questions[OnboardingStoreInstance.currentQuestion]



    useEffect(()=>{
        getOnboarding()
    },[])
    return (
        <div>
            Анкета
            <div>
                <div>Название вопроса {currentQuestion?.title}</div>
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
                <span>{OnboardingStoreInstance.currentQuestion}</span>
                <button onClick={() => nextQuestion(currentQuestion?.answers)}>Следующий вопрос
                </button>
            </div>
            {`${questions.length}`}

            <h2>Продолжить</h2>
        </div>
    )
})