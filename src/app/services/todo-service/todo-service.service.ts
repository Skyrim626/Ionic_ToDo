import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private todoStorageKey ='todos';

  constructor() { 
    
  }

  // Get Todos
  getTodos() : string[] {
    const todosJson = localStorage.getItem(this.todoStorageKey);
    return todosJson ? JSON.parse(todosJson) : [];
  }

  // Add todo
  addTodo(todoItem : string) : void {

    const currentTodos = this.getTodos();
    currentTodos.push(todoItem);
    localStorage.setItem(this.todoStorageKey, JSON.stringify(currentTodos));

    console.log("Todo Added");

  }

  // Get ToDo by index
  getTodoByIndex(index: number) : string {

    const currentTodos = this.getTodos();

    if(index >=0 && index < currentTodos.length) {

      return currentTodos[index];
    }
    
    return "";
  }

  // Edit ToDo by index
  editTodo(index: number, newText: string) : void {
    
    const currentTodos = this.getTodos();
    if(index >=0 && index < currentTodos.length) { 
      currentTodos[index] = newText;
      localStorage.setItem(this.todoStorageKey, JSON.stringify(currentTodos));
    }

  }

  // Remove ToDo
  removeTodo(index: number) {

    const currentTodos = this.getTodos();
    if(index >=0 && index < currentTodos.length) { 
      currentTodos.splice(index, 1);
      localStorage.setItem(this.todoStorageKey, JSON.stringify(currentTodos));
    }
    
  }



}
