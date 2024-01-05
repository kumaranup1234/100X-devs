/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
    
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(i){
    if( i >= 0 && i < this.todos.length){
      this.todos.splice(i, 1);
    }
  }
  update(i, updatedTodo){
    if(i >= 0 && i < this.todos.length){
      this.todos[i] = updatedTodo;
    }
  }
  getAll(){
    return this.todos;
  }
  get(i){
    if( i >= 0 && i < this.todos.length){
      return this.todos[i];
    }else{
      return null;
    }
  }
  clear(){
    this.todos = [];
  }

}

module.exports = Todo;
