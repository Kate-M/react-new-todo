import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import '../../styles/common-style.scss';
import './TaskItem.scss';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.todo };
    }

    onActionSubmit = (action, event) => {
        this.props.onInitAction(
            action,
            this.props.todo.id,
            this.state.name,
            event,
        );
    };

    onTextChange = (event) => {
        this.setState({
            name: event,
        });
    }

    setComplete = (action, event) => {
        this.onActionSubmit(action, event);
    }

    switchAction = (action, event) => {
        event.preventDefault();
        switch (action) {
        case 'edit':
            this.editTask();
            break;
        case 'cancel':
            this.cancelTask();
            break;
        case 'save':
            this.saveChangeTask(action, event);
            break;
        case 'delete':
            this.deleteTask(action, event);
            break;
        default:
            console.log('default');
        }
    }

    editTask = () => {
        this.setState({
            editable: true,
        });
    }

    cancelTask = () => {
        this.setState({
            name: this.props.todo.name,
            editable: false,
        });
    }

    saveChangeTask = (action, event) => {
        this.setState({
            editable: false,
        });
        this.onActionSubmit(action, event);
    }

    deleteTask = (action, event) => {
        this.onActionSubmit(action, event);
    }

    renderDefault() {
        const { name, status } = this.state;
        return (
            <div className="tasks-wrap">
                <form className="task-item">
                    <div className="field-wrap">
                        <Checkbox onActionSubmit={this.setComplete} status={status} />
                        <p className="field name-field">{name}</p>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-sm btn-status-item" data-state="status-task" data-status="0" />
                        <Button action="edit" onActionSubmit={this.switchAction} />
                        <Button action="delete" onActionSubmit={this.switchAction} />
                    </div>
                </form>
            </div>
        );
    }
    renderForm() {
        const { name } = this.state;
        return (
            <div className="tasks-wrap">
                <form className="task-item">
                    <div className="field-wrap">
                        <Input
                            optionalClass="field"
                            action="edit"
                            onTextChange={this.onTextChange}
                            value={name}
                        />
                    </div>
                    <div className="btn-group">
                        <Button action="save" onActionSubmit={this.switchAction} />
                        <Button action="cancel" onActionSubmit={this.switchAction} />
                    </div>
                </form>
            </div>
        );
    }
    render() {
        if (this.state.editable) {
            return this.renderForm();
        }
        return this.renderDefault();
    }
}

TaskItem.propTypes = {
    todo: PropTypes.object,
    onInitAction: PropTypes.func,
};

TaskItem.defaultProps = {
    todo: {},
    onInitAction: () => { },
};
export default TaskItem;
