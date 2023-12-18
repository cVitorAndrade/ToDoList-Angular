import { Component, DoCheck } from '@angular/core';
import { TodoButtonDeleteAllComponent } from '../todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from '../todo-input-add-itens/todo-input-add-itens.component';
import { CommonModule } from '@angular/common';
import { Task } from '../../model/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoButtonDeleteAllComponent, TodoInputAddItensComponent, CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements DoCheck {
  public taskList : Array<Task> = JSON.parse(localStorage.getItem("@toDoList-Angular:tasks") || '[]');

  public deleteTask(index : number): void {
    this.taskList.splice(index, 1);
  }

  public deleteAllTasks(): void {
    const confirm = window.confirm("Deseja apagar tudo?");

    if ( confirm ) {
      this.taskList = [];
    }
  }

  public setTask(task : Task): void {
    this.taskList.push(task);
  }

  ngDoCheck(): void {
    this.taskList.sort( (a, b) => Number(a.checked) - Number(b.checked))
    localStorage.setItem("@toDoList-Angular:tasks", JSON.stringify(this.taskList));
  }

}
