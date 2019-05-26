import React, { Component } from 'react';
import uuidv4 from 'uuidv4';
import './todo.css';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            task: '',
            items: [
                {
                    id: uuidv4(),
                    task: 'Pay the rent',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Go to the gym',
                    completed: false
                },
                {
                    id: uuidv4 (),
                    task: 'Do my homework',
                    completed: false
                }
            ]
        };
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="Todo">
                <h1>New Task:</h1>

                <form onSubmit={this.handleOnSubmit}>
                    <input 
                        value={this.state.task}
                        onChange={this.handleOnChange}
                    />
                </form>

                <List 
                    items={this.state.items}
                    markAsCompleted={this.markAsCompleted}
                    removeTask={this.removeTask}
                />
            </div>
        );
    }
}

export default Todo;