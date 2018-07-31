import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';
import './TaskItem.scss';

const TaskItem = ({ todo }) => (
    <div className="tasks-wrap">
        <form action="smth" className="form task-form">
            <fieldset className="field-wrap">
                <input type="checkbox" className="btn-status-complete" data-state="status-complete-task" checked="false" />
                <p className="field name-field" data-id="">{todo}</p>
            </fieldset>
            <div className="btn-group">
                <button className="btn btn-sm btn-status" data-state="status-task" data-status="0" />
                <button className="btn btn-sm btn-edit" data-state="edit-task" />
                <button className="btn btn-sm btn-delete-item" data-state="delete-task" />
                <button className="btn btn-sm btn-save" data-state="save-task" />
                <button className="btn btn-sm btn-cancel" data-state="cancel-task" />
            </div>
        </form>
    </div>
  );

TaskItem.propTypes = {
    todo: PropTypes.string,
};

TaskItem.defaultProps = {
    todo: '',
};
export default TaskItem;
