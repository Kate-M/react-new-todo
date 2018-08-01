import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import '../../styles/common-style.scss';
import './TaskItem.scss';

const TaskItem = ({ todo, onInitAction }) => {
    const onActionSubmit = (action, event) => onInitAction(action, todo.id, event);
    if (todo.editable) {
        return (
            <div className="tasks-wrap" data-mode={todo.editable}>
                <div className="form task-form">
                    <div className="field-wrap">
                        <input type="text" className="field edit-name-field" value={todo.name} />
                    </div>
                    <div className="btn-group">
                        <Button action="save" onActionSubmit={onActionSubmit} />
                        <Button action="cancel" onActionSubmit={onActionSubmit} />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="tasks-wrap">
            <div className="form task-form">
                <div className="field-wrap">
                    <p className="field name-field" data-id="">{todo.name}</p>
                </div>
                <div className="btn-group">
                    <button className="btn btn-sm btn-status-item" data-state="status-task" data-status="0" />
                    <Button action="edit" onActionSubmit={onActionSubmit} />
                    <Button action="delete" onActionSubmit={onActionSubmit} />
                </div>
            </div>
        </div>
    );
};

TaskItem.propTypes = {
    todo: PropTypes.object,
    onInitAction: PropTypes.func,
};

TaskItem.defaultProps = {
    todo: {},
    onInitAction: () => { },
};
export default TaskItem;
