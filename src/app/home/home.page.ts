import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { NavController } from '@ionic/angular';
import { TodoServiceService } from '../services/todo-service/todo-service.service';

import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NgForOf],
})
export class HomePage {

  toDos : any[] = [];

  items: string[] = ["Test 1000", "Test 2", "Test 3"];
  constructor(
    private navController : NavController,
    private todoService: TodoServiceService,
  ) {}

  ionViewWillEnter() {
    this.getTodos();
  }

  add() {
    this.navController.navigateForward(['add-edit']);
  }

  getTodos() {
    this.toDos = this.todoService.getTodos();
    return this.toDos;
  }

  delete(index: number) {
    this.toDos = this.todoService.getTodos();
    this.todoService.removeTodo(index);
  }

  update(index: number, text: string) {

  }


}
