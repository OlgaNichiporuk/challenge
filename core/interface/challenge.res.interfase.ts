export interface IAnswer {
    answer: string,
    correct: boolean
}

export interface Question {
    question: string,
    answers: IAnswer[]
}

export interface IChallengeRes {
    data: Question[]
}
