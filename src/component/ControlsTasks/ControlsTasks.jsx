import React from 'react';
import PropTypes from 'prop-types';
import ControlsForm from '../ControlsForm/ControlsForm';
import '../../styles/common-style.scss';
import './ControlsTasks.scss';

const ControlTasks = ({ addValue, searchValue, onTextChange, onSubmitTask }) => {
    const onValueChange = (action, event) => onTextChange(action, event);

    const onValueSubmit = (action, event) => onSubmitTask(action, event);

    return (
        <section className="controls-task-main">
            <ControlsForm
                action="add"
                placeholder="Add a task"
                onSubmitTask={onValueSubmit}
                onTextChange={onValueChange}
                value={addValue}
            />
            <ControlsForm
                action="search"
                placeholder="Search"
                onSubmitTask={onValueSubmit}
                onTextChange={onValueChange}
                value={searchValue}
            />

        </section>
    );
};

ControlTasks.propTypes = {
    value: PropTypes.string,
    onTextChange: PropTypes.func,
    onSubmitTask: PropTypes.func,
};

ControlTasks.defaultProps = {
    value: '',
    onTextChange: () => { },
    onSubmitTask: () => { },
};

export default ControlTasks;
