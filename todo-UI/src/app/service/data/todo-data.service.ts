import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username: string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, obj: Todo){
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`,obj);
  }

  createTodo(username: string, obj: Todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`,obj);
  }

}
