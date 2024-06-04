import { Component } from '@angular/core';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  book = {
    "name": "El nombre del viento",
    "category": "Fantasía",
    "price": "45000",
    "stock": "4",
    "image": "assets/img/viento.jpeg"
  }
}
