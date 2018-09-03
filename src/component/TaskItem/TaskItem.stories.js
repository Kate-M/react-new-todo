import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import styles from '@sambego/storybook-styles';
import ButtonReadme from './TaskItemREADME.md';
import { statusOfTask as STATUS } from '../status';
import TaskItem from './TaskItem';

const stories = storiesOf('TaskItem', module);
stories.addDecorator(withKnobs).addDecorator(withReadme(ButtonReadme));

stories.addDecorator(styles({
    alignItems: 'center',
    width: '300px',
    justifyContent: 'center',
    height: '500px',
})).add('TaskItem', () => {
    const StatusLabel = 'Status';
    const StatusOptions = {
        [STATUS.COMPLETE]: 'Complete',
        [STATUS.DEFAULT]: 'Default',
    };
    const StatusDefaultValue = STATUS.COMPLETE;
    const Todos = [];
    const TodosLenghtLabel = 'Count';
    const TodosLenghtDefaultValue = 1;
    const TodosLenghtOptions = {
        // range: true,
        min: 1,
        max: 90,
        step: 1,
    };
    const TodosNameLabel = 'Task Name';
    const TodosNameDefaultValue = 'Task';
    const setSize = (size, taskName) => {
        for (let i = 1; i <= size; i++) {
            const todoItem = { id: `taskId${i}`, name: taskName, status: select(StatusLabel, StatusOptions, StatusDefaultValue) };
            Todos.push(todoItem);
        }
    };
    setSize(number(TodosLenghtLabel, TodosLenghtDefaultValue, TodosLenghtOptions),
        text(TodosNameLabel, TodosNameDefaultValue));
    const content = (
        <section className="tasks-container">
            {Todos.map(e =>
                (<TaskItem
                    key={e.id}
                    todo={e}
                    status={e.status}
                    onInitAction={action('onSetAction')}
                />))}
        </section>
    );
    return (<div>{content}</div>);
});
