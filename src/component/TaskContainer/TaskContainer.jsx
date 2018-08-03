import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem';
import '../../styles/common-style.scss';
import './TaskContainer.scss';

const TaskContainer = ({ todos, switchAction, error }) => {
    const onSetAction = (action, id, name, event) => { switchAction(action, id, name, event); };

    const renderDefault = () => (
        <section className="tasks-container">
            { todos.map(e =>
            (<TaskItem
                key={e.id}
                todo={e}
                status={e.status}
                onInitAction={onSetAction}
            />)) }
        </section>
    );

    const renderError = () => (
        <div className="tasks-container">
            <p className="error-filter">Nothing</p>
        </div>
    );

    if (error) {
        return renderError();
    }
    return renderDefault();
};

TaskContainer.propTypes = {
    todos: PropTypes.array,
    switchAction: PropTypes.func,
};

TaskContainer.defaultProps = {
    todos: [],
    switchAction: () => { },
};

export default TaskContainer;
