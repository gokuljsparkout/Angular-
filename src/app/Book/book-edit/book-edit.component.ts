import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent {
  @Output() bookadded = new EventEmitter<{
    title: string;
    author: string;
    publication_year: number;
  }>();
  @ViewChild('BookTitle') BookTitle: ElementRef;
  @ViewChild('BookAuthor') BookAuthor: ElementRef;
  @ViewChild('BookPublicationYear') BookPublicationYear: ElementRef;
  clearInputs() {
    this.BookTitle.nativeElement.value = '';
    this.BookAuthor.nativeElement.value = '';
    this.BookPublicationYear.nativeElement.value = null;
  }
  addbook() {
    this.bookadded.emit({
      title: this.BookTitle.nativeElement.value,
      author: this.BookAuthor.nativeElement.value,
      publication_year: this.BookPublicationYear.nativeElement.value,
    });
    this.clearInputs();
  }
}
