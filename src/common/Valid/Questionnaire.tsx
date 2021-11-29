import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import style from './Valid.module.css';
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import {useForm, Controller} from "react-hook-form";
import {v1} from "uuid";


type UserType = {
    id: string
    firstName: string
    lastName: string
    age: number
}

export const Questionnaire = () => {
    const [user, setUser] = useState<UserType | null>(null)
    const {register, handleSubmit, control} = useForm();

    const onSubmit = (data: any) => {
        console.log(JSON.stringify(data))
        setUser({id: v1(), ...data})
    }

    return (
        <div className={style.wrap}>
            {user ?
                <div>
                    <pre>
                        <p>Привет! Меня зовут {user.firstName},</p>
                        {user.lastName ? `моя фамилия ${user.lastName},` : ''}
                        <p>мне {user.age} лет</p>
                    </pre>
                    <QuestionnaireComponent/>
                    <button className={style.btn} onClick={() => setUser(null)}>Ввести другие данные</button>
                </div>
                : <>
                    Пользователя нет, введите данные:
                    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            First Name:
                            <input type='text' {...register('firstName')}/>
                        </label>
                        <label>
                            Last Name:
                            <input type='text' {...register('lastName')}/>
                        </label>
                        <label>
                            Age:
                            <input type='number' {...register('age')}/>
                        </label>
                        <input className={style.btn} type='submit'/>
                    </form>
                </>
            }
        </div>
    )
}


type AnswerType = {
    title: string
}
type QuestionType = {
    title: string,
    answers: AnswerType[]
}

const QuestionnaireComponent = () => {
    const {register, handleSubmit, control} = useForm();

    const questsFromServer = [
        {
            "title": "Из какого ты города?",
            "answers": [{"title": "Минск"}, {"title": "Москва"}]
        },
        {
            "title": "У тебя есть высшее образование?",
            "answers": [{"title": "да"}, {"title": "нет"}]
        },
        {
            "title": "Какой твой любимый цвет?",
            "answers": [{"title": "красный"}, {"title": "синий"}]
        },
    ]

    const quests: QuestionType[] = JSON.parse(JSON.stringify(questsFromServer)) //??
    const onSubmit = (data: any) => {
        console.log(JSON.stringify(data))
    }
    console.log(quests)
    return (
        <div>
            <h3>Вопросы</h3>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                {/*<label>*/}
                {/*    {quests[0].title}*/}
                {/*</label>*/}
                {/*<select {...register('quest1')}>*/}
                {/*    {quests[0].answers.map(answer => <option value={answer.title}>{answer.title}</option> )}*/}
                {/*</select>*/}
                {/*<label>*/}
                {/*    {quests[1].title}*/}
                {/*</label>*/}
                {/*<select {...register('quest2')}>*/}
                {/*    {quests[1].answers.map(answer => <option value={answer.title}>{answer.title}</option> )}*/}
                {/*</select>*/}
                {/*<label>*/}
                {/*    {quests[2].title}*/}
                {/*</label>*/}
                {/*<select {...register('quest3')}>*/}
                {/*    {quests[2].answers.map(answer => <option value={answer.title}>{answer.title}</option> )}*/}
                {/*</select>*/}

                {quests.map((quest, index) => {
                    return (
                        <>
                            <label>{quest.title}</label>
                            <select {...register(`${quest.title}`)} name={quest.title}>
                                <option style={{display: 'none'}}>Выбрать</option>
                                {quest.answers?.map(answer => <option value={answer.title}>{answer.title}</option>)}
                            </select>
                        </>
                    )
                })}
                <input type='submit' className={style.btn}/>
            </form>
        </div>
    )
}
