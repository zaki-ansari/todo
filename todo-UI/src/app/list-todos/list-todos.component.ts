import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ){}
};

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]=[]; 
  message: string='';
  // = [
  //   new Todo(1, "learn to study coding", false, new Date()),
  //   new Todo(2, "learn to consistent", false, new Date()),
  //   new Todo(3, "learn to focus", false, new Date()),
  // ];

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('zaki').subscribe((response) => this.todos = response);
  }

  deleteTodo(id: any){
    this.todoService.deleteTodo("zaki", id).subscribe((response) =>{
      console.log("delete todo: ", response);
      this.refreshTodos();
      this.message = `Delete of Todo ${id} Successfull`;
    })
  }

  updateTodo(id: any){
    console.log("update");
    this.router.navigate(['todos', id]);
  }

  createTodo(){
    this.router.navigate(['todos', -1]);
  }
    
}
