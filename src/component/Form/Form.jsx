import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Submit from '../Submit/Submit';
import Input from '../Input/Input';
import TaskContainer from '../TaskContainer/TaskContainer';
import '../../styles/common-style.scss';
import './Form.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.taskList = JSON.parse(window.localStorage.getItem('todo'));
        this.state = {
            value: 'Todo',
            tasks: (this.taskList || []),
        };
        this.updateData = this.updateData.bind(this);
        this.submitData = this.submitData.bind(this);
    }
    updateData(event) {
        this.setState({ value: event });
    }
    submitData(e) {
        e.preventDefault();
        const task = this.state.value;
        this.state.tasks.push(task);
        this.setState({ tasks: this.taskList });
        const taskData = JSON.stringify(this.state.tasks);
        window.localStorage.setItem('todo', taskData);
    }
    render() {
        const { action } = this.props;
        this.state.tasks = JSON.parse(window.localStorage.getItem('todo')) || [];
        return (
            <div>
                <form className={`form ${action}-form`} onSubmit={this.submitData}>
                    <fieldset className="field-wrap">
                        <Input action={action} updateData={this.updateData} />
                    </fieldset>
                    <Submit action={action} />
                </form>
                <TaskContainer todos={this.state.tasks} />
            </div>
        );
    }
}

Form.propTypes = {
    action: PropTypes.string,
};

Form.defaultProps = {
    action: '',
};
export default Form;
