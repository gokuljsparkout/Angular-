import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent {
  @Output() addTask = new EventEmitter<{
    task: {
      name: string;
      difficulty: string;
    };
  }>();

  @Output() clear = new EventEmitter();

  onTaskAdd(nameInput: HTMLInputElement, difficultyInput: HTMLSelectElement) {
    console.log('ontaskadd');
    this.addTask.emit({
      task: {
        name: nameInput.value,
        difficulty: difficultyInput.value,
      },
    });
    nameInput.value = '';
    difficultyInput.value = '';
  }

  onClear() {
    this.clear.emit();
  }
}
