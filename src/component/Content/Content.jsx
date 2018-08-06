import React, { Component } from 'react';
import ControlsTasks from '../ControlsTasks/ControlsTasks';
import TaskContainer from '../TaskContainer/TaskContainer';
import store from '../store';
import { statusOfTask as STATUS } from '../status';
import '../../styles/common-style.scss';
import './Content.scss';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addValue: '',
            searchValue: '',
            currentStatus: '',
            isSearched: false,
            isFiltered: false,
            tasks: [...store],
        };
    }

    switchTaskValueChange = (action, event) => {
        switch (action) {
        case 'add':
            this.addTaskValueChange(event);
            break;
        case 'search':
            this.searchTask(event);
            break;
        default:
            console.log('default');
        }
    }

    switchControlsAction = (action, event) => {
        event.preventDefault();
        switch (action) {
        case 'add':
            this.addTask();
            break;
        case 'reset':
            this.resetSearchTask();
            break;
        default:
            console.log('default');
        }
    }
    switchFiltersAction = (action, event) => {
        event.preventDefault();
        switch (action) {
        case 'filter-complete':
            this.setFilterValue(STATUS.COMPLETE);
            break;
        case 'filter-default':
            this.setFilterValue(STATUS.DEFAULT);
            break;
        case 'filter-in_process':
            this.setFilterValue(STATUS.IN_PROCESS);
            break;
        case 'filter-all':
            this.setFilterValue(STATUS.All);
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

    addTaskValueChange = (event) => {
        this.setState({ addValue: event });
    }

    addTask = () => {
        if (this.state.addValue) {
            const task = {
                id: Date.now() + this.state.addValue,
                name: this.state.addValue,
                status: STATUS.DEFAULT,
            };
            this.state.tasks.unshift(task);
            this.resetPrevChanges();
            this.setChanges(this.state.tasks);
            this.sendToDB(this.state.tasks);
        }
    }

    filterTask = () => {
        let currentTodos = this.state.tasks;
        if (this.state.isSearched) {
            currentTodos = currentTodos.filter(e =>
                e.name.toLowerCase().startsWith(this.state.searchValue.toLowerCase()),
            );
        }
        if (this.state.isFiltered) {
            currentTodos = currentTodos.filter(e =>
                e.status === this.state.currentStatus,
            );
        }

        return currentTodos;
    };

    searchTask = (event) => {
        this.setState({
            isSearched: true,
            isFilterError: false,
            searchValue: event,
        });
    }

    resetSearchTask = () => {
        this.setState({
            searchValue: '',
            isSearched: false,
            isFilterError: false,
        });
    }

    setFilterValue = (action) => {
        if (!action) {
            this.setState({
                isFiltered: false,
            });
        } else {
            this.setState({
                isFilterError: false,
                isFiltered: true,
                currentStatus: action,
            });
        }
    }

    deleteTask = (id, event) => {
        event.preventDefault();
        const currentTaskList = this.state.tasks.filter(e =>
            e.id !== id,
        );
        this.setChanges(currentTaskList);
        this.sendToDB(currentTaskList);
    }

    saveTask = (id, name, event) => {
        event.preventDefault();
        this.state.tasks.forEach((e) => {
            if (e.id === id) {
                e.name = name;
            }
        });
        this.setChanges(this.state.tasks);
        this.sendToDB(this.state.tasks);
    }

    setStatusComplete = (id) => {
        this.setStatus(id, STATUS.COMPLETE);
    }

    setStatusProcess = (id, event) => {
        event.preventDefault();
        this.setStatus(id, STATUS.IN_PROCESS);
    }

    setStatus = (id, status) => {
        this.state.tasks.forEach((e) => {
            if (e.id === id) {
                if (e.status === status) {
                    e.status = STATUS.DEFAULT;
                } else {
                    e.status = status;
                }
            }
        });
        this.setChanges(this.state.tasks);
        this.sendToDB(this.state.tasks);
    }

    setChanges = (currentTaskList) => {
        this.setState({
            addValue: '',
            isFilterError: false,
            tasks: currentTaskList,
        });
    }
    resetPrevChanges = () => {
        this.setState({
            isSearched: false,
            isFiltered: false,
            searchValue: '',
        });
    }
    sendToDB = (tasks) => {
        const taskData = JSON.stringify(tasks);
        window.localStorage.setItem('todo', taskData);
    }

    render() {
        const { addValue,
            searchValue,
            isSearched } = this.state;

        const todos = this.filterTask();
        return (
            <main>
                <div className="container">
                    <ControlsTasks
                        onSubmitTask={this.switchControlsAction}
                        onFilter={this.switchFiltersAction}
                        onTextChange={this.switchTaskValueChange}
                        addValue={addValue}
                        searchValue={searchValue}
                        isSearched={isSearched}
                    />
                    <TaskContainer
                        todos={todos}
                        error={!todos.length}
                        switchAction={this.switchTasksAction}
                    />
                </div>
            </main>
        );
    }
}

export default Content;

