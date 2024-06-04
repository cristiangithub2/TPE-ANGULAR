import { Component } from '@angular/core';
import { Book } from './book';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books: Book[] =[
    {
      name: "El nombre del viento",
      category: "Fantasía",
      price: 45000,
      stock: 4,
      image: "assets/img/viento.jpeg",
      clearance: false,
      quantity:0,
    },
    {
      name: "El ojo del mundo",
      category: "Fantasía",
      price: 40000,
      stock: 1,
      image: "assets/img/viento.jpeg",
      clearance:false,
      quantity:0,
    },
    {
      name: "El imperio final",
      category: "Fantasía",
      price: 50000,
      stock: 0,
      image: "assets/img/viento.jpeg",
      clearance:false,
      quantity:0,
    },
    {
      name: "Noches blancas",
      category: "romance",
      price: 60000,
      stock: 2,
      image: "assets/img/viento.jpeg",
      clearance:true,
      quantity:0,
    }
  ];

  constructor(){}
  ngOnInit(): void{

  }
  upQuantity(book: Book): void{
    if(book.quantity < book.stock)
    book.quantity++;
  }
  downQuantity(book: Book): void{
    if(book.quantity>0)
    book.quantity--;
  }
}