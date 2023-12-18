import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { TodoInputAddItensComponent } from '../../components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoButtonDeleteAllComponent } from '../../components/todo-button-delete-all/todo-button-delete-all.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    TodoListComponent,
    TodoInputAddItensComponent,
    TodoButtonDeleteAllComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
