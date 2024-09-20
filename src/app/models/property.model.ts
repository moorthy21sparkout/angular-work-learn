//defind the priority enum
export enum Priority {
    High = 'High',
    Medium = 'Medium',
    Low = 'low'
}

export enum Status {
    Completed = 'completed-the-task',
    Inprogress = 'still going on',
    pending = 'not-completed'
}
//Defind the class
export class Task {
    constructor(
        public title: string,
        public priority: Priority,
        public status: Status,
    ) { }
}