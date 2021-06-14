import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService],
})
export class TodoListComponent implements OnInit {
  // todos: Todo[];
  todoTitle: string;
  // idForTodo: number;
  // beforeEditCache: string;
  // filter: string;

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    //   this.filter = 'all';
    //   this.beforeEditCache = '';
    //   this.idForTodo = 5;
    this.todoTitle = '';
    //   this.todos = [
    //     {
    //       id: 1,
    //       title: 'Learn Angular',
    //       completed: false,
    //       editing: false,
    //     },
    //     {
    //       id: 2,
    //       title: 'Take control over the world',
    //       completed: false,
    //       editing: false,
    //     },
    //     {
    //       id: 3,
    //       title: 'Buy some potato chips',
    //       completed: false,
    //       editing: false,
    //     },
    //     {
    //       id: 4,
    //       title: 'Call mom',
    //       completed: false,
    //       editing: false,
    //     },
    //   ];
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }
    this.todoService.addTodo(this.todoTitle);

    this.todoTitle = '';
  }
  //   this.todos.push({
  //     id: this.idForTodo,
  //     title: this.todoTitle,
  //     completed: false,
  //     editing: false,
  //   });
  //   this.todoTitle = '';
  //   this.idForTodo++;
  // }
  // editTodo(todo: Todo): void {
  //   this.beforeEditCache = todo.title;
  //   todo.editing = true;
  // }

  // doneEdit(todo: Todo): void {
  //   if (todo.title.trim().length === 0) {
  //     todo.title = this.beforeEditCache;
  //   }
  //   todo.editing = false;
  // }
  // cancelEdit(todo: Todo): void {
  //   todo.title = this.beforeEditCache;
  //   todo.editing = false;
  // }
  // deleteTodo(id: number): void {
  //   this.todos = this.todos.filter((todo) => todo.id !== id);
  // }

  // remaining(): number {
  //   return this.todos.filter((todos) => !todos.completed).length;
  // }
  // atLeastOneCompleted(): boolean {
  //   return this.todos.filter((todo) => todo.completed).length > 0;
  // }
  // clearCompleted(): void {
  //   this.todos = this.todos.filter((todo) => !todo.completed);
  // }

  // toggleCheck(value: boolean) {
  //   for (let i = 0; i < this.todos.length; i++) {
  //     this.todos[i].completed = value;
  //   }
  // }
  // todosFiltered(): Todo[] {
  //   if (this.filter === 'all') {
  //     return this.todos;
  //   } else if (this.filter === 'active') {
  //     return this.todos.filter((todo) => !todo.completed);
  //   } else {
  //     return this.todos.filter((todo) => todo.completed);
  //   }
  // }
}
