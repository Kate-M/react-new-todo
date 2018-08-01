import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem';
import '../../styles/common-style.scss';
import './TaskContainer.scss';

const TaskContainer = ({ todos, switchAction }) => {

    const onSetAction = (action, id, name, event) => { switchAction(action, id, name, event); };
    return (
        <section className="tasks-container">
            { todos.map(e =>
            (<TaskItem
                key={e.id}
                todo={e}
                onInitAction={onSetAction}
            />)) }
        </section>
    );
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
