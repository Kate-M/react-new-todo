import React from 'react';
import PropTypes from 'prop-types';
import ControlsForm from '../ControlsForm/ControlsForm';
import FilterContainer from '../FilterContainer/FilterContainer';
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
                submitAction="add"
            />
            <ControlsForm
                action="search"
                placeholder="Search a task"
                onSubmitTask={onValueSubmit}
                onTextChange={onValueChange}
                value={searchValue}
                submitAction="reset"
            />
            <FilterContainer
                action="filter"
            />
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
