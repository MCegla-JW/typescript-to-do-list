import TaskItem from './TaskItem';

interface AllTask {
    tasks: TaskItem[];
    load(): void;
    save(): void;
    clearTask(): void;
    addTask(taskObj: TaskItem): void;
    removeTask(id: string): void;
    editTask(id: string, updateTaskText: string): void;
    toggleTaskChange(id: string): void;
    getTaskToComplete(): TaskItem[];
    getCompeletedTask(): TaskItem[];
}

export default class TaskList implements AllTask {
    private _tasks: TaskItem[] = [];

    get tasks(): TaskItem[] {
        return this._tasks;
    }

    load(): void {
        const storedTasks: string | null = localStorage.getItem("myTodo"); // using union here - task can me a string or null 
        if (!storedTasks) return;

        const parsedTaskList: {
            _id: string;
            _task: string;
            _completed: boolean;
        } [] = JSON.parse(storedTasks);
        parsedTaskList.forEach((taskObj) => {
            const newTaskList = new TaskItem(
                taskObj._id,
                taskObj._task,
                taskObj._completed
            );
            this.addTask(newTaskList);
        });
    }

    save(): void {
        localStorage.setItem("myTodo", JSON.stringify(this._tasks));
    }
    clearTask(): void {
        this._tasks = [];
        localStorage.removeItem("myTodo");
    }
    addTask(taskObj: TaskItem): void {
        this._tasks.push(taskObj);
        this.save();
    }
    removeTask(id: string): void {
        this._tasks = this._tasks.filter((task) => task.id !== id);
        this.save();
    }
    editTask(id: string, updateTaskText: string): void {
        if (updateTaskText.trim() === "") return;

        const taskToUpdate = this._tasks.find((task) => task.id === id);
        if (!taskToUpdate) return;
        taskToUpdate.task = updateTaskText;
        this.save();
    }
    toggleTaskChange(id: string): void {
        const taskToUpdateChange = this._tasks.find((task) =>
            task.id === id)
            if (!taskToUpdateChange) return;
            taskToUpdateChange.completed = !taskToUpdateChange.completed;
            this.save();
    }
    getCompeletedTask(): TaskItem[] {
            const completedTask = this._tasks.filter((task) =>
            task.completed);
            return completedTask;
    }
    getTaskToComplete(): TaskItem[] {
        const taskToComplete = this._tasks.filter((task) => !task.completed)
        return taskToComplete;
    }
}