import React from 'react';
import PropTypes from 'prop-types';
import ControlsForm from '../Submit/Submit';
import '../../styles/common-style.scss';

const AddTask = ({ action, value, onTextChange, onSubmitTask }) => {
    const onValueChange = event => onTextChange(action, event);

    const onValueSubmit = event => onSubmitTask(action, event);

    return (
        <ControlsForm
            action="add"
            placeholder="Add a task"
            onSubmitTask={onValueSubmit}
            onTextChange={onValueChange}
            value={value}
        />
    );
};

AddTask.propTypes = {
    action: PropTypes.string,
    value: PropTypes.string,
    onTextChange: PropTypes.func,
    onSubmitTask: PropTypes.func,
};

AddTask.defaultProps = {
    action: '',
    value: '',
    onTextChange: () => { },
    onSubmitTask: () => { },
};

export default AddTask;
