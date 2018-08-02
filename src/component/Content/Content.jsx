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
            addValue: '',
            searchValue: '',
            tasks: [...store],
        };
    }

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
        if (this.state.addValue) {
            const task = {
                id: Date.now() + this.state.addValue,
                name: this.state.addValue,
                status: STATUS_DEFAULT,
            };
            this.state.tasks.unshift(task);
            this.setChanges(this.state.tasks);
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
        this.setChanges(currentTaskList);
    }

    saveTask = (id, name, event) => {
        event.preventDefault();
        this.state.tasks.forEach((e) => {
            if (e.id === id) {
                e.name = name;
            }
        });
        this.setChanges(this.state.tasks);
    }

    setStatusComplete = (id) => {
        this.setStatus(id, STATUS_COMPLETE);
    }

    setStatusProcess = (id, event) => {
        event.preventDefault();
        this.setStatus(id, STATUS_INPROCESS);
    }

    setStatus = (id, status) => {
        this.state.tasks.forEach((e) => {
            if (e.id === id) {
                if (e.status === status) {
                    e.status = STATUS_DEFAULT;
                } else {
                    e.status = status;
                }
            }
        });
        this.setChanges(this.state.tasks);
    }

    setChanges = (currentTaskList) => {
        this.setState({
            value: '',
            tasks: currentTaskList,
        });
        this.sendToDB(currentTaskList);
    }
    sendToDB = (tasks) => {
        const taskData = JSON.stringify(tasks);
        window.localStorage.setItem('todo', taskData);
    }

    newTaskValueChange = (action, event) => {
        console.log(action, event);
        if (action === 'add') {
            this.setState({ addValue: event });
        } else {
            this.setState({ seacrhValue: event });
        }
    }

    render() {
        const { action } = this.props;
        const { addValue, searchValue, tasks } = this.state;
        return (
            <main>
                <div className="container">
                    <ControlsTasks
                        action={action}
                        onSubmitTask={this.switchControlsAction}
                        onTextChange={this.newTaskValueChange}
                        addValue={addValue}
                        searchValue={searchValue}
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

