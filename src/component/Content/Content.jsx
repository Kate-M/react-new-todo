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
    onTextChange = (e) => { this.setState({ value: e }); }

    onSubmitTask = (e) => {
        e.preventDefault();
        if (this.state.value) {
            const task = this.state.value;
            this.state.tasks.unshift(task);
            this.setState({
                value: '',
                tasks: this.state.tasks,
            });
            this.sendToDB();
        }
    }

    sendToDB = () => {
        const taskData = JSON.stringify(this.state.tasks);
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
                        onSubmitTask={this.onSubmitTask}
                        onTextChange={this.onTextChange}
                        value={value}
                    />
                    <TaskContainer todos={tasks} />
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

