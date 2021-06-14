import { Component, Input, OnInit} from '@angular/core';
import { Todo } from '../Interface/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}
}
