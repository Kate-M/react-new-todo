import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlsTasks from '../ControlsTasks/ControlsTasks';
import TaskContainer from '../TaskContainer/TaskContainer';
import store from '../store';
import '../../styles/common-style.scss';
import './Content.scss';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            tasks: [...store],
        };
    }
    newTaskValueChange = (event) => { this.setState({ value: event }); }

    addTask = (event) => {
        event.preventDefault();
        if (this.state.value) {
            const task = {
                id: Date.now() + this.state.value,
                name: this.state.value,
            };
            this.state.tasks.unshift(task);
            this.setState({
                value: '',
                tasks: this.state.tasks,
            });
            this.sendToDB(this.state.tasks);
        }
    }

    switchAction = (action, id, name, event) => {
        event.preventDefault();
        switch (action) {
        case 'delete':
            this.deleteTask(id);
            break;
        case 'save':
            this.saveTask(id, name);
            break;
        case 'in-process':
            console.log('in-process');
            break;
        case 'complete':
            console.log('complete');
            break;
        default:
            console.log('default');
        }
    }

    deleteTask = (id) => {
        const currentTaskList = this.state.tasks.filter(e => e.id !== id);
        this.setState({
            tasks: currentTaskList,
        });
        this.sendToDB(currentTaskList);
    }

    saveTask = (id, name) => {
        this.state.tasks.forEach((e) => {
            if (e.id === id) {
                e.name = name;
            }
        });
        this.setState({
            value: '',
            tasks: this.state.tasks,
        });
        this.sendToDB(this.state.tasks);
    }

    saveRenamedTask = (currentTaskList) => {
        this.sendToDB(currentTaskList);
    }

    sendToDB = (tasks) => {
        const taskData = JSON.stringify(tasks);
        window.localStorage.setItem('todo', taskData);
    }

    render() {
        const { action } = this.props;
        const { value, tasks } = this.state;
        return (
            <main>
                <div className="container">
                    <ControlsTasks
                        action={action}
                        onSubmitTask={this.addTask}
                        onTextChange={this.newTaskValueChange}
                        value={value}
                    />
                    <TaskContainer
                        todos={tasks}
                        switchAction={this.switchAction}
                    />
                </div>
            </main>
        );
    }
}

Content.propTypes = {
    action: PropTypes.string,
};

Content.defaultProps = {
    action: '',
};

export default Content;

