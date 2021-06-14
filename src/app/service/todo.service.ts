import { Injectable } from '@angular/core';
import { Todo } from '../Interface/todo';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoTitle = '';
  idForTodo = 5;
  beforeEditCache = '';
  filter = 'all';
  todos: Todo[] = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
      editing: false,
    },
    {
      id: 2,
      title: 'Take control over the world',
      completed: false,
      editing: false,
    },
    {
      id: 3,
      title: 'Buy some potato chips',
      completed: false,
      editing: false,
    },
    {
      id: 4,
      title: 'Call mom',
      completed: false,
      editing: false,
    },
  ];
  constructor() {}
  addTodo(todoTitle: string): void {
    if (todoTitle.trim().length === 0) {
      return;
    }
    this.todos.push({
      id: this.idForTodo,
      title: todoTitle,
      completed: false,
      editing: false,
    });
    this.idForTodo++;
  }

  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }
  cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }
  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  remaining(): number {
    return this.todos.filter((todos) => !todos.completed).length;
  }
  atLeastOneCompleted(): boolean {
    return this.todos.filter((todo) => todo.completed).length > 0;
  }
  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  // tslint:disable-next-line:typedef
  toggleCheck(value: boolean) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.todos.length; i++) {
      this.todos[i].completed = value;
    }
  }
  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter((todo) => !todo.completed);
    } else {
      return this.todos.filter((todo) => todo.completed);
    }
  }
  // tslint:disable-next-line:typedef
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
