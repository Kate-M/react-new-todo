import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlsTasks from '../ControlsTasks/ControlsTasks';
import TaskContainer from '../TaskContainer/TaskContainer';
import store from '../store';
import { STATUS_DEFAULT, STATUS_INPROCESS, STATUS_COMPLETE } from '../status';
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

    switchControlsAction = (action, event) => {
        console.log(action, event);
        event.preventDefault();
        switch (action) {
        case 'add':
            this.addTask(event);
            break;
        case 'search':
            this.searchTask(event);
            break;
        default:
            console.log('default');
        }
    }

    switchTasksAction = (action, id, name, event) => {
        switch (action) {
        case 'delete':
            this.deleteTask(id, event);
            break;
        case 'save':
            this.saveTask(id, name, event);
            break;
        case 'status-process':
            this.setStatusProcess(id, event);
            break;
        case 'status-complete':
            this.setStatusComplete(id);
            break;
        default:
            console.log('default');
        }
    }

    addTask = () => {
        if (this.state.value) {
            const task = {
                id: Date.now() + this.state.value,
                name: this.state.value,
                status: STATUS_DEFAULT,
            };
            this.state.tasks.unshift(task);
            this.setState({
                value: '',
                tasks: this.state.tasks,
            });
            this.sendToDB(this.state.tasks);
        }
    }

    searchTask = (event) => {
        event.preventDefault();
        console.log(event);
    }

    deleteTask = (id, event) => {
        event.preventDefault();
        const currentTaskList = this.state.tasks.filter(e =>
            e.id !== id,
        );
        this.setState({
            tasks: currentTaskList,
        });
        this.sendToDB(currentTaskList);
    }

    saveTask = (id, name, event) => {
        event.preventDefault();
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

    setStatusComplete = (id) => {
        this.state.tasks.forEach((e) => {
            if (e.id === id) {
                if (e.status === STATUS_COMPLETE) {
                    e.status = STATUS_DEFAULT;
                } else {
                    e.status = STATUS_COMPLETE;
                }
            }
        });
        this.setState({
            value: '',
            tasks: this.state.tasks,
        });
        this.sendToDB(this.state.tasks);
    }

    setStatusProcess = (id, event) => {
        event.preventDefault();
        this.state.tasks.forEach((e) => {
            if (e.id === id) {
                if (e.status === STATUS_INPROCESS) {
                    e.status = STATUS_DEFAULT;
                } else {
                    e.status = STATUS_INPROCESS;
                }
            }
        });
        this.setState({
            value: '',
            tasks: this.state.tasks,
        });
        this.sendToDB(this.state.tasks);
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
                        onSubmitTask={this.switchControlsAction}
                        onTextChange={this.newTaskValueChange}
                        value={value}
                    />
                    <TaskContainer
                        todos={tasks}
                        switchAction={this.switchTasksAction}
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

