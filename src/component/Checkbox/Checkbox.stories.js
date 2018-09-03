import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import ButtonReadme from './CheckboxREADME.md';
import { statusOfTask as STATUS } from '../status';
import Checkbox from './Checkbox';

const stories = storiesOf('Checkbox', module);
stories.addDecorator(withKnobs).addDecorator(withReadme(ButtonReadme));

stories.add('Checkbox', () => {
    const label = 'Status';
    const options = {
        [STATUS.COMPLETE]: 'Complete',
        [STATUS.DEFAULT]: 'Default',
    };
    const defaultValue = STATUS.COMPLETE;
    const content = (<Checkbox action="status-complete" onActionSubmit={this.setComplete} status={select(label, options, defaultValue)} />);
    return (<div>{content}</div>);
});
