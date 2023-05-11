import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  @Input() book: { title: string; author: string; publication_year: number };
  @Output() bookremoved = new EventEmitter<{
    book: { title: string; author: string; publication_year: number };
  }>();

  removeBook(book) {
    this.bookremoved.emit({ book });
  }
}
