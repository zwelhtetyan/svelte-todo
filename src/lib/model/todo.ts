export class AddNewTodo {
  id: string;
  taskName: string;
  done: boolean;

  constructor(taskName: string) {
    this.id = new Date().getTime().toString();
    this.taskName = taskName;
    this.done = false;
  }
}
