import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      title: 'Share Your Quotes Here',
      counter: 0,
    };
  }

  addTodo(e) {
    
    e.preventDefault();
    const author = this.refs.author.value;
    const quote = this.refs.quote.value;
    let counter = this.state.counter;


    const todo = {
      author, quote, counter,
    };

    counter++;

    const todos = this.state.todos;

    todos.push(todo);

    this.setState({
      todos,
      counter,
    });

    this.refs.todoForm.reset();
  }

  removeQuote(index) {
    const newTodos = [...this.state.todos];

    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos,
    });
  }


  render() {
    const title = this.state.title;
    const todos = this.state.todos;
    return (
      <div >
        <form ref="todoForm" className="App">
          <h1>{title}</h1>
          <label>Author  </label>
          <input type="text" ref="author" placeholder="Enter Author Name" autoFocus />
          <br /><br />

          <label>Quote </label>
          <textarea ref="quote" placeholder="Enter quote" />
          <br /><br />

          <button className="addBtn" onClick={this.addTodo}>Add</button>
        </form>

        <ul>
          {this.state.todos.map((todo, index) => (

            <li className="list_wrap" key={todo.counter}><div className="myListdata">"{todo.quote}" !</div>
              <div className="authorsign"> - {todo.author}</div>
              <div className="myBtnrmv">
                <button className="remove_btn" onClick={() => this.removeQuote(index)}>Remove</button>
              </div>
            </li>
              ))}

          <div />
        </ul>
      </div>
    );
  }
}

export default App;
