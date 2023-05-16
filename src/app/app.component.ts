import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks = [{ name: 'Sleeping', difficulty: 'hard', completed: true }];

  // taskAdded(task : {name : string ; difficulty : string ; completed : string }) {

  // }
  taskAdded(event: { task: { name: string; difficulty: string } }) {
    this.tasks.push({
      name: event.task.name,
      difficulty: event.task.difficulty,
      completed: false,
    });
  }

  clearTasks() {
    this.tasks = [];
  }

  statusChanged(selectedTask) {
    for (let task of this.tasks) {
      if (task.name === selectedTask.name) {
        task.completed = !task.completed;
      }
    }
  }

  taskDeleted(selectedTask) {
    this.tasks = this.tasks.filter(function (task) {
      return task !== selectedTask;
    });
  }
}
// books = [
//   {
//     title: 'Game of Thrones',
//     author: 'George R.R Martin',
//     publication_year: 2015,
//   },

//   {
//     title: 'The Lord of the Rings',
//     author: 'J.R.R Tolkein',
//     publication_year: 2018,
//   },
// ];

// onBookRemove(book: {
//   title: string;
//   author: string;
//   publication_year: number;
// }) {
//   let index = this.books.indexOf(book);
//   if (index > -1) {
//     this.books.splice(index, 1);
//   }
// }

// onBookAdded(book: {
//   title: string;
//   author: string;
//   publication_year: number;
// }) {
//   this.books.push(book);
//   console.log('onBookAdded Called');
// }
// serverElements = [];

// onServerAdded(serverData: { serverName: string; serverContent: string }) {
//   this.serverElements.push({
//     type: 'server',
//     name: serverData.serverName,
//     content: serverData.serverContent,
//   });
// }

// onChangeFirst() {
//   this.serverElements[0].name = 'Changes';
// }
// onBlueprintAdded(blueprintData: {
//   blueprintName: string;
//   blueprintContent: string;
// }) {
//   this.serverElements.push({
//     type: 'blueprint',
//     name: blueprintData.blueprintName,
//     content: blueprintData.blueprintContent,
//   });
// }
