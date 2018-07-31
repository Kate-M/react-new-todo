import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import '../../styles/common-style.scss';
import './ControlsTasks.scss';

const ControlTasks = ({ action, value, onTextChange, onSubmitTask }) => {
    const onValueChange = e => onTextChange(e);
    const onValueSubmit = e => onSubmitTask(e);

    return (
        <section className="controls-task-main">
            <Form
                action={action}
                onSubmitTask={onValueSubmit}
                onTextChange={onValueChange}
                value={value}
            />
        </section>
    );
};

ControlTasks.propTypes = {
    action: PropTypes.string,
    value: PropTypes.string,
    onTextChange: PropTypes.func,
    onSubmitTask: PropTypes.func,
};

ControlTasks.defaultProps = {
    action: '',
    value: '',
    onTextChange: () => { },
    onSubmitTask: () => { },
};

export default ControlTasks;
