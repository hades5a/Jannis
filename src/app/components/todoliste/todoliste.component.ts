import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoliste',
  templateUrl: './todoliste.component.html',
  styleUrls: ['./todoliste.component.scss']
})
export class TodolisteComponent implements OnInit {

  todoliste = [
    "Apfel",
    "Fleisch",
    "Ketchup"
  ]

  newTodo: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  myFunction() {
    this.todoliste.push(this.newTodo);
  }

}
