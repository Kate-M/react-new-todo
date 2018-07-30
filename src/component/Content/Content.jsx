import React from 'react';
import ControlsTask from '../ControlsTask/ControlsTask';
import TaskContainer from '../TaskContainer/TaskContainer';
import '../../styles/common-style.scss';
import './Content.scss';

const Content = () => (
    <main>
        <div className="container">
            <ControlsTask />
            <TaskContainer />
        </div>
    </main>
  );

export default Content;
