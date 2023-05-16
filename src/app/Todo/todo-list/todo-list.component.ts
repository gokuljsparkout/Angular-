import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() task: { name: string; difficulty: string; completed: boolean };
  @Output() deleteTask = new EventEmitter<{
    task: { name: string; difficulty: string; completed: boolean };
  }>();
  @Output() changeTaskStatus = new EventEmitter<{
    task: { name: string; difficulty: string; completed: boolean };
  }>();

  onDeleteTask(task) {
    this.deleteTask.emit(task);
  }
  getCompletionStatus() {
    if (this.task.completed === true) {
      return 'line-through';
    } else {
      return 'none';
    }
  }

  changeCompletionStatus(task) {
    this.changeTaskStatus.emit(task);
  }
  getDifficultyColor() {
    const diff = this.task.difficulty.toLowerCase();
    if (diff === 'easy') {
      return 'green';
    } else {
      if (diff === 'medium') {
        return 'blue';
      } else {
        return 'red';
      }
    }
  }
}
