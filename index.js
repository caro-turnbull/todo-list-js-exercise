// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = []

function newTask(title, description){
  const task = {
    title,
    description,
    complete: false,
    markComplete: function() {
      this.complete = true
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    }
  }
  return task;
}

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
// }

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   task.complete = true;
// }

// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  // const title = taskTitles[taskIndex];
  // const complete = taskComplete[taskIndex];
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

const task1 = newTask("clean Cat Litter", "Take out all the 💩")
const task2 = newTask("Do Laundry", "🤬")
const tasks = [task1, task2]

task1.logState()
task1.markComplete()
task1.logState()

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks)
