// define the shape of SingleTask object type
// interface vs type 
// Single Task must have all three of these properties 
// export to use across the app 

export interface SingleTask {
    id: string;
    task: string;
    completed: boolean;
}

// implements SingleTask enforces that TaskItem conforms to the SingleTask interface
// constructor - it runs when a new instance is created 
// private _id, _task, _completed are parameters with type annotations and default values
// private - the property can only be accessed inside the class and it prevents external mutation
// _id, _task, _completed - naming convention to indicate internal/private - not required but common
// :string or :boolean - type annotation 
// = "" - default value, allows constructor to be called with no arguments 
// why define properties in the constructor: 
// - declares the properties 
// - assigns them
// - sets visibility 

// Getters and Setters 
/*
    ** Getter **
    get id(): string {
        return this._id;
    }
    - exposes _id as a readable property 
    - lets us write task.id instead of task.getId

    ** Setter **
        set id(id: string) {
        this._id = id;
    }
    - controls how _id is updated
    - lets us write task.id = "123" instead of task.setId("123")

*/
export default class TaskItem implements SingleTask {
        private _id: string;
        private _task: string;
        private _completed: boolean;
    constructor(
        id: string = "",
        task: string = "",
        completed: boolean = false
    ) {
        this._id = id;
        this._task = task;
        this._completed = completed;
    }
    get id(): string {
        return this._id;
    }
    set id(id: string) {
        this._id = id;
    }
    get task(): string {
        return this._task;
    }
    set task(task: string) {
        this._task = task;
    }
    get completed(): boolean {
        return this._completed;
    }
    set completed(completed: boolean) {
        this._completed = completed;
    }
}