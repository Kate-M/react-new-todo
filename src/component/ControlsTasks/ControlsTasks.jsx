import React from 'react';
import PropTypes from 'prop-types';
import ControlsForm from '../ControlsForm/ControlsForm';
import FilterContainer from '../FilterContainer/FilterContainer';
import '../../styles/common-style.scss';
import './ControlsTasks.scss';

const ControlTasks = ({ addValue, searchValue, onTextChange, onSubmitTask, onFilter }) => {
    const onValueChange = (action, event) => onTextChange(action, event);

    const onValueSubmit = (action, event) => onSubmitTask(action, event);

    const onSubmitFilter = (action, event) => onFilter(action, event);

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
                onSubmitFilter={onSubmitFilter}
            />
        </section>
    );
};

ControlTasks.propTypes = {
    addValue: PropTypes.string,
    searchValue: PropTypes.string,
    onTextChange: PropTypes.func,
    onSubmitTask: PropTypes.func,
    onFilter: PropTypes.func,
};

ControlTasks.defaultProps = {
    addValue: '',
    searchValue: '',
    onTextChange: () => { },
    onSubmitTask: () => { },
    onFilter: () => { },
};

export default ControlTasks;
