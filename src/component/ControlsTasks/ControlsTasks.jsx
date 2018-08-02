import React from 'react';
import PropTypes from 'prop-types';
import ControlsForm from '../ControlsForm/ControlsForm';
import '../../styles/common-style.scss';
import './ControlsTasks.scss';

const ControlTasks = ({ value, onTextChange, onSubmitTask }) => {
    const onValueChange = event => onTextChange(event);

    const onValueSubmit = (action, event) => onSubmitTask(action, event);

    return (
        <section className="controls-task-main">
            <ControlsForm
                action="add"
                onSubmitTask={onValueSubmit}
                onTextChange={onValueChange}
                value={value}
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
