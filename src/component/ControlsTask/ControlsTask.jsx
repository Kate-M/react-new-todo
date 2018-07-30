import React from 'react';
import AddTask from '../AddTask/AddTask';
import '../../styles/common-style.scss';
import './ControlsTask.scss';

const ControlsTask = () => (
    <section className="controls-task-main">
        <AddTask action="add" />
    </section>
  );

export default ControlsTask;
