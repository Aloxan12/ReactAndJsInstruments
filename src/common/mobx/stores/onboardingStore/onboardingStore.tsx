import {observable, computed, action, makeAutoObservable, makeObservable} from 'mobx'

export interface AnswerInterface {
    title: string
    isChecked: boolean
    id: string
}

export interface QuestionInterface {
    title: string
    answers: any
    currentAnswers?: AnswerInterface[]
}

export class OnboardingStore {

    @observable
    fetchingState: 'initial' | 'fetching' | 'success' = 'initial'

    @observable.deep
    questions: QuestionInterface[] = []

    @observable
    currentQuestion: number = 0

    @computed
    get currentAnswer() {
        return this.questions[this.currentQuestion]
    }

    @action
    nextQuestion = (answers: AnswerInterface[]) => {
        if (!answers?.some((a) => a.isChecked === true)) {
            // отвечен ли текущий вопрос?
            console.log('не выбран ответ')
        } else if (this.currentQuestion === this.questions.length - 1) {
            //Есть ли куда идти дальше?
            ++this.currentQuestion
            console.log('Редирект')
        } else {
            ++this.currentQuestion
        }
    }

    @action
    setAnswer = (answer: AnswerInterface) => {
        this.questions[this.currentQuestion].currentAnswers = [answer]
    }

    @action
    checkedAnswer = (id: string) => {
        const findAnswer = this.questions[this.currentQuestion].answers.find(
            (a: AnswerInterface) => a.id === id)
        const otherAnswer = this.questions[this.currentQuestion].answers.filter(
            (a: AnswerInterface) => a.id !== id)

        if (findAnswer) {
            findAnswer.isChecked = !findAnswer.isChecked
            //otherAnswer.forEach((a: AnswerInterface) => (a.isChecked = false))
            this.questions[this.currentQuestion].answers.forEach((a: AnswerInterface) => {
                if (a.id !== id) {
                    a.isChecked = false
                }
            })
            this.setAnswer(findAnswer)
            alert(`${findAnswer.isChecked}`)
        }
        // this.questions[this.currentQuestion].answers = this.questions[
        //   this.currentQuestion
        // ].answers.map((a: AnswerInterface) =>
        //   a.id === id ? { ...a, isChecked: !a.isChecked } : a,
        // )
    }

    @action
    getOnboarding = async () => {
        this.fetchingState = 'fetching'
        try {
            this.questions = [
                {
                    title: 'Ты любишь кушать ?',
                    answers: [{title: 'да', id: '22132', isChecked: false}, {
                        title: 'нет',
                        id: '421',
                        isChecked: false
                    }],
                },
                {
                    title: 'ты любишь спать ?',
                    answers: [{title: 'да', id: '22132', isChecked: false}, {
                        title: 'очень',
                        id: '421',
                        isChecked: false
                    }],
                },
                {
                    title: 'хочешь чай?',
                    answers: [{title: 'можно', id: '22132', isChecked: false}, {
                        title: 'не, спасибо',
                        id: '421',
                        isChecked: false
                    }],
                },
            ]

            //this.fetchingState = 'success'
            return true
        } catch (e) {
            return console.log('error')
        }
    }

    constructor() {
        makeAutoObservable(this)
        // makeObservable(this, {
        //     fetchingState: observable,
        //     questions: observable.deep,
        //     currentAnswer: computed,
        //     currentQuestion: observable,
        //     nextQuestion: action,
        //     setAnswer: action,
        //     checkedAnswer: action,
        // })
    }
}

export default new OnboardingStore()
