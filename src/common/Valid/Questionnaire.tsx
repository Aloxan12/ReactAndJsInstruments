import React, {useState} from "react";
import style from './Valid.module.css';
import {useForm} from "react-hook-form";
import {v1} from "uuid";

type DataUserType = {
    city: string
    education: string
    favoriteColor: string
}

type UserType = {
    id: string
    firstName: string
    lastName: string
    age: number
    data: DataUserType
}

export const Questionnaire = () => {
    const [user, setUser] = useState<UserType | null>(null)
    const {register, handleSubmit} = useForm();

    const onSubmit = (data: any) => {
        console.log(JSON.stringify(data))
        setUser({id: v1(), ...data})
    }

    return (
        <div className={style.wrap}>
            {user ?
                <div>
                    <Profile user={user}/>
                    <QuestionnaireComponent setUser={setUser}/>
                    <button className={style.btn} onClick={() => setUser(null)}>Ввести другие данные</button>
                </div>
                : <>
                    Пользователя нет, введите данные:
                    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            First Name*:
                            <input type='text' required {...register('firstName')}/>
                        </label>
                        <label>
                            Last Name:
                            <input type='text' {...register('lastName')}/>
                        </label>
                        <label>
                            Age*:
                            <input type='number' required {...register('age')}/>
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
    value: string
    answers: AnswerType[]
}
type QuestionnaireComponentType = {
    //setUser: (user:UserType)=> void
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>
}
const QuestionnaireComponent: React.FC<QuestionnaireComponentType> = ({setUser}) => {
    const {register, handleSubmit} = useForm();

    const questsFromServer = [
        {
            "title": "Из какого ты города?",
            'value': 'city',
            "answers": [{"title": "Минск"}, {"title": "Москва"}]
        },
        {
            "title": "У тебя есть высшее образование?",
            'value': 'education',
            "answers": [{"title": "да"}, {"title": "нет"}]
        },
        {
            "title": "Какой твой любимый цвет?",
            'value': 'favoriteColor',
            "answers": [{"title": "красный"}, {"title": "синий"}]
        },
    ]

    const quests: QuestionType[] = JSON.parse(JSON.stringify(questsFromServer)) //??
    const onSubmit = (data: any) => {
        console.log(JSON.stringify(data))
        console.log(data)
        return setUser(prevState => (prevState ? {...prevState, data: data} : prevState))
    }
    console.log(quests)
    return (
        <div>
            <h3>Вопросы</h3>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>

                {quests.map((quest, index) => {
                    return (
                        <>
                            <label>{quest.title}</label>
                            <select {...register(`${quest.value}`)} name={quest.value}>
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

interface IProfile {
    user: UserType
}

const Profile:React.FC<IProfile> = ({user}) => {
    return (
        <pre>
            <p>Привет! Меня зовут {user.firstName},</p>
            {user.lastName ? `моя фамилия ${user.lastName},` : ''}
            <p>мне {user.age} лет</p>
            {user.data && user.data.city ? <p>Я из города {user?.data.city}</p> : ''}
            {user.data && user.data.education === 'да' ? <p>У меня есть высшее образование</p> : ''}
            {user.data && user.data.education === 'нет' ? <p>У меня нет высшего образование</p> : ''}
            {user.data && user.data.favoriteColor ? <p>Мой любимый цвет {user.data.city}</p> : ''}
        </pre>
    )
}
