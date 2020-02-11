import React from "react";

const todos = [
  {
    text: "Think of a todo"
  },
  {
    text: "Get Laundry"
  },
  {
    text: "Buy grocery"
  },
];

const Todo = ({ todo, deleteTodo }) => {
  return <div>{todo.text} <button onClick={deleteTodo}>delete</button></div>;
};

class App extends React.Component {
  state = {
    todos,
    todoText: ""
  };

  addTodo = () => {
    this.setState({
      todos: [{ text: this.state.todoText }, ...this.state.todos]
    });
  };

  setTodoText = text => {
    this.setState({
      todoText: text
    });
  };

  deleteTodo = (index) => {
    const {todos} = this.state;
    todos.splice(index, 1);

    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.todos.map((todo, index) => (
          <Todo todo={todo} key={index} deleteTodo={() => this.deleteTodo(index)} />
        ))}
        <input
          onChange={e => {
            this.setTodoText(e.target.value);
          }}
          value={this.state.todoText}
        />
        <button onClick={this.addTodo}>Yay</button>
      </div>
    );
  }
}

export default App;
