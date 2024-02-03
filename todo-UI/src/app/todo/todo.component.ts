import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number = -1;
  todo:Todo = new Todo(0, '', false, new Date());
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    if(this.id != -1){
      this.todoService.retrieveTodo('zaki', this.id)
      .subscribe((response)=> {
        this.todo = response;
        console.log(response)
      });
    }
  }

  saveTodo(){
    console.log("saveTode");
    if(this.id == -1){
      this.todoService.createTodo('zaki', this.todo)
      .subscribe((response)=>{
        console.log(response);
        this.router.navigate(['todos'])
      })
    }else{
      this.todoService.updateTodo('zaki', this.id, this.todo)
      .subscribe((response)=>{
        this.todo = response;
        console.log(response);
        this.router.navigate(['todos'])
      })
    }
  }
}
