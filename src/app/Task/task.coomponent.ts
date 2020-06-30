import { Component } from '@angular/core';
import ITask from './ITask';

@Component({
  // selector: '',
  templateUrl: './task.component.html',
})


export class TaskComponent {
  text: string;
  price = 0;

  items: ITask[] =
    [
      { purchase: 'Хлеб', done: false, price: 15.9 },
      { purchase: 'Масло', done: false, price: 60 },
      { purchase: 'Картофель', done: true, price: 22.6 },
      { purchase: 'Сыр', done: false, price: 310 }
    ];
  addItem(text: string, price: number): void {

    if (text == null || text.trim() === '' || price == null) {
      return;
    }
    this.items.push(new ITask(text, price));
  }
}
