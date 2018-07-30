import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common-style.scss';

const TaskItem = ({ todo }) => (
    <p>{todo}</p>
  );

TaskItem.propTypes = {
    todo: PropTypes.string,
};

TaskItem.defaultProps = {
    todo: '',
};
export default TaskItem;
