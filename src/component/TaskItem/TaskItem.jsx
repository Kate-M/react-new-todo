import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import { statusOfTask as STATUS } from '../status';
import '../../styles/common-style.scss';
import './TaskItem.scss';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.todo };
    }
    /**
     * The onActionSubmit to all.
     * @public
    */
    onActionSubmit = (action, event) => {
        const { todo, onInitAction } = this.props;
        const { name } = this.state;
        onInitAction(
            action,
            todo.id,
            name,
            event,
        );
    };
    /**
     * The to all.
     * @public
    */
    onTextChange = (event) => {
        this.setState({
            name: event,
        });
    }
    /**
     * The to all.
     * @public
    */
    setComplete = (action, event) => {
        this.onActionSubmit(action, event);
    }
    /**
     * The to all.
     * @public
    */
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
    /**
     * The to all.
     * @public
    */
    editTask = () => {
        this.setState({
            editable: true,
        });
    }
    /**
     * The to all.
     * @public
    */
    cancelTask = () => {
        this.setState({
            name: this.props.todo.name,
            editable: false,
        });
    }
    /**
     * The to all.
     * @public
    */
    saveChangeTask = (action, event) => {
        this.setState({
            editable: false,
        });
        this.onActionSubmit(action, event);
    }
    /**
     * The to all.
     * @public
    */
    deleteTask = (action, event) => {
        this.onActionSubmit(action, event);
    }

    renderDefault() {
        const { status } = this.props;
        const { name } = this.state;
        return (
            <div className="tasks-wrap">
                <form className="task-item">
                    <div className="field-wrap">
                        <Checkbox action="status-complete" onActionSubmit={this.setComplete} status={status} />
                        <p className="field name-field">{name}</p>
                    </div>
                    <div className="btn-group">
                        <Button action="status-process" onActionSubmit={this.onActionSubmit} status={status} />
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
    todo: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    status: PropTypes.oneOf([STATUS.DEFAULT, STATUS.IN_PROCESS, STATUS.COMPLETE]).isRequired,
    onInitAction: PropTypes.func,
};

TaskItem.defaultProps = {
    todo: {},
    status: STATUS.DEFAULT,
    onInitAction: () => { },
};
export default TaskItem;
