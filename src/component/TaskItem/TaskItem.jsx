import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import '../../styles/common-style.scss';
import './TaskItem.scss';

const TaskItem = ({ todo, onInitAction }) => {
    const onActionSubmit = (action, event) => onInitAction(action, todo.id, event);

    return (
        <div className="tasks-wrap">
            <div action="smth" className="form task-form">
                <div className="field-wrap">
                    {/* <input type="checkbox" className="btn-status-complete" data-state="status-complete-task" checked="false" /> */}
                    <p className="field name-field" data-id="">{todo.name}</p>
                </div>
                <div className="btn-group">
                    <button className="btn btn-sm btn-status" data-state="status-task" data-status="0" />
                    <button className="btn btn-sm btn-edit" data-state="edit-task" />
                    <Button action="delete" onActionSubmit2={onActionSubmit} />
                    <button className="btn btn-sm btn-save" data-state="save-task" />
                    <button className="btn btn-sm btn-cancel" data-state="cancel-task" />
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
