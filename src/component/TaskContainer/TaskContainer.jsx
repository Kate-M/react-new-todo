import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem';
import '../../styles/common-style.scss';
import './TaskContainer.scss';

const TaskContainer = ({ todos }) => (
    <section className="tasks-container">
        { todos.map((e, i) => <TaskItem key={i} todo={e} />) }
    </section>
  );

TaskContainer.propTypes = {
    todos: PropTypes.array,
};

TaskContainer.defaultProps = {
    todos: [],
};
export default TaskContainer;
