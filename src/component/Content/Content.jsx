import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            isSearched: false,
            tasks: [...store],
            searchedTasks: [],
            isFilterError: false,
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
                this.setFilter(STATUS.COMPLETE);
                break;
            case 'filter-default':
                this.setFilter(STATUS.DEFAULT);
                break;
            case 'filter-in_process':
                this.setFilter(STATUS.IN_PROCESS);
                break;
            case 'filter-all':
                this.setFilter(STATUS.All);
                break;
            default:
                console.log('default');
        }
    }

    setFilter = (action) => {
        const tasksList = this.state.tasks;
        if (!action) {
            this.setState({
                searchedTasks: tasksList,
            });
        } else {
            const currentTaskList = tasksList.filter(e =>
                e.status === action,
            );
            this.setState({
                isSearched: true,
                isFilterError: false,
            });
            if (currentTaskList.length) {
                this.setState({
                    searchedTasks: currentTaskList,
                });
            } else {
                this.setState({
                    isFilterError: true,
                });
            }
        }
    }

    switchTasksAction = (action, id, name, event) => {
        console.log(action);
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
            case 'filter-complete':
                console.log('filter-complete');
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
            this.setState({
                isSearched: false,
                searchValue: '',
            });
            this.setChanges(this.state.tasks);
            this.sendToDB(this.state.tasks);
        }
    }

    searchTask = (event) => {
        const tasksList = this.state.tasks;
        const currentTaskList = tasksList.filter(e =>
            e.name.toLowerCase().startsWith(event.toLowerCase()),
        );
        this.setState({
            isSearched: true,
            isFilterError: false,
            searchValue: event,
        });
        if (currentTaskList.length) {
            this.setState({
                searchedTasks: currentTaskList,
            });
        } else {
            this.setState({
                isFilterError: true,
            });
        }
    }

    resetSearchTask = () => {
        this.setState({
            searchValue: '',
            isSearched: false,
            isFilterError: false,
        });
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

    sendToDB = (tasks) => {
        const taskData = JSON.stringify(tasks);
        window.localStorage.setItem('todo', taskData);
    }

    render() {
        const { action } = this.props;
        const { addValue,
            searchValue,
            isSearched,
            searchedTasks,
            isFilterError,
            tasks } = this.state;
        return (
            <main>
                <div className="container">
                    <ControlsTasks
                        action={action}
                        onSubmitTask={this.switchControlsAction}
                        onFilter={this.switchFiltersAction}
                        onTextChange={this.switchTaskValueChange}
                        addValue={addValue}
                        searchValue={searchValue}
                        isSearched={isSearched}
                    />
                    <TaskContainer
                        todos={isSearched ? searchedTasks : tasks}
                        error={isFilterError}
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

