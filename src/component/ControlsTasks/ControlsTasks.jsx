import React from 'react';
import PropTypes from 'prop-types';
import ControlsForm from '../ControlsForm/ControlsForm';
import Submit from '../Submit/Submit';
import '../../styles/common-style.scss';
import './ControlsTasks.scss';

const ControlTasks = ({ addValue, searchValue, onTextChange, onSubmitTask, isSearched }) => {
    const onValueChange = (action, event) => onTextChange(action, event);

    const onValueSubmit = (action, event) => onSubmitTask(action, event);

    return (
        <section className={`controls-task-main search-${isSearched}`}>
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
            <Submit action="reset" btnSize="lg" name="Reset search" />
        </section>
    );
};

ControlTasks.propTypes = {
    addValue: PropTypes.string,
    searchValue: PropTypes.string,
    onTextChange: PropTypes.func,
    onSubmitTask: PropTypes.func,
};

ControlTasks.defaultProps = {
    addValue: '',
    searchValue: '',
    onTextChange: () => { },
    onSubmitTask: () => { },
};

export default ControlTasks;
