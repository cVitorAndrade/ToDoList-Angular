import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input-add-itens',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input-add-itens.component.html',
  styleUrl: './todo-input-add-itens.component.scss'
})
export class TodoInputAddItensComponent {
  @Output() public addTaskEvent = new EventEmitter();
  public newTask : string = "";

  public addNewTask(): void {
    this.newTask = this.newTask.trim();
    
    if ( this.newTask ) {
      this.addTaskEvent.emit({ name: this.newTask, checked: false });
      this.newTask = "";
    }
    
  }

}
