import * as Task from '../lib/task';

function main(): void {
    const task: Task.Task = {description: "Some Task", isCompleted: false};
    console.log("task is: " + task);
}

main();
