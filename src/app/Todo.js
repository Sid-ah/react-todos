import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  handleClick(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.input.value];
    this.input.value = '';
    this.setState({todos: todos});
  }
  render() {
    return (
      <div>
        <form>
          {/* that's the same as doing ref='content', but more effiecient because
              you don't have to do this.refs.content.
           */}
          <input ref={node => this.input = node} type="text" placeholder="new todo" />
            <button onClick={this.handleClick.bind(this)}>Create</button>
          </form>
          <ul>
            {this.state.todos.map(todo => <li key={todo}>{todo}</li>)}
          </ul>
      </div>
    );
  }
}
