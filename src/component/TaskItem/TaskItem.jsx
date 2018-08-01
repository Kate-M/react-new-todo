import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import '../../styles/common-style.scss';
import './TaskItem.scss';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.todo };
    }

    onActionSubmit = (action, event) => this.props.onInitAction(
        action,
        this.props.todo.id,
        this.state.name,
        event,
    );

    onTextChange = (event) => {
        this.setState({
            name: event,
        });
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

    renderDefault() {
        const { name } = this.state;
        return (
            <div className="tasks-wrap">
                <div className="form task-form">
                    <div className="field-wrap">
                        <p className="field name-field" data-id="">{name}</p>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-sm btn-status-item" data-state="status-task" data-status="0" />
                        <Button action="edit" onActionSubmit={this.editTask} />
                        <Button action="delete" onActionSubmit={this.onActionSubmit} />
                    </div>
                </div>
            </div>
        );
    }
    renderForm() {
        const { name, editable } = this.state;
        return (
            <div className="tasks-wrap" data-mode={editable}>
                <form className="form task-form">
                    <div className="field-wrap">
                        {/* <input type="text" className="field edit-name-field" value={todo.name} /> */}
                        <Input
                            optionalClass="field"
                            action="edit"
                            onTextChange={this.onTextChange}
                            value={name}
                        />
                    </div>
                    <div className="btn-group">
                        <Button action="save" onActionSubmit={this.onActionSubmit} />
                        <Button action="cancel" onActionSubmit={this.cancelTask} />
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
