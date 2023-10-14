import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TodoServiceService } from '../services/todo-service/todo-service.service';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.page.html',
  styleUrls: ['./add-edit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddEditPage implements OnInit {

  toDo : string = "";

  constructor( 
    private navController : NavController, 
    private todoService : TodoServiceService,
    private toastController : ToastController
    ) { 


  }

  ngOnInit() {

  }

  save() {
    if(this.toDo != "") {
      this.todoService.addTodo(this.toDo);
      this.toDo = "";
      console.log(this.todoService.getTodos());
      this,this.presentSaved();
      this.back();
    }
  }
  

  back() {
    this.navController.navigateBack(['home']);
  }

  // Add Toast
  async presentSaved() {
    const toast = await this.toastController.create({
      message : "Successfully Saved! Kamo na!",
      duration: 2500,
      position: 'bottom'
    });
    await toast.present();
  }
}
